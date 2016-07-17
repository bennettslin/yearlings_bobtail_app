import React from 'react';
import Popup from '../../superclasses/popup.jsx';
import UrlSection from './url-section.jsx';

const defaultProps = {
    url: '',
    onCloseClick() {}
}

class UrlPopup extends Popup {

    getClassName() {
        return 'url';
    }

    getContentElement() {
        return this.props.url ?
            <UrlSection {...this.props}
                ref="urlSection"
                inPopup={true}
            /> : null;
    }
}

UrlPopup.defaultProps = defaultProps;
export default UrlPopup;