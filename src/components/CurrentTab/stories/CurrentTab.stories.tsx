import * as React from "react";
import { CurrentTab } from "../component";
import { ComponentMeta } from "@storybook/react";

// // // //

export default {
    title: "Components/CurrentTab",
    component: CurrentTab,
} as ComponentMeta<typeof CurrentTab>;

export const Render = () => <CurrentTab />;
