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

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';

import BpkConfigurableNudger from './BpkConfigurableNudger';
import {
                   
  COMMON_DEFAULT_PROPS,
  COMMON_PROP_TYPES,
} from './common-types';
import STYLES from './BpkNudger.css';

              
                                 
  

const getClassName = cssModules(STYLES);
const compareValues = (a        , b        )         => a - b;
const incrementValue = (currentValue        )         => currentValue + 1;
const decrementValue = (currentValue        )         => currentValue - 1;
const formatValue = (currentValue        )         => currentValue.toString();

const BpkNudger = (props       ) => {
  const { ...rest } = props;

  return (
    <BpkConfigurableNudger
      inputClassName={getClassName('bpk-nudger__input--numeric')}
      compareValues={compareValues}
      incrementValue={incrementValue}
      decrementValue={decrementValue}
      formatValue={formatValue}
      {...rest}
    />
  );
};

BpkNudger.propTypes = {
  ...COMMON_PROP_TYPES,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

BpkNudger.defaultProps = COMMON_DEFAULT_PROPS;

export default BpkNudger;
