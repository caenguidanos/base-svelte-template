import { setupWorker } from "msw";

import { handlers } from "../handlers/mocks-msw-handlers";

export const worker = setupWorker(...handlers);
