import React from 'react';
import TransitionGroup from '../utilities/transition-group.jsx';

class Popup extends React.Component {

    render() {
        const className = this.getClassName() + '-animation';
        return (
            <TransitionGroup
                element={this.getContentElement()}
                transitionName={className}
            />
        );
    }
}

export default Popup;