import React from 'react'
import Popup from '../superclasses/popup'
import OverviewSection from './overview-section'

const defaultProps = {
    selectedOverviewIndex: 0
}

class OverviewPopup extends Popup {

    getClassName() {
        return 'overview'
    }

    getContentElement() {
        let showPopup = this.props.isLogue ? !this.props.inOverviewSubfield : (!this.props.selectedOverviewIndex ? this.props.inOverviewSubfield : false)

        return showPopup &&
            <OverviewSection {...this.props}
                inPopup={true}
            />
    }
}

OverviewPopup.defaultProps = defaultProps
export default OverviewPopup
