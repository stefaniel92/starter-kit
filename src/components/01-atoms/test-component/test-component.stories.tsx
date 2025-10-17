import type { StoryObj, Meta } from '@storybook/react';

import { TestComponent as TestComponentComponent } from './test-component.tsx';

const meta: Meta<typeof TestComponentComponent> = {
	title: '01-atoms/Test component',
	component: TestComponentComponent,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TestComponentComponent>;

export const TestComponent: Story = {
	args: {}
};
