import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    AnimationStory,
} from "../../../../storybook/AnimationStory";

import {
    SimpleProgressBar,
} from "./SimpleProgressBar";


const meta = {
    title: "Animation/SimpleProgressBar",
    component: SimpleProgressBar,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        stripesSpeed: {
            control: {
                type: "range",
                min: 0,
                max: 10,
                step: 0.1,
            },
        },
    },

    args: {
        stripesSpeed: 1,
    },
} satisfies Meta<typeof SimpleProgressBar>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: (args) => (
        <AnimationStory
            fps={60}
            totalFrames={300}
        >
            <SimpleProgressBar
                stripesSpeed={args.stripesSpeed}
            />
        </AnimationStory>
    ),
};