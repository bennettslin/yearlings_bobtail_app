import React from 'react';
import AnimationUtility from '../utilities/animation-utility.jsx';

class Popup extends React.Component {

    render() {
        const className = this.getClassName() + '-animation';

        return AnimationUtility.getTransitionGroupWrappedElement(this.getContentElement(), className);
    }
}

export default Popup;