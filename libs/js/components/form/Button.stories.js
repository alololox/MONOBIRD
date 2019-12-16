import React from "react";
import { Button } from "./index.js";
import { storiesOf } from "@storybook/react";

export default { component: Button, title: "Button" };

export const basic = () => <Button>Click Me</Button>;
export const disabled = () => (
  <Button disabled={true}>You Can't Click Me</Button>
);
export const green = () => <Button color="green">Click Me</Button>;
