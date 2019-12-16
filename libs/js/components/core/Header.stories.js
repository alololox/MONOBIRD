import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "./index.js";

export default { component: Header, title: "Header" };

export const outdoor = () => <Header title="outdoor" />;
export const fancy = () => <Header title="Fancy" fancy={true} />;
