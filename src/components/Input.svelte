<script>
	import { onMount, createEventDispatcher, tick } from 'svelte';

	export let value = '';
	export let controleCursorEFoco = 0;
	const dispatch = createEventDispatcher();
	let inputEl;

	export function focusInput(restoreCursor = true) {
		if (inputEl && document.body.contains(inputEl)) {
			inputEl.focus();
			if (restoreCursor) {
				const len = inputEl.value.length;
				inputEl.setSelectionRange(len, len);
			}
		}
	}

	function handleInput(event) {
		value = event.target.value;
		dispatch('input', value);
	}

	onMount(async () => {
		await tick();
		focusInput();
	});

	$: if (controleCursorEFoco > 0) {
		tick().then(() => {
			focusInput();
		});
	}
</script>

<div class="input-group">
	<label for="nome" id="input-label">Digite um nome:</label>
	<input
		bind:this={inputEl}
		bind:value
		on:input={handleInput}
		id="nome"
		name="nome"
		type="text"
		class="input-field"
		aria-labelledby="input-label"
		autocomplete="off"
		autocorrect="off"
		autocapitalize="off"
		spellcheck="false"
		required
	/>
</div>

<style>
	.input-group {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 100%;
		margin-bottom: 1.5rem;
	}

	label {
		font-weight: 600;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		color: #444;
		text-align: left;
	}

	.input-field {
		width: 100%;
		padding: 0.85rem 1rem;
		border: 2px solid #ccc;
		border-radius: 10px;
		font-size: 1rem;
		background-color: #fff;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.input-field:focus {
		border-color: #6200ea;
		box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2);
		outline: none;
	}

	@media (max-width: 480px) {
		.input-group {
			width: 100%;
		}
	}
</style>
