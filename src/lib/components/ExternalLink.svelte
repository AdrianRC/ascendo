<script lang="ts">
	let { href, text }: { href: string; text: string } = $props();
</script>

<div>
	<a target="_blank" rel="noreferrer noopener" {href} class="link">
		<span>{text}</span>
		<svg class="link-svg" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17.5 3C17.5 2.72386 17.2761 2.5 17 2.5L12.5 2.5C12.2239 2.5 12 2.72386 12 3C12 3.27614 12.2239 3.5 12.5 3.5L16.5 3.5L16.5 7.5C16.5 7.77614 16.7239 8 17 8C17.2761 8 17.5 7.77614 17.5 7.5L17.5 3ZM3.35355 17.3536L17.3536 3.35355L16.6464 2.64645L2.64645 16.6464L3.35355 17.3536Z"
				fill="#141212"
			/>
		</svg>
	</a>
</div>

<style>
	.link {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		font-family: Graphik;
		font-style: normal;
		font-weight: normal;
		font-size: calc(16 / 375 * 100vw);
		line-height: calc(18 / 375 * 100vw);
		letter-spacing: 0.02em;
		color: #141212;
		border-bottom: 1px solid #141212;

		svg {
			margin-left: calc(6 / 375 * 100vw);
			width: calc(20 / 375 * 100vw);
			height: calc(20 / 375 * 100vw);
		}

		@media (min-width: 768px) {
			font-size: calc(24 / 1440 * 100vw);
			line-height: calc(27 / 1440 * 100vw);
			border-bottom: 1px solid #141212;

			svg {
				margin-left: calc(6 / 1440 * 100vw);
				width: calc(20 / 1440 * 100vw);
				height: calc(20 / 1440 * 100vw);
			}
		}
	}
</style>
