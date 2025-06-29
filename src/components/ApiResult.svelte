<script>
  export let name = '';
  export let age = null;
</script>

{#if age !== null}
  <p><strong>{name}</strong></p>
  <p>{age} anos</p>
{/if}

<style>
  p {
    margin: 0.5em 0;
    font-size: 1.1rem;
    text-align: center;
  }
</style>