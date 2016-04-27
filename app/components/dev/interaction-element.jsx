/**
 * Generic element that will listen for hover events on desktop devices, and
 * click events on mobile devices.
 */

import React from 'react';

const defaultProps = {
    valueKey: '',
    eventHandler() {}
}

class InteractionElement extends React.Component {

    _onInteraction() {
        const props = this.props;
        props.eventHandler(props.valueKey);
    }

    render() {
        return (
            <div onClick={this._onInteraction}>
                {'test'}
            </div>
        );
    }
}

InteractionElement.defaultProps = defaultProps;
export default InteractionElement;