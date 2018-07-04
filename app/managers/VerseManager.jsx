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
        deviceIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        windowHeight: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        setInteractivatedVerseIndex: PropTypes.func.isRequired,
        setIsVerseBarAbove: PropTypes.func.isRequired,
        setIsVerseBarBelow: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        getVerseElement: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    componentDidUpdate(prevProps) {
        const {
            selectedSongIndex,
            selectedVerseIndex,
            sliderVerseIndex
        } = this.props


        if (selectedSongIndex !== prevProps.selectedSongIndex) {
            // Reset interactivated verse.
            this.interactivateVerse()

            // Reset verse bars.
            this.resetVerseBars()
        }

        if (
            (
                // Determine verse bars here while we are sliding.
                sliderVerseIndex > -1 &&
                sliderVerseIndex !== prevProps.sliderVerseIndex
            )
            || (
                // Determine verse bars if selecting interactivated verse.
                sliderVerseIndex < 0 && prevProps.sliderVerseIndex < 0 &&
                selectedVerseIndex !== prevProps.selectedVerseIndex
            )
        ) {
            this.determineVerseBars()
        }
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

    determineVerseBars() {

        const
            verseIndex = this.props.sliderVerseIndex > 0 ?
                this.props.sliderVerseIndex :
                this.props.selectedVerseIndex,

            verseElement = this.props.getVerseElement(verseIndex)

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {

            const verseBarStatusObject = getVerseBarStatus({
                    deviceIndex: this.props.deviceIndex,
                    windowWidth: this.props.windowWidth,
                    windowHeight: this.props.windowHeight,
                    isLyricExpanded: this.props.isLyricExpanded,
                    isHeightlessLyricColumn:
                        this.props.isHeightlessLyricColumn,
                    verseElement
                }),
                {
                    isVerseBarAbove,
                    isVerseBarBelow
                } = verseBarStatusObject

            this.props.setIsVerseBarAbove(isVerseBarAbove)
            this.props.setIsVerseBarBelow(isVerseBarBelow)
        }
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
    deviceIndex,
    windowWidth,
    windowHeight,
    isLyricExpanded,
    isHeightlessLyricColumn,
    interactivatedVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex
}) => ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isLyricExpanded,
    isHeightlessLyricColumn,
    interactivatedVerseIndex,
    selectedSongIndex,
    selectedVerseIndex,
    sliderVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setInteractivatedVerseIndex,
        setIsVerseBarAbove,
        setIsVerseBarBelow
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(VerseManager)
