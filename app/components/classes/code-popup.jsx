import React from 'react';
import AnimationUtility from '../utilities/animation-utility.jsx';

const defaultProps = {
    codeKey: '',
    selectedCodeKey: null
}

class CodePopup extends React.Component {

    render() {
        const annotationData = this.props.annotationData,
            codeElement = this.props.codeKey === this.props.selectedCodeKey ? 'placeholder text' : '';

        return AnimationUtility.getTransitionGroupWrappedElement(codeElement, "code-animation");
    }
}

CodePopup.defaultProps = defaultProps;
export default CodePopup;