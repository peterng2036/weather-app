import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import LocationSearchInput from './LocationSearchInput';

const meta = {
    title: 'LocationSearchInput',
    component: LocationSearchInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LocationSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        country: 'Japan',
        region: 'Tokyo'
    },
};