
// TODO: Eventually turn this file into just a scroll listener.
// Component that handles all user events.

import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import InteractiveContainer from '../../containers/InteractiveContainer'
import VerseDispatcher from '../../dispatchers/VerseDispatcher'

import { getHandlers } from './helper'

class EventContainer extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired
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

        this.dispatchVerse({
            selectedVerseIndex,
            scrollLog: 'Select interactivated verse.'
        })

        // Deinteractivate after selecting.
        this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
        return true
    }

    render() {
        const {
            selectSong
        } = this.props

        return (
            <___>
                <InteractiveContainer
                    {...{
                        eventHandlers: getHandlers(this),
                        selectSong
                    }}
                />
                <VerseDispatcher {...{ getDispatch: this }} />
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
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(EventContainer)
