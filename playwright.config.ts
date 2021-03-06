import path from "path";
import { devices, PlaywrightTestConfig } from "@playwright/test";

export default {
   preserveOutput: "always",
   testDir: "e2e",
   testMatch: "**/*.spec.ts",
   retries: 2,
   timeout: 30 * 1000,
   outputDir: path.join(process.cwd(), "coverage", "e2e", "out"),
   reporter: [
      [
         "html",
         {
            outputFolder: path.join(process.cwd(), "coverage", "e2e", "html"),
            open: "never"
         }
      ],
      ["list"]
   ],
   use: {
      baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
      trace: "retry-with-trace"
   },
   webServer: {
      command: "svelte-kit dev",
      port: 3000,
      timeout: 30 * 1000,
      reuseExistingServer: true
   },
   projects: [
      {
         name: "Desktop Chrome",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Desktop Chrome"]
         }
      },
      {
         name: "Tablet Android",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Galaxy Tab S4"]
         }
      },
      {
         name: "Mobile Android",
         use: {
            trace: "on",
            video: "on",
            screenshot: "on",
            ...devices["Pixel 5"]
         }
      }
   ]
} as PlaywrightTestConfig;
