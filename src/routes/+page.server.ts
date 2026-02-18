import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { fetchHomepage } from '$lib/server/datocms.js';
import type { PageServerLoad, Actions } from './$types.js';

export const load: PageServerLoad = async () => {
	const homepage = await fetchHomepage();
	const tags = homepage.companies?.length ? homepage.companies.map((c) => c.tag) : [];

	return { homepage, tags };
};

export const actions: Actions = {
	contact: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const phone = data.get('phone') as string;
		const subject = data.get('subject') as string;
		const text = data.get('text') as string;

		if (!name || !email || !phone || !subject || !text) {
			return fail(400, { error: 'Todos los campos son requeridos.' });
		}

		const apiKey = env.SENDGRID_API_KEY;
		if (!apiKey) {
			return fail(500, { error: 'El servicio de correo no está configurado.' });
		}

		try {
			const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${apiKey}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					personalizations: [{ to: [{ email: 'u.borrell@ascendo.do' }] }],
					from: { email: 'u.borrell@ascendo.do' },
					subject,
					content: [
						{
							type: 'text/html',
							value: `
								<div>${text}</div>
								<br/>
								<p><strong>Nombre: </strong>${name}</p>
								<p><strong>Email: </strong>${email}</p>
								<p><strong>Teléfono: </strong>${phone}</p>
							`
						}
					]
				})
			});

			if (!response.ok) {
				return fail(500, { error: 'Error al enviar el correo.' });
			}

			return { success: true };
		} catch {
			return fail(500, { error: 'Error al enviar el correo.' });
		}
	}
};
