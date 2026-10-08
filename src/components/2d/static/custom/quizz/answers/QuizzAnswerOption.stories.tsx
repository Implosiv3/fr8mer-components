import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    QuizzAnswerOption,
} from "./QuizzAnswerOption";


const meta = {
    title: "Components/QuizzAnswerOption",
    component: QuizzAnswerOption,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        option: {
            control: {
                type: "text",
            },
        },

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
        option: "A",
        text: "This is a quiz answer option",
        state: undefined,
    },
} satisfies Meta<typeof QuizzAnswerOption>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};