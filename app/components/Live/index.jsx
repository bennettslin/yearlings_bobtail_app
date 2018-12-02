/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import Main from '../Main'
import Lyric from '../Lyric'
import Theatre from '../Theatre'

import Menu from './Menu'
import OverlayPopups from './OverlayPopups'
import OverviewLogue from './OverviewLogue'

import { getOrganisedHandlersFromProps } from './helper'

class Live extends PureComponent {

    static propTypes = {
        // From parent.
        setLyricFocusElement: PropTypes.func.isRequired,

        selectSong: PropTypes.func.isRequired,
        togglePlay: PropTypes.func.isRequired
    }

    render() {
        const {
            annotationPopupHandlers,
            lyricHandlers,
            mainColumnHandlers,
            menuFieldHandlers,
            theatreHandlers
        } = getOrganisedHandlersFromProps(this.props)

        return (
            <___>
                <div className="PopupOverlay" />

                <Theatre {...theatreHandlers} />
                <Main {...mainColumnHandlers} />
                <OverviewLogue />
                <Lyric {...lyricHandlers} />
                <OverlayPopups
                    annotationPopupHandlers={annotationPopupHandlers}
                />
                <Menu {...menuFieldHandlers} />

                {/* Prevent popup interaction when slider is touched. */}
                <div className="TouchOverlay" />
            </___>
        )
    }
}

export default Live
