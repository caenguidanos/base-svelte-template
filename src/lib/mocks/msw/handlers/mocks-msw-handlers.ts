import { rest } from "msw";

export const handlers = [
   rest.all("*", (req, res, ctx) => {
      return res(ctx.json({ message: "Esto es un mock muchacho" }));
   })
];
