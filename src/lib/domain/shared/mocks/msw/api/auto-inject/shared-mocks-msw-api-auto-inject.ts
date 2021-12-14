import { dev, browser } from "$app/env";

if (dev) {
   if (!browser) {
      const { server } = await import("../shared-mocks-msw-api-server");

      server.listen();
   } else {
      const { worker } = await import("../shared-mocks-msw-api-browser");

      worker.start();
   }
}
