import type { Meta, StoryObj } from "@storybook/react-vite";

import { InstagramTooltip } from "./InstagramTooltip";


const meta = {
    title: "Components/InstagramTooltip",
    component: InstagramTooltip,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        trianglePosition: {
            control: {
                type: "select",
            },
            options: [
                "top",
                "bottom",
                "none",
            ],
        },
        opacity: {
            control: {
                type: "range",
                min: 0,
                max: 1,
                step: 0.1,
            },
        },
    },
    args: {
        username: "agapito",
        isVerified: false,
        trianglePosition: "bottom",
        opacity: 1,
    },
} satisfies Meta<typeof InstagramTooltip>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const Verified: Story = {
    args: {
        isVerified: true,
    },
};


export const NoTriangle: Story = {
    args: {
        trianglePosition: "none",
    },
};