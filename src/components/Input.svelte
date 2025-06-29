<script>
  import { onMount, createEventDispatcher } from 'svelte';

  export let value = '';
  const dispatch = createEventDispatcher();
  let inputEl;

  onMount(() => {
    inputEl.focus();

    setTimeout(() => {
      inputEl?.focus();
    }, 10);
  });

  function handleInput(event) {
    value = event.target.value;
    dispatch('input', value);
  }

  function handleBlur() {
  setTimeout(() => {
    if (document.activeElement !== inputEl) {
      inputEl.focus();
    }
  }, 0);
}
</script>

<div class="input-group">
  <label for="nome" id="input-label">Digite um nome:</label>
  <input
    bind:this={inputEl}
    bind:value
    on:input={handleInput}
    on:blur={handleBlur}
    id="nome"
    name="nome"
    placeholder="Digite um nome"
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
    max-width: 400px;
    margin: 1rem auto;
  }

  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #333;
  }

  .input-field {
    padding: 0.75rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s ease;
    box-shadow: 0 0 0 0 transparent;
  }

  .input-field:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    outline: none;
  }
</style>
