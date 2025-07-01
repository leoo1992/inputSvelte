<script>
	import { createEventDispatcher } from 'svelte';

	export let value = '';
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
</script>

<div class="input-group">
	<label for="nome" id="input-label">Digite seu nome</label>
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
		max-width: 480px;
		margin: 1.5rem auto;
	}

	label {
		font-weight: 600;
		margin-bottom: 0.8rem;
		font-size: 0.9rem;
		color: #4a148c;
		font-weight: 700;
		text-align: left;
	}

	.input-field {
		width: 100%;
		min-width: 220px;
		padding: 1rem;
		border: 2px solid #ccc;
		border-radius: 12px;
		font-size: 0.9rem;
		background-color: #fff;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.input-field:focus {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
		border-color: #6200ea;
		box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2);
		outline: none;
	}

	.input-field:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
		border-color: #6200ea;
		box-shadow: 0 0 0 3px rgba(98, 0, 234, 0.2);
		outline: none;
	}

	@media (max-width: 480px) {
		.input-group {
			max-width: 100%;
		}

		.input-field {
			font-size: 0.95rem;
			padding: 0.85rem;
		}

		label {
			font-size: 0.9rem;
		}
	}
</style>
