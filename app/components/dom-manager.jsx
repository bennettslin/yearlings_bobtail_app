import React, { Component } from 'react'
import SwitchManager from './switch-manager'
import AdminToggle from './admin/admin-toggle'

class DomManager extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { selectedAdminIndex,
                isLyricExpanded,
                deviceIndex,
                windowWidth,
                windowHeight } = this.props

        return (
            <div className="dom-manager">
                <AdminToggle
                    selectedAdminIndex={selectedAdminIndex}
                    isLyricExpanded={isLyricExpanded}
                    deviceIndex={deviceIndex}
                    windowWidth={windowWidth}
                    windowHeight={windowHeight}
                />
                <SwitchManager {...this.props} />
            </div>
        )
    }
}

export default DomManager
