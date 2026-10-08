import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    AnimationStory,
} from "../../../../storybook/AnimationStory";

import {
    SpinnerLoader,
} from "./SpinnerLoader";


const meta = {
    title: "Animation/SpinnerLoader",
    component: SpinnerLoader,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        rotationsPerSecond: {
            control: {
                type: "range",
                min: 0,
                max: 5,
                step: 0.1,
            },
        },
    },

    args: {
        rotationsPerSecond: 1,
    },
} satisfies Meta<typeof SpinnerLoader>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        rotationsPerSecond: 0.1
    },

    render: (args) => (
        <AnimationStory>
            <SpinnerLoader
                rotationsPerSecond={args.rotationsPerSecond}
            />
        </AnimationStory>
    )
};