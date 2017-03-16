import React, { Component } from 'react'
import SwitchManager from './switch-manager'

class DomManager extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="dom-manager">
                <SwitchManager {...this.props} />
            </div>
        )
    }
}

export default DomManager
