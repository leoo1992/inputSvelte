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
	let inputRef;

	const handleInput = LocigaInput(
		(estado) => {
			carregando = estado;
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
	}
</script>

<main>
	<section class="container">
		<h1 class="title">🕵️‍♂️ Qual sua idade estimada?</h1>
		<p class="subtitle">Digite seu nome para ver</p>

		<Input bind:this={inputRef} bind:value={nome} on:input={handleInput} />

		{#if carregando}
			<Loading msg={mensagem} />
		{:else if error}
			<ApiError message={error} />
		{:else if nome}
			<ApiResult name={nome} age={idade} />
		{/if}
	</section>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 1rem;
		box-sizing: border-box;
	}

	.container {
		width: 100%;
		max-width: 520px;
		background-color: #ffffff;
		border-radius: 18px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
		padding: 2rem;
		box-sizing: border-box;
		text-align: center;
		transition: all 0.3s ease;
	}

	.title {
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 700;
		color: #4a148c;
		margin-bottom: 0.75rem;
		text-wrap: balance;
	}

	.subtitle {
		font-size: clamp(1rem, 2vw, 1.1rem);
		color: #555;
		margin-bottom: 1.75rem;
		line-height: 1.5;
		text-wrap: pretty;
		font-weight: 600;
	}

	@media (max-width: 480px) {
		.container {
			padding: 1.25rem 1rem;
		}

		.title {
			font-size: 1rem;
		}

		.subtitle {
			font-size: 0.9rem;
		}
	}
</style>
