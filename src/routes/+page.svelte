<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { derived } from 'svelte/store';
	import Input from '../components/Input.svelte';
	import ApiError from '../components/ApiError.svelte';
	import Loading from '../components/Loading.svelte';

	const errorURL = derived(page, ($page) => $page.url.searchParams.get('error') || '');
	let nome = '';
	let carregando = false;
	let mensagem = 'Carregando...';
	let timeout;
	let montado = false;

	onMount(() => {
		montado = true;
	});

	async function handleInput(event) {
		clearTimeout(timeout);
		const value = event.detail;

		timeout = setTimeout(async () => {
			if (value && montado) {
				carregando = true;
				mensagem = 'Carregando...';

				await goto(`/${encodeURIComponent(value)}`, {
					replaceState: true,
					keepfocus: true,
					noscroll: true
				});

				carregando = false;
			}
		}, 800);
	}
</script>

<section>
	<div class="card">
		<div class="title">Descubra a idade pelo nome</div>
		<Input bind:value={nome} on:input={handleInput} />

		{#if carregando}
			<Loading msg={mensagem} />
		{/if}
		{#if $errorURL}
			<ApiError message={$errorURL} />
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
