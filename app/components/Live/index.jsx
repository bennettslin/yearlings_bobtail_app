import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Main from '../Main'
import Theatre from '../Theatre'

import Menu from './Menu'
import MainPopups from './MainPopups'
import LyricOverview from './LyricOverview'
import PopupOverlay from './PopupOverlay'
import TouchOverlay from './TouchOverlay'

class Live extends PureComponent {

    static propTypes = {
        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired
    }

    render() {
        const { setLyricFocusElement } = this.props

        return (
            <>
                <Theatre />
                <Main />
                <LyricOverview {...{ setLyricFocusElement }} />
                <PopupOverlay />
                <MainPopups />
                <Menu />
                <TouchOverlay />
            </>
        )
    }
}

export default Live
