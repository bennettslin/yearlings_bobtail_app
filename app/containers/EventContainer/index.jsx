
// TODO: Eventually turn this file into just a scroll listener.
// Component that handles all user events.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import InteractiveContainer from '../../containers/InteractiveContainer'
import AnnotationDispatcher from '../../handlers/AnnotationHandler/Dispatcher'

import { getHandlers } from './helper'

class EventContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired
    }

    selectSong = (wormholeObject) => {
        return this.props.selectSong(wormholeObject)
    }

    /*********
     * VERSE *
     *********/

    handleVerseSelect = (
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
            selectSong,
            selectVerse
        } = this.props

        return (
            <___>
                <InteractiveContainer
                    {...{
                        eventHandlers: getHandlers(this),
                        selectSong,
                        selectVerse
                    }}
                />
                <AnnotationDispatcher {...{ getDispatch: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    songStore: {
        selectedVerseIndex,
        isSelectedLogue
    },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    isSelectedLogue,
    selectedVerseIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
