<script lang="ts">
  let count = 1;
  const increment = () => {
    count++;
  };
</script>

<main class="flex flex-col h-screen justify-center items-center">
  <button on:click={increment} class="btn btn-primary w-24">{count}</button>
</main>