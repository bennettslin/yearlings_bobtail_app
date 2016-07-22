// FIXME: Not used right now.

import React from 'react';
import DotPopup from './dot-popup.jsx';
import Interactable from '../superclasses/interactable.jsx';

const defaultProps = {
    classValue: ''
}

/*************
 * CONTAINER *
 *************/

/****************
 * PRESENTATION *
 ****************/

class DotButton extends Interactable {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    getClassName() {
        return `dot ${this.props.classValue}`;
    }

    getContentElement() {
        return (
            <DotPopup
                classValue={this.props.classValue}
                active={this.state.active}
            />
        );
    }

    handleInteraction() {
        this.setState({
            active: !this.state.active
        });
    }
}

DotButton.defaultProps = defaultProps;
export default DotButton;
