import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    setInteractivatedVerseIndex,
    setIsVerseBarAbove,
    setIsVerseBarBelow
} from '../redux/actions/session'

import { getSongVerseTimes } from '../helpers/dataHelper'
import { getVerseBarStatus } from '../helpers/logicHelper'

class VerseManager extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        windowHeight: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedVerseElement: PropTypes.object,
        setInteractivatedVerseIndex: PropTypes.func.isRequired,
        setIsVerseBarAbove: PropTypes.func.isRequired,
        setIsVerseBarBelow: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }


    interactivateVerse(interactivatedVerseIndex = -1) {
        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)
    }

    interactivateVerseDirection(direction) {
        const { selectedSongIndex } = this.props,
            songVerseTimes = getSongVerseTimes(selectedSongIndex),
            songVerseTimesCount = songVerseTimes.length

        let { interactivatedVerseIndex } = this.props

        // Ensure modulo.
        if (direction === -1) {
            direction = songVerseTimesCount - 1
        }

        // We are turning on interactivation, so start from selected verse.
        if (interactivatedVerseIndex === -1) {
            interactivatedVerseIndex = (this.props.selectedVerseIndex + direction) % songVerseTimesCount

        // We already have an interactivated verse.
        } else {
            interactivatedVerseIndex = (interactivatedVerseIndex + direction) % songVerseTimesCount
        }

        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)
        return interactivatedVerseIndex
    }

    determineVerseBars(verseElement = this.props.selectedVerseElement) {
        // Prevent verse bar from showing upon initial load.
        if (!this.props.appMounted || !verseElement) {
            return false
        }

        const { isVerseBarAbove,
                isVerseBarBelow } = getVerseBarStatus({
                    deviceIndex: this.props.deviceIndex,
                    windowWidth: this.props.windowWidth,
                    windowHeight: this.props.windowHeight,
                    isLyricExpanded: this.props.isLyricExpanded,
                    isHeightlessLyricColumn:
                        this.props.isHeightlessLyricColumn,
                    verseElement
                })

        this.props.setIsVerseBarAbove(isVerseBarAbove)
        this.props.setIsVerseBarBelow(isVerseBarBelow)
    }

    resetVerseBars() {
        this.props.setIsVerseBarAbove(false)
        this.props.setIsVerseBarBelow(false)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    appMounted,
    deviceIndex,
    windowWidth,
    windowHeight,
    isLyricExpanded,
    isHeightlessLyricColumn,
    interactivatedVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedVerseElement
}) => ({
    appMounted,
    deviceIndex,
    windowWidth,
    windowHeight,
    isLyricExpanded,
    isHeightlessLyricColumn,
    interactivatedVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    selectedVerseElement
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setInteractivatedVerseIndex,
        setIsVerseBarAbove,
        setIsVerseBarBelow
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(VerseManager)
