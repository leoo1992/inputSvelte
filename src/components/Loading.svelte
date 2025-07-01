<script>
	export let msg = 'Carregando';
</script>

<div class="skeleton-card">
	<div class="dots">
		<span>.</span>
		<span>.</span>
		<span>.</span>
	</div>

	<div class="loading-text">
		{#each msg.split('') as letter, i}
			<span style="animation-delay: {i * 0.05}s">{letter}</span>
		{/each}
	</div>
</div>

<style>
	.skeleton-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
		max-width: 480px;
		background-color: #fff;
		border-radius: 12px;
		border: 2px solid #ccc;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		padding: 1.5rem;
		text-align: center;
		animation: pulse 1.9s infinite ease-in-out;
	}

	.dots {
		display: flex;
		justify-content: center;
		gap: 0.25rem;
		margin-bottom: 1.5rem;
	}

	.dots span {
		font-size: 2rem;
		font-weight: bold;
		color: #6200ea;
		animation: bounce-up 1.4s infinite;
	}

	.dots span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.dots span:nth-child(3) {
		animation-delay: 0.4s;
	}

	.loading-text {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.08rem;
		margin-bottom: 1rem;
	}

	.loading-text span {
		font-size: 1rem;
		font-weight: 600;
		color: #4a148c;
		animation: bounce-down 1s infinite;
		display: inline-block;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}

	@keyframes bounce-up {
		0%,
		100% {
			transform: translateY(0);
			opacity: 0.5;
		}
		50% {
			transform: translateY(-8px);
			opacity: 1;
		}
	}

	@keyframes bounce-down {
		0%,
		100% {
			transform: translateY(0);
			opacity: 0.5;
		}
		50% {
			transform: translateY(12px);
			opacity: 1;
		}
	}

	@media (max-width: 480px) {
		.skeleton-card {
			padding: 1rem;
		}

		.loading-text span {
			font-size: 0.95rem;
		}
	}
</style>
