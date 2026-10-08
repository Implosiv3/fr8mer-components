import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    QuizzAnswerNoOption,
} from "./QuizzAnswerNoOption";


const meta = {
    title: "Components/QuizzAnswerNoOption",
    component: QuizzAnswerNoOption,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        text: {
            control: {
                type: "text",
            },
        },

        state: {
            control: {
                type: "select",
            },

            options: [
                undefined,
                "correct",
                "wrong",
            ],
        },
    },

    args: {
        text: "This is a quiz answer without an option",
        state: undefined,
    },
} satisfies Meta<typeof QuizzAnswerNoOption>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};