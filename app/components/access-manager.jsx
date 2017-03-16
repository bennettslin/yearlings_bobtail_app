import React, { Component } from 'react'
import DomManager from './dom-manager'

class AccessManager extends Component {

    render() {
        return (
            <DomManager {...this.props} />
        )
    }
}

export default AccessManager
