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

import * as React, {
  Component,
  cloneElement,
               
                     
} from 'react';

import BpkNavigationStack, {
             
                                        
} from './BpkNavigationStack';

                     
                                                              
                      
  

              
               
  

export default (
  Stack                    , // TODO: Improve type
  assignCallbacksToChildren          = true,
) => {
  class WithNavigationStackState extends Component               {
    static defaultProps = {
      ...BpkNavigationStack.defaultProps,
    };

    constructor(props       ) {
      super(props);

      this.state = {
        views: this.props.initialViews,
      };
    }

    pushView = (view              ) => {
      this.setState(prevState => {
        const views = prevState.views.slice();
        views.push(view);

        return {
          views,
        };
      });
    };

    popView = () => {
      this.setState(prevState => {
        const views = prevState.views.slice();
        views.pop();

        return {
          views,
        };
      });
    };

    render() {
      const {
        initialViews, // unused
        ...rest
      } = this.props;

      const callbacks = {
        pushView: this.pushView,
        popView: this.popView,
      };

      const [views, optionalCallbacks] = assignCallbacksToChildren
        ? [this.state.views.map(view => cloneElement(view, callbacks)), {}]
        : [this.state.views, callbacks];

      return <Stack views={views} {...optionalCallbacks} {...rest} />;
    }
  }

  return WithNavigationStackState;
};
