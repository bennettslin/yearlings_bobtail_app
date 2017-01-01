import React from 'react'
import Popup from '../superclasses/popup'
import DotsSection from './dots-section'

const defaultProps = {
    selectedDotsIndex: 0
}

class DotsPopup extends Popup {

    getClassName() {
        return 'dots'
    }

    getContentElement() {
        return this.props.selectedDotsIndex ?
            <DotsSection {...this.props}
                inPopup={true}
            /> : null
    }
}

DotsPopup.defaultProps = defaultProps
export default DotsPopup
