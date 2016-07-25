import React from 'react'
import Popup from '../superclasses/popup.jsx'
import WikiSection from './wiki-section.jsx'

const defaultProps = {
    activeWikiUrl: null,
    onCloseClick() {}
}

class WikiPopup extends Popup {

    getClassName() {
        return 'url'
    }

    getContentElement() {
        return this.props.activeWikiUrl ?
            <WikiSection {...this.props}
                inPopup={true}
            /> : null
    }
}

WikiPopup.defaultProps = defaultProps
export default WikiPopup
