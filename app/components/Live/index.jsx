/**
 * Component that routes event handlers to their components. Knows no state, so
 * should not update.
 */

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import Main from '../Main'
import Lyric from '../Lyric'
import Theatre from '../Theatre'

import Menu from './Menu'
import OverlayPopups from './OverlayPopups'
import OverviewLogue from './OverviewLogue'

import { getOrganisedHandlersFromProps } from './helper'

class Live extends Component {

    static propTypes = {
        // From parent.
        setLyricRef: PropTypes.func.isRequired,
        setCarouselAnnotationRef: PropTypes.func.isRequired,
        setLyricAnnotationRef: PropTypes.func.isRequired,
        setVerseRef: PropTypes.func.isRequired,
        setLyricVerseParentRef: PropTypes.func.isRequired,
        setCarouselParentRef: PropTypes.func.isRequired,

        handleAnnotationDirectionSelect: PropTypes.func.isRequired,
        selectSong: PropTypes.func.isRequired,
        togglePlay: PropTypes.func.isRequired,
        handleAnnotationIndexSelect: PropTypes.func.isRequired,
        handleLyricWheel: PropTypes.func.isRequired,
        handleLyricVerseSelect: PropTypes.func.isRequired,
        handleVerseBarWheel: PropTypes.func.isRequired
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
