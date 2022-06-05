<script lang="ts">
  import DisplayHero from './components/DisplayHero.svelte';
import data from './data.json';
  import type { Hero } from './models/hero';
  let heroes = data.heroes as Hero[];
  let filter = '';
  let universe = 0;
  $: filteredHeroes = heroes.filter(x =>
    (x.name.toLowerCase().includes(filter.toLowerCase())
    || x.hero.toLowerCase().includes(filter.toLowerCase()))
    && (universe === 0 ? true : (universe === 1 ? x.universe === 'Marvel' : x.universe === 'DC')));
</script>

<main class="flex flex-col justify-center items-center">
  <h1 class="text-4xl">Super Heroes</h1>
  <input type="text" class="input input-bordered input-primary m-4" placeholder="search ..." bind:value={filter}>
  <div class="btn-group">
    <input type="radio" name="options" bind:group={universe} value={0} data-title="All" class="btn" checked />
    <input type="radio" name="options" bind:group={universe} value={1} data-title="Marvel" class="btn" />
    <input type="radio" name="options" bind:group={universe} value={2} data-title="DC" class="btn" />
  </div>
  <div class="flex flex-wrap items-center justify-center">
    {#each filteredHeroes as hero}
      <DisplayHero hero={hero} />
    {/each}
  </div>
</main>