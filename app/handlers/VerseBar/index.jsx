import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    updateVerseBarsStore,
    resetVerseBarsQueue
} from '../../redux/verseBars/action'
import { ACTIVATED_VERSE_INDEX_SELECTOR } from '../../redux/activated/selectors'
import {
    CAN_SLIDER_MOUNT_SELECTOR,
    LYRIC_DYNAMIC_HEIGHT_SELECTOR
} from '../../redux/mount/selectors'
import {
    IS_HEIGHTLESS_LYRIC_SELECTOR,
    MENU_HEIGHT_SELECTOR,
    IS_LYRIC_EXPANDABLE_SELECTOR
} from '../../redux/responsive/selectors'

import { getVerseBarStatus } from './helper'
import { getCursorIndex } from '../../helpers/verse'

const mapStateToProps = state => {
    const {
            verseBarsStore: {
                queuedDetermineVerseBars,
                queuedVerseBarsTimeout
            },
            viewportStore: {
                isDesktopWidth,
                windowHeight
            },
            toggleStore: { isLyricExpanded },
            verseBarsStore: {
                isVerseBarAbove,
                isVerseBarBelow
            },
            selectedStore: { selectedVerseIndex },
            sliderStore: { sliderVerseIndex }
        } = state,
        activatedVerseIndex = ACTIVATED_VERSE_INDEX_SELECTOR(state),
        isLyricExpandable = IS_LYRIC_EXPANDABLE_SELECTOR(state),
        canSliderMount = CAN_SLIDER_MOUNT_SELECTOR(state),
        lyricDynamicHeight = LYRIC_DYNAMIC_HEIGHT_SELECTOR(state),
        isHeightlessLyric = IS_HEIGHTLESS_LYRIC_SELECTOR(state),
        menuHeight = MENU_HEIGHT_SELECTOR(state)

    return {
        queuedDetermineVerseBars,
        queuedVerseBarsTimeout,
        isLyricExpandable,
        isDesktopWidth,
        windowHeight,
        canSliderMount,
        isLyricExpanded,
        lyricDynamicHeight,
        isVerseBarAbove,
        isVerseBarBelow,
        isHeightlessLyric,
        menuHeight,
        selectedVerseIndex,
        activatedVerseIndex,
        sliderVerseIndex
    }
}

class VerseBarHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedDetermineVerseBars: PropTypes.bool.isRequired,
        queuedVerseBarsTimeout: PropTypes.number.isRequired,
        isLyricExpandable: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        windowHeight: PropTypes.number.isRequired,
        canSliderMount: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        lyricDynamicHeight: PropTypes.number.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        menuHeight: PropTypes.number.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,
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
        this._determineVerseBarsFromActivatedVerse(prevProps)
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
            this._dispatchVerseBars({ sliderVerseIndex })
        }
    }

    _determineVerseBarsFromActivatedVerse(prevProps) {
        /**
         * This is needed because a verse might get activated or deactivated,
         * while the selected verse needs to be shown in a verse bar.
         */

        const
            { activatedVerseIndex } = this.props,
            { activatedVerseIndex: prevVerseIndex } = prevProps

        if (
            activatedVerseIndex !== prevVerseIndex
        ) {
            this._dispatchVerseBars({ activatedVerseIndex })
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

    _dispatchVerseBars = ({ sliderVerseIndex = -1 } = {}) => {
        const {
                isLyricExpandable,
                canSliderMount,
                isDesktopWidth,
                windowHeight,
                isLyricExpanded,
                lyricDynamicHeight,
                isHeightlessLyric,
                selectedVerseIndex,
                activatedVerseIndex,
                menuHeight
            } = this.props,

            verseElement = this.props.getVerseElement(getCursorIndex(
                sliderVerseIndex,
                activatedVerseIndex,
                selectedVerseIndex
            ))

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {

            const verseBarStatusObject = getVerseBarStatus({
                    isLyricExpandable,
                    canSliderMount,
                    isDesktopWidth,
                    windowHeight,
                    isLyricExpanded,
                    lyricDynamicHeight,
                    isHeightlessLyric,
                    menuHeight,
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

export default connect(
    mapStateToProps,
    {
        updateVerseBarsStore,
        resetVerseBarsQueue
    }
)(VerseBarHandler)
