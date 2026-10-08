import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import defaultAvatarImage from "../../../../../assets/discord-logo.jpg";

import {
    DiscordMessage,
} from "./DiscordMessage";


const meta = {
    title: "Components/DiscordMessage",
    component: DiscordMessage,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        username: {
            control: {
                type: "text",
            },
        },

        avatar_img: {
            control: {
                type: "text",
            },
        },

        timestamp: {
            control: {
                type: "text",
            },
        },

        message: {
            control: {
                type: "text",
            },
        },
    },

    args: {
        username: "Dani",
        avatar_img: "",
        timestamp: "Today at 13:04",
        message: "Hello! This is a Discord message.",
    },
} satisfies Meta<typeof DiscordMessage>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const WithAvatar: Story = {
    args: {
        avatar_img: defaultAvatarImage,
    },
};