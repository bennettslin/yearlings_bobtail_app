import React, { Component } from 'react';

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class SmartComponent extends Component {

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        return (
            <Component
                {...this.props}
            />
        );
    }
}

export default SmartComponent
