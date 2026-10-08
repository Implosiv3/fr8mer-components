import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    AnimationStory,
} from "../../../../storybook/AnimationStory";

import {
    StarsRating,
} from "./StarsRating";


const meta = {
    title: "Animation/StarsRating",
    component: StarsRating,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        rating: {
            control: {
                type: "select",
            },

            options: [
                1,
                2,
                3,
                4,
                5,
            ],
        },
    },

    args: {
        rating: 5,
    },
} satisfies Meta<typeof StarsRating>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
    render: (args) => (
        <div
            style={{
                width: 500,
                height: 150,
            }}
        >
            <AnimationStory
                fps={60}
                totalFrames={180}
            >
                <StarsRating
                    rating={args.rating}
                />
            </AnimationStory>
        </div>
    ),
};