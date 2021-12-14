import type { RequestHandler } from "@sveltejs/kit";

function sleep(ms: number) {
   return new Promise<void>((res) => {
      setTimeout(() => {
         res();
      }, ms);
   });
}

export const get: RequestHandler = async () => {
   await sleep(1000);

   return {
      status: 200,
      body: {
         hello: "world"
      }
   };
};
