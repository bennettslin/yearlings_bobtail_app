import React from 'react'
import Popup from '../superclasses/popup'
import OverviewsSection from './overviews-section'

const defaultProps = {
    selectedOverviewIndex: 0,
    onCloseClick() {}
}

class OverviewsPopup extends Popup {

    getClassName() {
        return 'overviews'
    }

    getContentElement() {
        // Default is to show the overview.
        return !this.props.selectedOverviewIndex ?
            <OverviewsSection {...this.props}
                inPopup={true}
            /> : null
    }
}

OverviewsPopup.defaultProps = defaultProps
export default OverviewsPopup
