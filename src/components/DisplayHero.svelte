<script type="ts">
    import type { Hero } from "src/models/hero";
    export let hero: Hero = null;
</script>

{#if hero}
    <div class="card w-48 m-4 bg-base-300 text-base-content hover:bg-secondary hover:text-secondary-content hover:animate-pulse shadow-xl">
      <h2 class="card-title text-xl justify-center m-2">
        {hero.name}
      </h2>
      <figure><img src={hero.avatar} alt={hero.hero} class="h-24 m-2" /></figure>
      <div class="card-body">
        <div class="card-actions justify-center">
            <div class="badge badge-accent">{hero.hero}</div>
            <div class="badge badge-primary">{hero.universe}</div>
        </div>
      </div>
    </div>
{/if}