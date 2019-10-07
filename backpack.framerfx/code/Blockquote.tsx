import * as React from "react";
import { Frame } from "framer";
import "bpk-stylesheets/base";
import "bpk-stylesheets/base.css";
import BpkBlockquote from "bpk-component-blockquote";

export function Blockquote(props) {
  console.log(BpkBlockquote);

  return (
    <BpkBlockquote extraSpace={true} className={"bpk-blockquote"}>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </p>
    </BpkBlockquote>
  );
}
