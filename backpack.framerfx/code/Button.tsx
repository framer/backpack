import "bpk-stylesheets/base";
import "bpk-stylesheets/base.css";
import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import BpkButton from "bpk-component-button";

type Props = {
  height: number;
  width: number;
  text: string;
  disabled: boolean;
  destructive: boolean;
  featured: boolean;
  large: boolean;
  link: boolean;
  outline: boolean;
  secondary: boolean;
};
export function Button(props: Props) {
  return (
    <BpkButton
      disabled={props.disabled}
      destructive={props.destructive}
      featured={props.featured}
      large={props.large}
      link={props.link}
      outline={props.outline}
      secondary={props.secondary}
    >
      {props.text}
    </BpkButton>
  );
}

addPropertyControls(Button, {
  text: {
    type: ControlType.String,
    title: "Text",
    defaultValue: "Click Me"
  },
  disabled: {
    type: ControlType.Boolean,
    title: "Disabled",
    defaultValue: false
  },
  destructive: {
    type: ControlType.Boolean,
    title: "Destructive",
    defaultValue: false
  },
  featured: {
    type: ControlType.Boolean,
    title: "Featured",
    defaultValue: false
  },
  large: {
    type: ControlType.Boolean,
    title: "Large",
    defaultValue: false
  },
  link: {
    type: ControlType.Boolean,
    title: "Link",
    defaultValue: false
  },
  outline: {
    type: ControlType.Boolean,
    title: "Outline",
    defaultValue: false
  },
  secondary: {
    type: ControlType.Boolean,
    title: "Secondary",
    defaultValue: false
  }
});

Button.defaultProps = {
  height: 36,
  width: 103
};
