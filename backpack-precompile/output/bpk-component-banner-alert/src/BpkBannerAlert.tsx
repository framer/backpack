/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2019 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*       strict */
import * as React from "react";
import * as PropTypes from "prop-types";

import { COMMON_PROP_TYPES, COMMON_DEFAULT_PROPS } from "./common-types";
import * as BpkBannerAlertInner from "./BpkBannerAlertInner";

const BpkBannerAlert = props => {
  console.log("BACKPACK Import", BpkBannerAlertInner);
  return <BpkBannerAlertInner {...props} />;
};

BpkBannerAlert.propTypes = COMMON_PROP_TYPES;
BpkBannerAlert.defaultProps = COMMON_DEFAULT_PROPS;

export default BpkBannerAlert;
