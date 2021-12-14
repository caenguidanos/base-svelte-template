<script lang="ts">
   async function onClick() {
      const url = new URL("/hello", "http://localhost:3000");
      try {
         const response = await fetch(url.toString());
         const data = await response.json();
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   }
</script>

<h1>Hola</h1>

<button data-testid="button" on:click="{onClick}">Fetch!!</button>
