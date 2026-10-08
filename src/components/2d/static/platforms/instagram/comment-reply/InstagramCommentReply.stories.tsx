import type { Meta, StoryObj } from "@storybook/react-vite";

import instagramProfileImage from "../../../../../../assets/default-instagram-profile.jpg";

import { InstagramCommentReply } from "./InstagramCommentReply";


const meta = {
    title: "Components/InstagramCommentReply",
    component: InstagramCommentReply,
    parameters: {
        layout: "centered",
    },
    args: {
        avatar: instagramProfileImage,
        comment: "This place looks amazing!",
        replyingTo: "Agapito",
        isVerified: false,
    },
} satisfies Meta<typeof InstagramCommentReply>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const Verified: Story = {
    args: {
        isVerified: true,
    },
};