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

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BpkRouterLink from './index';

storiesOf('bpk-component-router-link', module).add('Example', () => (
  <div>
    <BpkRouterLink to="#" onClick={action('#1 clicked')}>
      Link #1
    </BpkRouterLink>
    <br />
    <BpkRouterLink to="#" onClick={action('#2 clicked')}>
      Link #2
    </BpkRouterLink>
  </div>
));