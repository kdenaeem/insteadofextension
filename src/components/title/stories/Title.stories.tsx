import * as React from "react";
import { Title } from "../component";
import { ComponentMeta } from "@storybook/react";

// // // //

export default {
    title: "Components/Title",
    component: Title,
} as ComponentMeta<typeof Title>;

export const Render = () => <Title />;
