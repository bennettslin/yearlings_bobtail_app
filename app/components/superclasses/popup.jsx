import React from 'react';
import AnimationUtility from '../utilities/animation-utility.jsx';

class Popup extends React.Component {

    render() {
        const className = this.getClassName() || 'default';
        const animationName = className + '-animation';

        return AnimationUtility.getTransitionGroupWrappedElement(this.getContentElement(), animationName);
    }
}

export default Popup;