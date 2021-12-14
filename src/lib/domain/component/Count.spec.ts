/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/svelte";

import Count from "./Count.svelte";

describe("smoke", () => {
   it("s", async () => {
      render(Count);

      const ev = await fireEvent.click(screen.getByTestId("button"));

      expect(ev).toBe(true);
   });
});
