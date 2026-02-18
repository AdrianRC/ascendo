<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';

	let { title, form }: { title: string; form: { success?: boolean; error?: string } | null } =
		$props();

	let submitted = $state<{ done: boolean; error: boolean } | null>(null);

	let isDone = $derived(submitted?.done || !!form);
	let isError = $derived(submitted?.error ?? (form ? !form.success : false));

	const handleSubmit: SubmitFunction = () => {
		return async ({ result }) => {
			submitted = { done: true, error: result.type !== 'success' };
		};
	};
</script>

<section class="contact" id="contact">
	<div class="slider">
		<div class="slide content" class:animate-out={isDone}>
			<h2>{title}</h2>
			<div class="form-wrapper">
				<form id="form1" method="POST" action="?/contact" use:enhance={handleSubmit}>
					<div class="input-group">
						<label for="name">Nombre Completo</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div class="input-group">
						<label for="email">Correo</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div class="input-group">
						<label for="phone">Teléfono</label>
						<input type="tel" id="phone" name="phone" required />
					</div>
					<div class="input-group">
						<label for="subject">Asunto</label>
						<input type="text" id="subject" name="subject" required />
					</div>
					<div class="input-group">
						<label for="text">Texto</label>
						<textarea id="text" rows={10} name="text" required></textarea>
					</div>
				</form>
				<button type="submit" form="form1" aria-label="Submit">
					<svg
						viewBox="0 0 36 36"
						fill="none"
						aria-label="Submit"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 17.917L34.8333 17.917"
							stroke="#141212"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M17.9167 1.00016L34.8334 17.9168L17.9167 34.8335"
							stroke="#141212"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
		<div class="slide message" class:animate-in={isDone}>
			<div>
				{#if !isError}
					<h3>Gracias por su mensaje.</h3>
					<h4>Su solicitud fue enviada correctamente.</h4>
				{:else}
					<h3>Se ha producido un error.</h3>
					<h4>Lamentamos los inconvenientes.</h4>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		background: #75cdff;

		.slider {
			position: relative;
			overflow: hidden;
		}

		.slide {
			&.content {
				padding: calc(30 / 375 * 100vw) calc(20 / 375 * 100vw) calc(20 / 375 * 100vw);
				transition: transform 0.5s ease;

				&.animate-out {
					transform: translate3d(-100%, 0, 0);
				}
			}

			&.message {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 100;
				display: grid;
				place-items: center;
				text-align: center;
				transform: translate3d(100%, 0, 0);
				transition: transform 0.5s ease;

				&.animate-in {
					transform: translate3d(0, 0, 0);
				}

				h3 {
					padding: 0 calc(10 / 375 * 100vw);
					font-size: calc(40 / 375 * 100vw);
					font-weight: 500;
				}

				h4 {
					padding: calc(10 / 375 * 100vw) calc(10 / 375 * 100vw) 0;
					font-size: calc(20 / 375 * 100vw);
					font-weight: 400;
				}
			}
		}

		h2 {
			font-size: calc(26 / 375 * 100vw);
			line-height: calc(30 / 375 * 100vw);
			font-weight: 500;
			letter-spacing: 0.02em;
		}

		.form-wrapper {
			display: flex;
			align-items: flex-end;
			justify-content: flex-end;

			form {
				width: 100%;
				margin-top: calc(30 / 375 * 100vw);

				.input-group {
					width: 100%;

					label,
					input,
					textarea {
						font-family: Graphik;
						font-size: calc(18 / 375 * 100vw);
						line-height: calc(20 / 375 * 100vw);
						letter-spacing: 0.02em;
						color: #141212;
					}

					input,
					textarea {
						width: 100%;
						margin-top: calc(15 / 375 * 100vw);
						background: #75cdff;
						outline: none;
					}

					input {
						border: none;
						border-radius: 0;
						border-bottom: 1px solid #000000;
					}

					textarea {
						border: 1px solid #000000;
						resize: none;
					}

					label {
						text-transform: uppercase;
					}
				}

				.input-group + .input-group {
					margin-top: calc(28 / 375 * 100vw);
				}
			}

			button {
				background: none;
				border: none;
				padding: calc(11 / 375 * 100vw) 0 0 calc(14 / 375 * 100vw);
				margin-left: calc(16 / 375 * 100vw);

				svg {
					width: calc(30 / 375 * 100vw);
					height: calc(30 / 375 * 100vw);
				}
			}
		}

		@media (min-width: 768px) {
			.slide {
				&.content {
					display: flex;
					justify-content: space-between;
					padding: calc(40 / 1440 * 100vw);
				}

				&.message {
					h3 {
						font-size: calc(70 / 1440 * 100vw);
						padding: 0 calc(20 / 1440 * 100vw);
					}

					h4 {
						font-size: calc(30 / 1440 * 100vw);
						padding: calc(20 / 1440 * 100vw) calc(20 / 1440 * 100vw) 0;
					}
				}
			}

			h2 {
				max-width: 50%;
				font-size: calc(64 / 1440 * 100vw);
				line-height: calc(70 / 1440 * 100vw);
			}

			.form-wrapper {
				form {
					width: calc(440 / 1440 * 100vw);
					margin-top: 0;

					.input-group {
						label,
						input,
						textarea {
							font-size: calc(18 / 1440 * 100vw);
							line-height: calc(20 / 1440 * 100vw);
						}

						input,
						textarea {
							margin-top: calc(15 / 1440 * 100vw);
						}
					}

					.input-group + .input-group {
						margin-top: calc(28 / 1440 * 100vw);
					}
				}

				button {
					padding: calc(11 / 1440 * 100vw) 0 0 calc(14 / 1440 * 100vw);
					margin-left: calc(66 / 1440 * 100vw);

					svg {
						width: calc(36 / 1440 * 100vw);
						height: calc(36 / 1440 * 100vw);
					}
				}
			}
		}
	}
</style>
