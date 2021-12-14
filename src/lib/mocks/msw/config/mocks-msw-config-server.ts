import { setupServer } from "msw/node";

import { handlers } from "../handlers/mocks-msw-handlers";

export const server = setupServer(...handlers);
