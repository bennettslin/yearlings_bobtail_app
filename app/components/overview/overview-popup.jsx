import React from 'react'
import Popup from '../superclasses/popup'
import OverviewSection from './overview-section'

const defaultProps = {
    selectedOverviewIndex: 0,
    onCloseClick() {}
}

class OverviewPopup extends Popup {

    getClassName() {
        return 'overview'
    }

    getContentElement() {
        // Default is to show the overview.
        return !this.props.selectedOverviewIndex ?
            <OverviewSection {...this.props}
                inPopup={true}
            /> : null
    }
}

OverviewPopup.defaultProps = defaultProps
export default OverviewPopup
