<script type="ts">
    let themes = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter"
    ];

    const updateTheme = (theme: string) => {
      document.getElementsByTagName('html')[0].setAttribute('data-theme', theme);
    };
</script>

<div class="navbar bg-base-100">
  <div class="navbar-start">
  </div>
  <div class="navbar-center">
    <a href="/" class="btn btn-ghost uppercase text-4xl text-secondary">Super Heroes</a>
  </div>
  <div class="navbar-end">
    <select class="select select-primary" on:change={(e) => updateTheme(e.target.value)}>
        <option disabled selected>Themes</option>
        {#each themes as theme}
          <option value={theme}>{theme}</option>
        {/each}
    </select>
  </div>
</div>