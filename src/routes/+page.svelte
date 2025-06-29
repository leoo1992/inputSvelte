<script>
  import Input from '../components/Input.svelte';
  import ApiError from '../components/ApiError.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { derived } from 'svelte/store';

  const errorUR = derived(page, ($page) => $page.url.searchParams.get('error') || '');
  let nome = '';

  let timeout;
  function handleInput(event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const value = event.detail.trim();
      if (value) {
        goto(`/${value}`);
      }
    }, 800);
  }
</script>

<main>
  <Input bind:value={nome} on:input={handleInput} />

  {#if $errorUR}
    <ApiError message={$errorUR} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
</style>
