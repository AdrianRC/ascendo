<script lang="ts">
	import Image from '@datocms/svelte/components/Image/Image.svelte';
	import ExternalLink from './ExternalLink.svelte';
	import type { Company } from '$lib/types.js';

	let { companies, title }: { companies: Company[]; title: string } = $props();
</script>

<section class="companies">
	<h2>{title}</h2>
	{#each companies as company, index (company.id)}
		<div id={company.tag} class="company {index % 2 === 0 ? 'image-left' : 'image-right'}">
			<Image data={company.image.responsiveImage} class="company-image" />
			<div class="description">
				<h3>{company.title}</h3>
				<div class="container">
					{@html company.description}
				</div>
				{#if company.dualLinkGroup}
					<div class="dual-links">
						<div class="dual-link">
							<h4>{company.dualLinkGroup.title1}</h4>
							{#each company.dualLinkGroup.linkGroups1 as group (group.id)}
								<h5>{group.title}</h5>
								<div class="links">
									{#each group.links as link (link.id)}
										<ExternalLink text={link.text} href={link.link} />
									{/each}
								</div>
							{/each}
						</div>
						<div class="dual-link">
							<h4>{company.dualLinkGroup.title2}</h4>
							{#each company.dualLinkGroup.linkGroups2 as group (group.id)}
								<h5>{group.title}</h5>
								<div class="links">
									{#each group.links as link (link.id)}
										<ExternalLink text={link.text} href={link.link} />
									{/each}
								</div>
							{/each}
						</div>
					</div>
				{:else}
					<div class="links">
						{#each company.links as link (link.id)}
							<ExternalLink text={link.text} href={link.link} />
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/each}
</section>

<style>
	.companies {
		margin-top: calc(15 / 375 * 100vw);
		padding: calc(20 / 375 * 100vw) calc(20 / 375 * 100vw) calc(40 / 375 * 100vw);

		h2 {
			font-weight: 500;
			font-size: calc(18 / 375 * 100vw);
			line-height: calc(20 / 375 * 100vw);
			letter-spacing: 0.02em;
			text-transform: uppercase;
			color: #141212;
		}

		.company {
			display: grid;
			grid-template-columns: 100%;

			:global(.company-image) {
				width: 100%;
				object-fit: cover;
			}

			.description {
				width: 100%;
				margin-top: calc(20 / 375 * 100vw);

				h3 {
					font-weight: 500;
					font-size: calc(28 / 375 * 100vw);
					line-height: calc(32 / 375 * 100vw);
					letter-spacing: 0.02em;
				}

				.container {
					margin-top: calc(15 / 375 * 100vw);
				}
			}

			.description :global {
				p {
					font-size: calc(18 / 375 * 100vw);
					line-height: calc(22 / 375 * 100vw);
					letter-spacing: 0.02em;
				}

				small {
					font-size: calc(14 / 375 * 100vw);
					line-height: calc(16 / 375 * 100vw);
				}

				p + p {
					margin-top: calc(15 / 375 * 100vw);
				}
			}

			.description .links {
				margin-top: calc(20 / 375 * 100vw);

				:global(div + div) {
					margin-top: calc(12 / 375 * 100vw);
				}
			}

			.description .dual-links {
				margin-top: calc(30 / 375 * 100vw);

				h4,
				h5 {
					font-weight: 500;
					letter-spacing: 0.02em;
					text-transform: uppercase;
				}

				h4 {
					font-size: calc(20 / 375 * 100vw);
					line-height: calc(24 / 375 * 100vw);
				}

				.links {
					margin-top: calc(15 / 375 * 100vw);
				}

				h5 {
					margin-top: calc(20 / 375 * 100vw);
					font-size: calc(16 / 375 * 100vw);
					line-height: calc(18 / 375 * 100vw);
				}

				.dual-link + .dual-link {
					margin-top: calc(30 / 375 * 100vw);
				}
			}

			&.image-left {
				:global(.company-image) {
					order: 1;
				}

				.description {
					order: 2;
				}
			}

			&.image-right {
				:global(.company-image) {
					order: 1;
				}

				.description {
					order: 1;
				}
			}
		}

		.company:first-of-type {
			margin-top: calc(30 / 375 * 100vw);
		}

		.company + .company {
			margin-top: calc(50 / 375 * 100vw);
		}

		@media (min-width: 768px) {
			margin-top: calc(126 / 1440 * 100vw);
			padding: calc(40 / 1440 * 100vw) calc(40 / 1440 * 100vw) calc(150 / 1440 * 100vw);

			h2 {
				font-size: calc(24 / 1440 * 100vw);
				line-height: calc(26 / 1440 * 100vw);
			}

			.company {
				grid-template-columns: 1fr 1fr;
				align-items: center;

				:global(.company-image) {
					min-height: 100%;
					height: calc(650 / 1440 * 100vw);
				}

				.description {
					max-width: calc(600 / 1440 * 100vw);
					margin-top: 0;

					h3 {
						font-size: calc(64 / 1440 * 100vw);
						line-height: calc(70 / 1440 * 100vw);
					}

					.container {
						margin-top: calc(60 / 1440 * 100vw);
					}
				}

				.description :global {
					p {
						font-size: calc(24 / 1440 * 100vw);
						line-height: calc(27 / 1440 * 100vw);
					}

					small {
						font-size: calc(16 / 1440 * 100vw);
						line-height: calc(18 / 1440 * 100vw);
					}

					p + p {
						margin-top: calc(20 / 1440 * 100vw);
					}
				}

				.description .links {
					margin-top: calc(40 / 1440 * 100vw);

					:global(div + div) {
						margin-top: calc(15 / 1440 * 100vw);
					}
				}

				.description .dual-links {
					margin-top: calc(60 / 1440 * 100vw);
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					flex-direction: row;

					h4 {
						font-size: calc(24 / 1440 * 100vw);
						line-height: calc(27 / 1440 * 100vw);
					}

					.links {
						margin-top: calc(25 / 1440 * 100vw);
					}

					h5 {
						margin-top: calc(30 / 1440 * 100vw);
						font-size: calc(22 / 1440 * 100vw);
						line-height: calc(24 / 1440 * 100vw);
						width: min-content;
					}

					.dual-link + .dual-link {
						margin-top: 0;
					}
				}

				&.image-left {
					:global(.company-image) {
						order: 1;
					}

					.description {
						order: 2;
						padding-left: calc(135 / 1440 * 100vw);
					}
				}

				&.image-right {
					:global(.company-image) {
						order: 2;
					}

					.description {
						order: 1;
						padding-right: calc(135 / 1440 * 100vw);
					}
				}
			}

			.company:first-of-type {
				margin-top: calc(50 / 1440 * 100vw);
			}

			.company + .company {
				margin-top: calc(150 / 1440 * 100vw);
			}
		}
	}
</style>
