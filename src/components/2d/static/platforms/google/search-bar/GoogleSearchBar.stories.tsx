import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    GoogleSearchBarSmall,
} from "./GoogleSearchBarSmall";


const meta = {
    title: "Components/GoogleSearchBarSmall",
    component: GoogleSearchBarSmall,

    parameters: {
        layout: "centered",
    },

    args: {
        text: "Best places to visit in Thailand",
    },
} satisfies Meta<typeof GoogleSearchBarSmall>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};