import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    PhoneNotification,
} from "./PhoneNotification";


const meta = {
    title: "Components/PhoneNotification",
    component: PhoneNotification,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        avatar: {
            control: {
                type: "text",
            },
        },

        appName: {
            control: {
                type: "text",
            },
        },

        time: {
            control: {
                type: "text",
            },
        },

        title: {
            control: {
                type: "text",
            },
        },
    },

    args: {
        avatar: "https://i.pravatar.cc/96?img=12",
        appName: "Messages",
        time: "now",
        title: "You have a new message",
    },
} satisfies Meta<typeof PhoneNotification>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};