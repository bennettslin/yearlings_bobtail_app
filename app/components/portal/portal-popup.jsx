import React from 'react'
import Popup from '../superclasses/popup'
import PortalSection from './portal-section'

const defaultProps = {
    selectedPortalsIndex: null,
    onCloseClick() {}
}

class PortalPopup extends Popup {

    getClassName() {
        return 'portal'
    }

    getContentElement() {
        return this.props.selectedPortalsIndex ?
            <PortalSection {...this.props}
                inPopup={true}
            /> : null
    }
}

PortalPopup.defaultProps = defaultProps
export default PortalPopup
