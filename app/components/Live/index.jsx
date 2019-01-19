import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import Main from '../Main'
import Theatre from '../Theatre'

import Menu from './Menu'
import OverlayPopups from './OverlayPopups'
import LyricOverview from './LyricOverview'
import PopupOverlay from './PopupOverlay'
import TouchOverlay from './TouchOverlay'

class Live extends PureComponent {

    static propTypes = {
        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired,
        setScoreFocusElement: PropTypes.func.isRequired,
        setWikiFocusElement: PropTypes.func.isRequired
    }

    render() {
        const {
            setLyricFocusElement,
            setScoreFocusElement,
            setWikiFocusElement
        } = this.props

        return (
            <___>
                <Theatre />
                <Main />
                <LyricOverview {...{ setLyricFocusElement }} />
                <PopupOverlay />
                <OverlayPopups
                    {...{
                        setScoreFocusElement,
                        setWikiFocusElement
                    }}
                />
                <Menu />
                <TouchOverlay />
            </___>
        )
    }
}

export default Live
