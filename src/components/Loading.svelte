<script>
	export let msg = 'Carregando';
</script>

<div class="loading-container">
	<div class="dots">
		<span>.</span>
		<span>.</span>
		<span>.</span>
	</div>
	<p class="loading-text">{msg}</p>
</div>

<style>
	.loading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2rem;
		gap: 0.5rem;
	}

	.dots {
		display: flex;
		gap: 0.25rem;
	}

	.dots span {
		font-size: 2rem;
		font-weight: bold;
		color: #6200ea;
		animation: bounce 1.4s infinite;
	}

	.dots span:nth-child(2) {
		animation-delay: 0.2s;
	}

	.dots span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
			opacity: 0.3;
		}
		50% {
			transform: translateY(-6px);
			opacity: 1;
		}
	}

	.loading-text {
		font-size: 1rem;
		font-weight: 600;
		color: #444;
		text-align: center;
	}
</style>
