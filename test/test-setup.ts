import { server } from "@/api/mocks/server";
import { vi, afterEach, afterAll, beforeAll } from "vitest";

vi.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

vi.spyOn(console, "error").mockImplementation(() => null);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
