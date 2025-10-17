---
to: "src/components/<%= type %>/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.test.tsx"
---
import type { UserEvent } from '@testing-library/user-event';
import type { T<%= h.inflection.camelize(h.changeCase.camelCase(name)) %> } from './<%= h.changeCase.paramCase(name) %>.tsx';

import { render, screen, cleanup } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { checkA11y } from 'test/test-utils.ts';
import { <%= h.inflection.camelize(h.changeCase.camelCase(name)) %> } from './<%= h.changeCase.paramCase(name) %>.tsx';

describe('~/components/<%= type %>/<%= h.changeCase.paramCase(name) %>', () => {
	afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	test('passes accessibility checks', async () => {
		const { container } = setupTest();
		await checkA11y(container);
	});

	test('should render', async () => {
		setupTest();

		const element = screen.getByText('Component');
		
		expect(element).toBeTruthy();
	});
})

type TestOverrides = {
	props?: Partial<T<%= h.inflection.camelize(h.changeCase.camelCase(name)) %>>;
};

type TReturn = {
	props: T<%= h.inflection.camelize(h.changeCase.camelCase(name)) %>;
	user: UserEvent;
	container: HTMLElement;
	baseElement: HTMLElement;
};

const getDefaultProps = (overrides: Partial<T<%= h.inflection.camelize(h.changeCase.camelCase(name)) %>> = {}): T<%= h.inflection.camelize(h.changeCase.camelCase(name)) %> => ({
	...overrides,
});

const setupTest = (overrides: TestOverrides = {}): TReturn => {
	const props = getDefaultProps(overrides.props);
	const utils = render(
		<<%= h.inflection.camelize(h.changeCase.camelCase(name)) %> {...props} />
	);
	return {
		...utils,
		props,
		user: userEvent.setup(),
	};
};
