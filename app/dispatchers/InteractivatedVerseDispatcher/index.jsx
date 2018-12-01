// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateSessionStore } from 'flux/session/action'

import { getSongVersesCount } from 'helpers/dataHelper'

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
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchInteractivatedVerseIndex = this.dispatchInteractivatedVerseIndex
        this.props.getDispatch.dispatchInteractivatedVerseDirection = this.dispatchInteractivatedVerseDirection
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
                selectedVerseIndex
            } = this.props,

            songVersesCount = getSongVersesCount(selectedSongIndex)

        let { interactivatedVerseIndex } = this.props

        // Ensure modulo.
        if (direction === -1) {
            direction = songVersesCount - 1
        }

        // We are turning on interactivation, so start from selected verse.
        if (interactivatedVerseIndex === -1) {
            interactivatedVerseIndex =
                (selectedVerseIndex + direction) % songVersesCount

        // We already have an interactivated verse.
        } else {
            interactivatedVerseIndex =
                (interactivatedVerseIndex + direction) % songVersesCount
        }

        // If we're returning to the selected verse, turn off interactivation.
        if (interactivatedVerseIndex === selectedVerseIndex) {
            interactivatedVerseIndex = -1
        }

        this.props.updateSessionStore({ interactivatedVerseIndex })

        this._scrollToInteractivatedVerse(interactivatedVerseIndex)

        return true
    }

    _scrollToInteractivatedVerse(interactivatedVerseIndex) {
        const { selectedVerseIndex } = this.props

        this.props.updateScrollLyricStore({
            scrollLyricLog: 'Access verse direction.',
            doScrollLyricByVerse: true,

            /**
             * If interactivation remains on, scroll to interactivated verse.
             * Otherwise, scroll to selected verse.
             */
            scrollLyricIndex:
                interactivatedVerseIndex > -1 ?
                    interactivatedVerseIndex :
                    selectedVerseIndex,

            doDetermineVerseBars: true
        })
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
