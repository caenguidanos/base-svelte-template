import { test } from "uvu";
import * as assert from "uvu/assert";

test("smoke", () => {
   console.log("yeepa");
   assert.ok(true);
});

test.run();
