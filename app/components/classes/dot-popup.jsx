import React from 'react';
import Popup from '../superclasses/popup.jsx';

const defaultProps = {
    classValue: '',
    active: false
}

class DotPopup extends Popup {

    getClassName() {
        return this.props.classValue;
    }

    getContentElement() {
        return this.props.active ?
            <div className="popup-content-wrapper">
                hi there!
            </div> : null;
    }
}

DotPopup.defaultProps = defaultProps;
export default DotPopup;