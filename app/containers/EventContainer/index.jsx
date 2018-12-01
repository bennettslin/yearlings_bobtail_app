
// TODO: Eventually turn this file into just a scroll listener.
// Component that handles all user events.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import InteractiveContainer from '../../containers/InteractiveContainer'
import AnnotationDispatcher from '../../handlers/AnnotationHandler/Dispatcher'

// import { getAnnotationObject } from '../../helpers/dataHelper'
// import { intersects } from 'helpers/dotHelper'
import { getHandlers } from './helper'

class EventContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isCarouselShown: PropTypes.bool.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    selectSong = (wormholeObject) => {
        return this.props.selectSong(wormholeObject)
    }

    /*********
     * VERSE *
     *********/

    handleLyricVerseSelect = (
        e,
        selectedVerseIndex,
        fromStanzaTab
    ) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        if (
            !fromStanzaTab &&

            // The UI should prevent this, but just in case.
            selectedVerseIndex !== this.props.interactivatedVerseIndex
        ) {
            return false
        }

        this.props.selectVerse({
            selectedVerseIndex,
            scrollLog: 'Select interactivated verse.'
        })

        // Verse bars always get reset.
        this.props.updateToggleStore({
            isVerseBarAbove: false,
            isVerseBarBelow: false
        })

        // Deinteractivate after selecting.
        this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
        return true
    }

    render() {
        const {
            determineVerseBars,
            selectVerse
        } = this.props

        return (
            <___>
                <InteractiveContainer
                    {...{
                        eventHandlers: getHandlers(this),
                        determineVerseBars,
                        selectVerse
                    }}
                />
                <AnnotationDispatcher {...{ getDispatch: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isCarouselShown },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex,
        isSelectedLogue
    },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    isCarouselShown,
    selectedAnnotationIndex,
    isSelectedLogue,
    dotsBitNumber,
    selectedDotKeys,
    selectedSongIndex,
    selectedVerseIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollCarouselStore,
        updateScrollLyricStore,
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
