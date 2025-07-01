<script>
	export let name = '';
	export let age = null;
</script>

<div class="result-card">
	<p class="result-title">🔎 Resultado Encontrado:</p>
	<p class="result-name"><strong>Nome:</strong> {name}</p>
	<p class="result-age"><strong>Idade estimada:</strong> {age} anos</p>
</div>

<style>
	.result-card {
		padding: 1.5rem;
		background-color: #fff;
		border-radius: 12px;
		border: 2px solid #ccc;
		width: 100%;
		max-width: 480px;
		box-sizing: border-box;
		text-align: left;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.result-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
		border-color: #6200ea;
		box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2);
		outline: none;
	}

	.result-title {
		font-size: 1.2rem;
		color: #4a148c;
		font-weight: 700;
		margin: 0 0 1rem 0;
	}

	.result-name,
	.result-age {
		font-size: 0.9rem;
		color: #333;
		line-height: 1.5;
		word-break: break-word;
		overflow-wrap: anywhere;
		margin: 1rem 0 0 0;
	}

	.result-name strong,
	.result-age strong {
		color: #6200ea;
	}

	@media (max-width: 480px) {
		.result-card {
			padding: 1rem;
		}

		.result-title {
			font-size: 0.9rem;
		}
	}
</style>
