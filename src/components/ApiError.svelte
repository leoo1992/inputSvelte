<script>
	export let message = 'Ocorreu um erro.';
</script>

<div class="error-box">
	<p class="error-message">{message}</p>
</div>

<style>
	.error-box {
		margin-top: 1.5rem;
		padding: 1.2rem 1.5rem;
		background-color: #ffe6e6;
		border: 2px solid #ff4d4d;
		border-radius: 12px;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.error-message {
		color: #d8000c;
		font-size: 1.1rem;
		font-weight: 600;
	}
</style>
