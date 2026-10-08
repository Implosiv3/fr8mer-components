import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    LocationPin,
} from "./LocationPin";


const meta = {
    title: "Components/LocationPin",
    component: LocationPin,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        location: {
            control: {
                type: "text",
            },
        },

        pinColor: {
            control: {
                type: "color",
            },
        },
    },

    args: {
        location: "Spain",
        pinColor: "#000000",
    },
} satisfies Meta<typeof LocationPin>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};