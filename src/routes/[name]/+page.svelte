<script>
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
  import { goto } from '$app/navigation';
  import Input from "../../components/Input.svelte";
  import ApiError from "../../components/ApiError.svelte";
  import ApiResult from "../../components/ApiResult.svelte";

  export let data;
  let nome = data?.name ?? '';
  let debounceId;

  $: age = data?.api?.age ?? null;
  $: error = data?.error ?? null;

  function handleInput(event) {
    clearTimeout(debounceId);
    const value = event.detail.trim();
    debounceId = setTimeout(() => {
      const currentName = get(page).params.name;
      if (value && value !== currentName) {
        goto(`/${value}`);
      }
    }, 750);
  }

  $: if (error) {
    goto(`/?error=${encodeURIComponent(error)}`);
  }
</script>

<main>
  <Input bind:value={nome} on:input={handleInput} />

  {#if error}
    <ApiError message={error} />
  {/if}

  {#if nome && age}
    <ApiResult name={nome} age={age} />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f0f0f0;
  }
</style>
