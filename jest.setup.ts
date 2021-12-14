import "@testing-library/jest-dom/extend-expect";
import fetch from "isomorphic-fetch";

import { server } from "$lib/mocks/msw/config/mocks-msw-config-server";

export function loadIsomorphicFetch(): void {
   globalThis.fetch = fetch as unknown as typeof globalThis.fetch;
}

beforeAll(() => {
   loadIsomorphicFetch();
   server.listen();
});

afterEach(() => {
   server.resetHandlers();
});

afterAll(() => {
   server.close();
});
