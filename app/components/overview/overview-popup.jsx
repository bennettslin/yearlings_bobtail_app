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

        const { isLogue,
                inOverviewSubfield,
                selectedOverviewIndex } = this.props

        let showPopup

        if (isLogue) {
            showPopup = !inOverviewSubfield
        } else {
            showPopup = !selectedOverviewIndex ? inOverviewSubfield : false
        }

        return showPopup &&
            <OverviewSection {...this.props}
                inPopup={true}
            />
    }
}

OverviewPopup.defaultProps = defaultProps
export default OverviewPopup
