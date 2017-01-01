import React from 'react'
import Popup from '../superclasses/popup'
import WikiSection from './wiki-section'

const defaultProps = {
    selectedWikiUrl: null
}

class WikiPopup extends Popup {

    getClassName() {
        return 'wiki'
    }

    getContentElement() {
        return this.props.selectedWikiUrl &&
            <WikiSection {...this.props}
                inPopup={true}
            />
    }
}

WikiPopup.defaultProps = defaultProps
export default WikiPopup
