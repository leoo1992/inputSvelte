<script>
	export let name = '';
	export let age = null;
</script>

<div class="result-card">
	<p class="result-name">{name}</p>
	<p class="result-age">{age} anos</p>
</div>

<style>
	.result-card {
		margin-top: 1.5rem;
		padding: 1.2rem 1.5rem;
		background-color: #ffffff;
		border: 2px solid #e0e0e0;
		border-radius: 12px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
		text-align: center;
		max-width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.result-name {
		font-size: 1.3rem;
		font-weight: 600;
		color: #333;
		margin-bottom: 0.5rem;
	}

	.result-age {
		font-size: 1.1rem;
		color: #666;
	}
</style>
