import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    setInteractivatedVerseIndex,
    setIsVerseBarAbove,
    setIsVerseBarBelow
} from 'flux/actions/session'

import { getSongVersesCount } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getVerseBarStatus } from './helper'

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

    state = {
        verseBarsTimeoutId: ''
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextProps: nextState
        })
    }

    componentDidUpdate(prevProps) {
        const {
            selectedSongIndex,
            sliderVerseIndex
        } = this.props


        if (selectedSongIndex !== prevProps.selectedSongIndex) {
            // Reset interactivated verse.
            this.interactivateVerse()

            // Reset verse bars.
            this.resetVerseBars()
        }

        if (
            // Determine verse bars here while we are sliding.
            sliderVerseIndex > -1 &&
            sliderVerseIndex !== prevProps.sliderVerseIndex
        ) {
            this._determineVerseBars({
                verseIndex: sliderVerseIndex,
                calledFromTimeout: false
            })
        }
    }

    interactivateVerse(interactivatedVerseIndex = -1) {
        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)
    }

    interactivateVerseDirection(direction) {
        const {
                selectedSongIndex,
                selectedVerseIndex
            } = this.props,
            songVersesCount = getSongVersesCount(selectedSongIndex)

        let {
            interactivatedVerseIndex
        } = this.props

        // Ensure modulo.
        if (direction === -1) {
            direction = songVersesCount - 1
        }

        // We are turning on interactivation, so start from selected verse.
        if (interactivatedVerseIndex === -1) {
            interactivatedVerseIndex = (this.props.selectedVerseIndex + direction) % songVersesCount

        // We already have an interactivated verse.
        } else {
            interactivatedVerseIndex = (interactivatedVerseIndex + direction) % songVersesCount
        }

        // If we're returning to the selected verse, turn off interactivation.
        if (interactivatedVerseIndex === selectedVerseIndex) {
            interactivatedVerseIndex = -1
        }

        this.props.setInteractivatedVerseIndex(interactivatedVerseIndex)

        return interactivatedVerseIndex
    }

    determineVerseBars(timeoutDuration = 10) {
        /**
         * It seems to help to both make the call immediately, and then set a
         * timeout for it. For now, I don't think there's any performance hit.
         */
        this._determineVerseBars({
            calledFromTimeout: false
        })

        clearTimeout(this.state.verseBarsTimeoutId)

        const verseBarsTimeoutId = setTimeout(
            this._determineVerseBars,
            timeoutDuration
        )

        this.setState({
            verseBarsTimeoutId
        })
    }

    _determineVerseBars = ({
        calledFromTimeout = true,
        verseIndex = this.props.selectedVerseIndex
    } = {}) => {

        if (calledFromTimeout) {
            logger.warn('Determining verse bars after timeout.')
        }

        const verseElement = this.props.getVerseElement(verseIndex)

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
    deviceStore: {
        deviceIndex,
        windowWidth,
        windowHeight
    },
    isLyricExpanded,
    interactivatedVerseIndex,
    responsiveStore: { isHeightlessLyricColumn },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex
    },
    sliderStore: { sliderVerseIndex }
}) => ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isLyricExpanded,
    interactivatedVerseIndex,
    isHeightlessLyricColumn,
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
