<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import codeHacksLogo from  './assets/codeHacks.png'
  import RegistrationFom from './lib/Register.svelte'
</script>

<main>
  <div>
    <a href="http://stevosoro.xy">
      <img src="{codeHacksLogo}" class="logo" alt="codeHacks Logo">
    </a>
  </div>
  <h1>codeHacks⚡</h1>

    <div class="card">
        <RegistrationFom />
    </div>


  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
