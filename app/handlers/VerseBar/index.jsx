import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    updateVerseBarsStore,
    resetVerseBarsQueue
} from 'flux/verseBars/action'

import { getVerseBarStatus } from './helper'

class VerseBar extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedDetermineVerseBars: PropTypes.bool.isRequired,
        queuedVerseBarsTimeout: PropTypes.number.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        windowHeight: PropTypes.number.isRequired,
        isHigherProcessor: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        lyricDynamicHeightRatio: PropTypes.number.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,
        resetVerseBarsQueue: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired,
        getVerseElement: PropTypes.func.isRequired
    }

    state = {
        verseBarsTimeoutId: ''
    }

    componentDidMount() {
        // Allow wheels to dispatch directly.
        this.props.getRefs({
            dispatchVerseBarsTimeout: this.dispatchVerseBarsTimeout
        })
    }

    componentDidUpdate(prevProps) {
        this._determineVerseBarsFromDispatch(prevProps)
        this._determineVerseBarsFromSlider(prevProps)
    }

    _determineVerseBarsFromDispatch(prevProps) {
        const
            { queuedDetermineVerseBars } = this.props,
            { queuedDetermineVerseBars: didDetermineVerseBars } = prevProps

        if (queuedDetermineVerseBars && !didDetermineVerseBars) {
            const { queuedVerseBarsTimeout } = this.props
            this.dispatchVerseBarsTimeout(queuedVerseBarsTimeout)

            this.props.resetVerseBarsQueue()
        }
    }

    _determineVerseBarsFromSlider(prevProps) {
        const
            { sliderVerseIndex } = this.props,
            { sliderVerseIndex: prevVerseIndex } = prevProps

        if (
            // Determine verse bars here while we are sliding.
            sliderVerseIndex > -1 &&
            sliderVerseIndex !== prevVerseIndex
        ) {
            this._dispatchVerseBars({
                verseIndex: sliderVerseIndex
            })
        }
    }

    dispatchVerseBarsTimeout = (timeoutDuration = 10) => {
        /**
         * It seems to help to both make the call immediately, and then set a
         * timeout for it. For now, I don't think there's any performance hit.
         */
        this._dispatchVerseBars()

        clearTimeout(this.state.verseBarsTimeoutId)

        const verseBarsTimeoutId = setTimeout(
            this._dispatchVerseBars,
            timeoutDuration
        )

        this.setState({
            verseBarsTimeoutId
        })
    }

    _dispatchVerseBars = ({
        verseIndex = this.props.selectedVerseIndex
    } = {}) => {

        const {
                deviceWidthIndex,
                windowHeight,
                isHigherProcessor,
                isLyricExpanded,
                lyricDynamicHeightRatio,
                isHeightlessLyric,
                isTwoRowMenu
            } = this.props,
            verseElement = this.props.getVerseElement(verseIndex)

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {

            const verseBarStatusObject = getVerseBarStatus({
                    deviceWidthIndex,
                    windowHeight,
                    isHigherProcessor,
                    isLyricExpanded,
                    lyricDynamicHeightRatio,
                    isHeightlessLyric,
                    isTwoRowMenu,
                    verseElement
                }),
                {
                    isVerseBarAbove,
                    isVerseBarBelow
                } = verseBarStatusObject,
                {
                    isVerseBarAbove: wasVerseBarAbove,
                    isVerseBarBelow: wasVerseBarBelow
                } = this.props

            // To improve performance, only set in Redux if changed.
            if (isVerseBarAbove !== wasVerseBarAbove) {
                this.props.updateVerseBarsStore({ isVerseBarAbove })
            }
            if (isVerseBarBelow !== wasVerseBarBelow) {
                this.props.updateVerseBarsStore({ isVerseBarBelow })
            }
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    verseBarsStore: {
        queuedDetermineVerseBars,
        queuedVerseBarsTimeout
    },
    viewportStore: {
        deviceWidthIndex,
        windowHeight
    },
    mobileStore: {
        isHigherProcessor
    },
    responsiveStore: {
        isHeightlessLyric,
        isTwoRowMenu
    },
    toggleStore: { isLyricExpanded },
    viewportStore: { lyricDynamicHeightRatio },
    verseBarsStore: {
        isVerseBarAbove,
        isVerseBarBelow
    },
    selectedStore: {
        selectedVerseIndex
    },
    sliderStore: { sliderVerseIndex }
}) => ({
    queuedDetermineVerseBars,
    queuedVerseBarsTimeout,
    deviceWidthIndex,
    windowHeight,
    isHigherProcessor,
    isLyricExpanded,
    lyricDynamicHeightRatio,
    isVerseBarAbove,
    isVerseBarBelow,
    isHeightlessLyric,
    isTwoRowMenu,
    selectedVerseIndex,
    sliderVerseIndex
})

export default connect(
    mapStateToProps,
    {
        updateVerseBarsStore,
        resetVerseBarsQueue
    }
)(VerseBar)
