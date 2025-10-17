import type { UserEvent } from "@testing-library/user-event";
import { TestComponent, type TTestComponent } from "./test-component.tsx";

import { render, screen, cleanup } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";
import { checkA11y } from "../../../../test/test-utils.js";

describe("~/components/01-atoms/test-component", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  test("passes accessibility checks", async () => {
    const { container } = setupTest();
    await checkA11y(container);
  });

  test("should render", async () => {
    setupTest();

    const element = screen.getByText("Component");

    expect(element).toBeTruthy();
  });
});

type TestOverrides = {
  props?: Partial<TTestComponent>;
};

type TReturn = {
  props: TTestComponent;
  user: UserEvent;
  container: HTMLElement;
  baseElement: HTMLElement;
};

const getDefaultProps = (
  overrides: Partial<TTestComponent> = {}
): TTestComponent => ({
  ...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
  const props = getDefaultProps(overrides.props);
  const utils = render(<TestComponent {...props} />);
  return {
    ...utils,
    props,
    user: userEvent.setup(),
  };
};
