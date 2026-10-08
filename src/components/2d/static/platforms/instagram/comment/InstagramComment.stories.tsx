import type { Meta, StoryObj } from "@storybook/react-vite";

import { InstagramComment } from "./InstagramComment";


const meta = {
    title: "Components/InstagramComment",
    component: InstagramComment,
    parameters: {
        layout: "centered",
    },
    args: {
        avatar: "https://i.pravatar.cc/96?img=12",
        username: "travelwithme",
        text: "This place looks absolutely amazing! 😍",
        time: "2 d",
        isLiked: false,
    },
} satisfies Meta<typeof InstagramComment>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const Liked: Story = {
    args: {
        isLiked: true,
    },
};