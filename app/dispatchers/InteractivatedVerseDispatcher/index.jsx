// Child that knows rules to select interactivated verse.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'

import { getInteractivatedVerseForDirection } from './helper'

class InteractivatedVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchInteractivatedVerseIndex: this.dispatchInteractivatedVerseIndex,
            dispatchInteractivatedVerseDirection: this.dispatchInteractivatedVerseDirection
        })
    }

    dispatchInteractivatedVerseIndex = (interactivatedVerseIndex = -1) => {
        this.props.updateSessionStore({ interactivatedVerseIndex })
    }

    dispatchInteractivatedVerseDirection = (direction) => {
        if (this.props.isSelectedLogue) {
            return false
        }

        const {
                selectedSongIndex,
                selectedVerseIndex,
                interactivatedVerseIndex: currentInteractivatedVerseIndex
            } = this.props,

            interactivatedVerseIndex = getInteractivatedVerseForDirection({
                selectedSongIndex,
                selectedVerseIndex,
                currentInteractivatedVerseIndex,
                direction
            })

        this.props.updateSessionStore({ interactivatedVerseIndex })

        this.props.updateScrollLyricStore({
            queuedScrollLyricLog: 'Access interactivated verse direction.',
            queuedScrollLyricByVerse: true,

            /**
             * If interactivation remains on, scroll to interactivated verse.
             */
            queuedScrollLyricIndex: interactivatedVerseIndex
        })

        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        isSelectedLogue,
        selectedSongIndex,
        selectedVerseIndex
    },
    sessionStore: {
        interactivatedVerseIndex
    }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedVerseIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollLyricStore,
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(InteractivatedVerseDispatcher)
