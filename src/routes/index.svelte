<script lang="ts">
   let title = "Welcome to SvelteKit and typescript";

   async function onClick() {
      const response = await fetch("/hello");
      const data = await response.json();
      console.log(data);
   }
</script>

<h1>{title}</h1>

<p class="title">
   Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<button class="bg-neutral-600 text-white p-3 rounded" on:click="{onClick}">Fetch!!</button>

<style lang="scss">
   $primary-color: red;
   $secondary-color: green;

   .title {
      color: $primary-color;
      a {
         color: $secondary-color;
      }
   }
</style>
