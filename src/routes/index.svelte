<script context="module" lang="ts">
   import type { Load } from "@sveltejs/kit";

   export const load: Load = async ({ page, fetch, session, stuff }) => {
      const res = await fetch("/api/hello");

      if (res.ok) {
         return {
            props: {
               article: await res.json()
            }
         };
      }

      return {
         status: res.status,
         error: new Error(`Could not load /api/hello`)
      };
   };
</script>

<script lang="ts">
   export let article: any;

   let title: string = "Welcome to SvelteKit and typescript";

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

<button on:click="{onClick}">Fetch!!</button>
<pre>{JSON.stringify({ article }, undefined, 4)}</pre>

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
