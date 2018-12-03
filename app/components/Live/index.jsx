import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import Main from '../Main'
import Lyric from '../Lyric'
import Theatre from '../Theatre'

import Menu from './Menu'
import OverlayPopups from './OverlayPopups'
import OverviewLogue from './OverviewLogue'
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
            <___>
                <PopupOverlay />
                <Theatre />
                <Main />
                <OverviewLogue />
                <Lyric {...{ setLyricFocusElement }} />
                <OverlayPopups />
                <Menu />
                <TouchOverlay />
            </___>
        )
    }
}

export default Live
