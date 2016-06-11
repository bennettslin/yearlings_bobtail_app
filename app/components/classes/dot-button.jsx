import React from 'react';
import Interactable from '../superclasses/interactable.jsx';

const defaultProps = {
    classValue: ''
}

class DotButton extends Interactable {

    getClassName() {
        return 'dot ' + this.props.classValue;
    }

    handleInteraction() {
        console.error('dot ' + this.props.classValue + ' clicked!');
    }
}

DotButton.defaultProps = defaultProps;
export default DotButton;