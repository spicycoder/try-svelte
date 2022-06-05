<script lang="ts">
  let count = 1;
  $: square = count * count;
  $: danger = square >= 100;
</script>

<main class="flex flex-col h-screen justify-center items-center">
  <button on:click={() => count++} class="btn btn-primary w-24 m-4">+1</button>
  {count} square is {square}
  <button on:click={() => count--} class="btn btn-primary w-24 m-4">-1</button>
  <div class="alert w-auto m-4 {danger ? 'alert-error' : 'alert-success'}">
    {danger ? 'Numbers are dangerously huge!' : 'Numbers look fine'}
  </div>
</main>