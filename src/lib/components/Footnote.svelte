<script lang="ts">
	let { subtitle }: { subtitle: string } = $props();

	let time = $state('');

	function getTime() {
		time = new Date().toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	$effect(() => {
		getTime();
		const interval = setInterval(getTime, 5000);
		return () => clearInterval(interval);
	});
</script>

<div class="footnote">
	<div class="text">
		<p>{subtitle}</p>
		<time datetime={time}>{time}</time>
	</div>
	<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M17.9166 1V34.8333"
			stroke="#141212"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M34.8333 17.9167L17.9167 34.8333L1 17.9167"
			stroke="#141212"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</div>

<style>
	.footnote {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: calc(12 / 375 * 100vw);
		font-size: calc(14 / 375 * 100vw);
		line-height: calc(14 / 375 * 100vw);
		letter-spacing: 0.02em;
		color: #141212;

		time {
			display: block;
			padding-top: calc(8 / 375 * 100vw);
		}

		svg {
			width: calc(18 / 375 * 100vw);
			height: calc(18 / 375 * 100vw);
		}

		@media (min-width: 768px) {
			margin-top: calc(32 / 1440 * 100vw);
			font-size: calc(24 / 1440 * 100vw);
			line-height: calc(26 / 1440 * 100vw);

			time {
				padding-top: calc(8 / 1440 * 100vw);
			}

			svg {
				width: calc(36 / 1440 * 100vw);
				height: calc(36 / 1440 * 100vw);
			}
		}
	}
</style>
