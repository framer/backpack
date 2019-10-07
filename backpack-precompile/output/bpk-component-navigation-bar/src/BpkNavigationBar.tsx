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
import BpkText from 'bpk-component-text';

import STYLES from './BpkNavigationBar.css';

const getClassNames = cssModules(STYLES);

                     
             
              
                     
                               
                                
  

const cloneWithClass = (elem              , newStyle        ) => {
  const className = getClassNames(elem.props.className, newStyle);
  return React.cloneElement(elem);
};

const BpkNavigationBar = (props       ) => {
  const {
    id,
    title,
    className,
    leadingButton,
    trailingButton,
    ...rest
  } = props;

  const titleId = `${id}-bpk-navigation-bar-title`;

  return (
    <nav
      aria-labelledby={titleId}
      className={getClassNames('bpk-navigation-bar', className)}
      {...rest}
    >
      {leadingButton &&
        cloneWithClass(leadingButton, 'bpk-navigation-bar__leading-item')}
      {typeof title === 'string' ? (
        <BpkText
          id={titleId}
          bold
          className={getClassNames('bpk-navigation-bar__title')}
        >
          {title}
        </BpkText>
      ) : (
        title
      )}
      {trailingButton &&
        cloneWithClass(trailingButton, 'bpk-navigation-bar__trailing-item')}
    </nav>
  );
};

BpkNavigationBar.propTypes = {
  title: PropTypes.node.isRequired,
  className: PropTypes.string,
  leadingButton: PropTypes.element,
  trailingButton: PropTypes.element,
};

BpkNavigationBar.defaultProps = {
  className: null,
  leadingButton: null,
  trailingButton: null,
};

export default BpkNavigationBar;
