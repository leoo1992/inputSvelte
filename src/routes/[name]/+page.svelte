<script>
	import { LocigaInput } from './pageLogica.js';
	import Input from '../../components/Input.svelte';
	import ApiError from '../../components/ApiError.svelte';
	import ApiResult from '../../components/ApiResult.svelte';
	import Loading from '../../components/Loading.svelte';

	export let data;
	let nome = '';
	let idade = 0;
	let error = null;
	let carregando = false;
	let mensagem = 'Carregando...';
	let rotaAtual = '';
	let controleCursorEFoco = 0;
	let inputRef;

	function refocarInput() {
		if (!carregando) {
			setTimeout(() => {
				inputRef?.focusInput();
				controleCursorEFoco += 1;
			}, 0);
		}
	}

	const handleInput = LocigaInput(
		(estado) => {
			carregando = estado;

			if (!carregando) {
				refocarInput();
			}
		},
		(texto) => (mensagem = texto),
		(novoNome) => {
			nome = novoNome;
		}
	);

	$: if (data) {
		if (data.name !== rotaAtual) {
			rotaAtual = data.name;
			nome = data.name;
		}

		idade = data?.api?.age ?? null;
		error = data?.error ?? null;

		if (!carregando) {
			refocarInput();
		}
	}
</script>

<section>
	<div class="card">
		<div class="title">Descubra a idade pelo nome</div>

		<Input bind:this={inputRef} bind:value={nome} on:input={handleInput} {controleCursorEFoco} />

		{#if carregando}
			<Loading msg={mensagem} />
		{:else if error}
			<ApiError message={error} />
		{:else if nome}
			<ApiResult name={nome} age={idade} />
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		width: 100%;
		padding: 2rem;
		background: linear-gradient(135deg, #e0f7fa, #e1bee7);
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	.card {
		background-color: white;
		border-radius: 1rem;
		padding: 2rem;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		width: 100%;
		max-width: 480px;
		text-align: center;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
	}

	.title {
		font-size: 1.8rem;
		font-weight: 700;
		color: #333;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 480px) {
		.card {
			padding: 1.5rem;
		}

		.title {
			font-size: 1.5rem;
		}
	}
</style>
