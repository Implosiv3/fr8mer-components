import type { Meta, StoryObj } from "@storybook/react-vite";

import { InstagramVisualizationsInfoPanelCard } from "./InstagramVisualizationsInfoPanelCard";


const meta = {
    title: "Components/InstagramVisualizationsInfoPanelCard",
    component: InstagramVisualizationsInfoPanelCard,
    parameters: {
        layout: "centered",
    },
    args: {
        title: "Panel para profesionales",
        subtitle: "826 visualizaciones en los últimos 30 días.",
        doShowTrend: false,
    },
} satisfies Meta<typeof InstagramVisualizationsInfoPanelCard>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};


export const WithTrend: Story = {
    args: {
        doShowTrend: true,
    },
};