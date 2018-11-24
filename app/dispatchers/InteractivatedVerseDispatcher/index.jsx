// Child that knows rules to toggle admin.

import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import { getSongVersesCount } from 'helpers/dataHelper'

class InteractivatedVerseDispatcher extends Component {

    static defaultProps = {
        getIndexDispatch: {},
        getDirectionDispatch: {}
    }

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getIndexDispatch: PropTypes.object.isRequired,
        getDirectionDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getIndexDispatch.dispatchInteractivatedVerseIndex = this.dispatchInteractivatedVerseIndex
        this.props.getDirectionDispatch.dispatchInteractivatedVerseDirection = this.dispatchInteractivatedVerseDirection
    }

    dispatchInteractivatedVerseIndex = (interactivatedVerseIndex = -1) => {
        this.props.updateSessionStore({ interactivatedVerseIndex })
    }

    dispatchInteractivatedVerseDirection = (direction) => {
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

        return interactivatedVerseIndex
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedVerseIndex
    },
    sessionStore: {
        interactivatedVerseIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    interactivatedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(InteractivatedVerseDispatcher)
