<script>
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Input from '../components/Input.svelte';
	import ApiError from '../components/ApiError.svelte';
	import Loading from '../components/Loading.svelte';

	const errorURL = derived(page, ($page) => $page.url.searchParams.get('error') || '');

	let nome = '';
	let carregando = false;
	let timeout;
	let fullscreenActive = false;

	async function fullscreen() {
		const el = document.documentElement;
		if (!document.fullscreenElement && el.requestFullscreen) {
			try {
				await el.requestFullscreen();
				fullscreenActive = true;
			} catch (err) {
				console.warn('Erro ao entrar em tela cheia:', err);
			}
		}
	}

	function handleInput(event) {
		if (!fullscreenActive) {
			fullscreen();
		}

		clearTimeout(timeout);
		const nomeDigitado = event.detail?.trim();

		if (!nomeDigitado) return;

		timeout = setTimeout(async () => {
			carregando = true;
			try {
				await goto(`/${encodeURIComponent(nomeDigitado)}`);
			} finally {
				carregando = false;
			}
		}, 700);
	}
</script>

<main>
	<section class="container">
		<h1 class="title">🕵️‍♂️ Qual sua idade estimada?</h1>
		<p class="subtitle">Digite seu nome para ver</p>

		<Input bind:value={nome} on:input={handleInput} />

		{#if carregando}
			<Loading msg="Consultando estimativa de idade..." />
		{/if}

		{#if $errorURL}
			<ApiError message={$errorURL} />
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
