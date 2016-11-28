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
        return !this.props.selectedOverviewIndex && (this.props.isLogue ? !this.props.inOverviewSubfield : this.props.inOverviewSubfield) ?
            <OverviewSection {...this.props}
                inPopup={true}
            /> : null
    }
}

OverviewPopup.defaultProps = defaultProps
export default OverviewPopup
