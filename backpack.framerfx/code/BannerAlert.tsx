import * as React from "react";
import { Frame } from "framer";
import "bpk-stylesheets/base";
import "bpk-stylesheets/base.css";
import BpkBannerAlert from "bpk-component-banner-alert";

export function BannerAlert() {
  console.log(BpkBannerAlert);

  return (
    <BpkBannerAlert
      message="Successful alert with more information."
      type={"success"}
    />
  );
}
