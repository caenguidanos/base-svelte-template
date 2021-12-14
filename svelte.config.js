import path from "path";
import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
   preprocess: preprocess(),
   kit: {
      adapter: adapter(),
      target: "#svelte",
      vite: {
         resolve: {
            alias: {
               $msw: path.resolve(
                  "./src/lib/domain/shared/mocks/msw/api/auto-inject/shared-mocks-msw-api-auto-inject.ts"
               ),
               "$msw/browser": path.resolve(
                  "./src/lib/domain/shared/mocks/msw/api/shared-mocks-msw-api-browser.ts"
               ),
               "$msw/server": path.resolve(
                  "./src/lib/domain/shared/mocks/msw/api/shared-mocks-msw-api-server.ts"
               ),
               "$styles/globals": path.resolve("./src/lib/domain/shared/styles/globals.scss")
            }
         }
      }
   }
};

export default config;
