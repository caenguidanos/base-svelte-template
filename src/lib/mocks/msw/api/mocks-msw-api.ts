import { dev, browser } from "$app/env";

export async function main() {
   if (dev) {
      if (!browser) {
         const { server } = await import("../config/mocks-msw-config-server");
         server.listen();
      } else {
         const { worker } = await import("../config/mocks-msw-config-browser");
         worker.start();
      }
   }
}

main();
