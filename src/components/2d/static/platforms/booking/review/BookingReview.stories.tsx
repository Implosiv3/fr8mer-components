import type {
    Meta,
    StoryObj,
} from "@storybook/react-vite";

import {
    BookingReview,
} from "./BookingReview";


const meta = {
    title: "Components/BookingReview",
    component: BookingReview,

    parameters: {
        layout: "centered",
    },

    argTypes: {
        name: {
            control: {
                type: "text",
            },
        },

        country: {
            control: {
                type: "text",
            },
        },

        score: {
            control: {
                type: "text",
            },
        },

        scoreLabel: {
            control: {
                type: "text",
            },
        },

        title: {
            control: {
                type: "text",
            },
        },

        text: {
            control: {
                type: "text",
            },
        },

        date: {
            control: {
                type: "text",
            },
        },
    },

    args: {
        name: "Juan",
        country: "Spain",
        score: "9.2",
        scoreLabel: "Excelente",
        title: "Todo genial",
        text: "Todo estuvo genial, fue una pasada la estancia la verdad. Desde la recepción hasta los pequeños detalles en la habitación. Volveremos sin duda!",
        date: "Ayer",
    },
} satisfies Meta<typeof BookingReview>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};