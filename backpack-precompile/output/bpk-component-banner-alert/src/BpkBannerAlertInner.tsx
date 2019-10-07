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

/* This is an internal component to Backpack that powers `BpkBannerAlert`,
 * `BpkBannerAlertDismissable` and `BpkBannerAlertExpandable`.
 */

import * as PropTypes from 'prop-types';
import * as React from 'react';
import { withButtonAlignment } from 'bpk-component-icon';
import BpkAnimateHeight from 'bpk-animate-height';
import BpkCloseButton from 'bpk-component-close-button';
import TickCircleIcon from 'bpk-component-icon/sm/tick-circle';
import ChevronDownIcon from 'bpk-component-icon/sm/chevron-down';
import InfoCircleIcon from 'bpk-component-icon/sm/information-circle';
import { durationSm } from 'bpk-tokens/tokens/base.es6';
import { cssModules } from 'bpk-react-utils';

import AnimateAndFade from './AnimateAndFade';
import {
                      
                   
                        
                             
  ALERT_TYPES,
  COMMON_PROP_TYPES,
  COMMON_DEFAULT_PROPS,
} from './common-types';
import STYLES from './BpkBannerAlert.css';

const getClassName = cssModules(STYLES);

const ExpandIcon = withButtonAlignment(ChevronDownIcon);

export const CONFIGURATION = {
  NONE: 'none',
  DISMISSABLE: 'dismissable',
  EXPANDABLE: 'expandable',
};

const getIconForType = (
  type                ,
  CustomIcon                                    ,
) => {
  const classMap                               = {
    [ALERT_TYPES.SUCCESS]: getClassName('bpk-banner-alert__success-icon'),
    [ALERT_TYPES.WARN]: getClassName('bpk-banner-alert__warn-icon'),
    [ALERT_TYPES.ERROR]: getClassName('bpk-banner-alert__error-icon'),
    [ALERT_TYPES.NEUTRAL]: getClassName('bpk-banner-alert__neutral-icon'),
  };
  const className = classMap[type];
  const componentMap                             = {
    [ALERT_TYPES.SUCCESS]: TickCircleIcon,
    [ALERT_TYPES.WARN]: InfoCircleIcon,
    [ALERT_TYPES.ERROR]: InfoCircleIcon,
    [ALERT_TYPES.NEUTRAL]: InfoCircleIcon,
  };
  const Icon = CustomIcon || componentMap[type];
  const AlignedIcon = withButtonAlignment(Icon);

  return <AlignedIcon className={className} />;
};

                          
                 
                    
  

const ToggleButton = (props                   ) => {
  const classNames = [getClassName('bpk-banner-alert__expand-icon')];
  if (props.expanded) {
    classNames.push(getClassName('bpk-banner-alert__expand-icon--flipped'));
  }

  return (
    <button
      type="button"
      className={getClassName('bpk-banner-alert__toggle-button')}
      aria-label={props.label}
      aria-expanded={props.expanded}
      title={props.label}
    >
      <ExpandIcon className={classNames.join(' ')} />
    </button>
  );
};

              
                         
                                               

                                                                 
                 
                    
                             
                                        

                                                                  
                              
                              
  

const BpkBannerAlertInner = (props       ) => {
  const {
    animateOnEnter,
    animateOnLeave,
    children,
    bannerClassName,
    dismissButtonLabel,
    message,
    onDismiss,
    show,
    type,
    configuration,
    toggleButtonLabel,
    expanded,
    onExpandToggle,
    icon,
    ...rest
  } = props;
  const onBannerExpandToggle = () => {
    if (props.onExpandToggle) {
      props.onExpandToggle(!expanded);
    }
  };

  const onBannerDismiss = () => {
    if (props.onDismiss) {
      props.onDismiss();
    }
  };

  const isExpandable = configuration === CONFIGURATION.EXPANDABLE;
  const dismissable = configuration === CONFIGURATION.DISMISSABLE;
  const showChildren = isExpandable && expanded;
  const ariaRoles = ['alert'];

  const headerClassNames = [getClassName('bpk-banner-alert__header')];
  const sectionClassNames = [
    'bpk-banner-alert',
    `bpk-banner-alert--${type}`,
  ].map(sectionClassName => getClassName(sectionClassName));

  if (bannerClassName) {
    sectionClassNames.push(bannerClassName);
  }

  if (isExpandable) {
    headerClassNames.push(getClassName('bpk-banner-alert__header--expandable'));
    ariaRoles.push('button');
  }

  /* eslint-disable
    jsx-a11y/no-static-element-interactions,
    jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-noninteractive-element-interactions
    */
  // Disabling 'click-events-have-key-events and interactive-supports-focus' because header element is not focusable.
  // ToggleButton is focusable and works for this.
  return (
    <AnimateAndFade
      animateOnEnter={animateOnEnter}
      animateOnLeave={dismissable || animateOnLeave}
      show={show}
      {...rest}
    >
      <section className={sectionClassNames.join(' ')}>
        <header
          role={ariaRoles.join(' ')}
          className={headerClassNames.join(' ')}
          onClick={onBannerExpandToggle}
        >
          <span className={getClassName('bpk-banner-alert__icon')}>
            {getIconForType(type, icon)}
          </span>
          &nbsp;
          <span className={getClassName('bpk-banner-alert__message')}>
            {message}
          </span>
          &nbsp;
          {isExpandable && (
            <span className={getClassName('bpk-banner-alert__toggle')}>
              <ToggleButton expanded={expanded} label={toggleButtonLabel} />
            </span>
          )}
          {dismissable && (
            <span className={getClassName('bpk-banner-alert__toggle')}>
              <BpkCloseButton
                className={getClassName('bpk-banner-alert__toggle-button')}
                onClick={onBannerDismiss}
                aria-label={dismissButtonLabel}
                label={dismissButtonLabel}
              />
            </span>
          )}
        </header>
        <BpkAnimateHeight
          duration={parseInt(durationSm, 10)}
          height={showChildren ? 'auto' : 0}
        >
          <div className={getClassName('bpk-banner-alert__children-container')}>
            {children}
          </div>
        </BpkAnimateHeight>
      </section>
    </AnimateAndFade>
  );
  /* eslint-enable */
};

BpkBannerAlertInner.propTypes = {
  ...COMMON_PROP_TYPES,
  configuration: PropTypes.oneOf([
    CONFIGURATION.NONE,
    CONFIGURATION.DISMISSABLE,
    CONFIGURATION.EXPANDABLE,
  ]).isRequired,

  // Only relevant when configuration == CONFIGURATION.EXPANDABLE
  children: PropTypes.node,
  expanded: PropTypes.bool,
  toggleButtonLabel: PropTypes.string,
  onExpandToggle: PropTypes.func,

  // Only relevant when configuration == CONFIGURATION.DISMISSABLE
  dismissButtonLabel: PropTypes.string,
  onDismiss: PropTypes.func,
};

BpkBannerAlertInner.defaultProps = {
  ...COMMON_DEFAULT_PROPS,
  configuration: CONFIGURATION.NONE,

  // Only relevant when configuration == CONFIGURATION.EXPANDABLE
  children: null,
  expanded: false,
  toggleButtonLabel: null,
  onExpandToggle: null,

  // Only relevant when configuration == CONFIGURATION.DISMISSABLE
  dismissButtonLabel: null,
  onDismiss: null,
};

export default BpkBannerAlertInner;