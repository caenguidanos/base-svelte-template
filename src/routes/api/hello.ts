import type { RequestHandler } from "@sveltejs/kit";

function sleep(ms: number) {
   return new Promise<void>((res) => {
      setTimeout(() => {
         res();
      }, ms);
   });
}

export const get: RequestHandler = async () => {
   console.log("Y se durmió");
   await sleep(1000);
   console.log("Y dejo de dormir");

   return {
      status: 200,
      body: {
         hello: "world"
      }
   };
};
