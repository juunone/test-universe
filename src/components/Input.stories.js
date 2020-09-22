import React from "react";
import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  layout: "centered",
  argTypes: {
    color: { control: "color" }
  }
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "blue"
};
