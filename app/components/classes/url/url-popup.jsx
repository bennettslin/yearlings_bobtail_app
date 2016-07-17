import React from 'react';
import Popup from '../../superclasses/popup.jsx';
import UrlSection from './url-section.jsx';

const defaultProps = {
    url: null
}

/*************
 * CONTAINER *
 *************/

/****************
 * PRESENTATION *
 ****************/

class UrlPopup extends Popup {

    getClassName() {
        return 'url';
    }

    getContentElement() {
        const url = this.props.url;

        return url ? (
            <UrlSection
                ref="urlSection"
                url={url}
            />
        ) : null;
    }
}

UrlPopup.defaultProps = defaultProps;
export default UrlPopup;