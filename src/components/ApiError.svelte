<script>
	export let message = 'Algo não saiu como esperado, mas estamos aqui para ajudar!';

	if (!message) {
		message = 'Algo não saiu como esperado, que pena!';
	}
</script>

<div class="error-card">
	<span class="error-title">
		<span class="emoji">🤔</span>
		<span class="title-text">Ops... encontramos um pequeno contratempo</span>
	</span>
	<span class="error-message">{message}</span>
</div>

<style>
	.error-card {
		width: 100%;
		max-width: 480px;
		padding: 1.5rem;
		border-radius: 12px;
		border: 1px solid #f8d7da;
		background-color: #fdf3f4;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	.error-title {
		color: #b71c1c;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.4;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.emoji {
		font-size: 1.8rem;
		line-height: 1;
		padding: 0.5rem;
	}

	.title-text {
		display: inline-block;
		max-width: 100%;
	}

	.error-message {
		font-size: 0.95rem;
		color: #5f2120;
		line-height: 1.5;
		word-break: break-word;
		overflow-wrap: anywhere;
		background-color: #ffffff;
		padding: 0.75rem;
		border-radius: 8px;
		border: 1px dashed #f8d7da;
		text-align: center;
	}

	@media (max-width: 500px) {
		.error-title {
			flex-direction: column;
		}
	}

	@media (max-width: 600px) {
		.error-title {
			font-size: 0.9rem;
		}

		.error-message {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 360px) {
		.error-card {
			padding: 1rem;
		}

		.emoji {
			font-size: 1.6rem;
		}

		.error-title {
			font-size: 0.7rem;
			line-height: 1.2;
		}

		.error-message {
			font-size: 0.7rem;
			line-height: 1.2;
			padding: 0.3rem;
		}
	}
</style>
