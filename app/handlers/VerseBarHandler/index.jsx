import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'
import { resetVerseBarsQueue } from 'flux/verseBars/action'

import { getVerseBarStatus } from './helper'

class VerseBarHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        queuedDetermineVerseBars: PropTypes.bool.isRequired,
        queuedVerseBarsTimeout: PropTypes.number.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        windowHeight: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,
        resetVerseBarsQueue: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired,
        getVerseElement: PropTypes.func.isRequired
    }

    state = {
        verseBarsTimeoutId: ''
    }

    componentDidMount() {
        // Allow wheels to dispatch directly.
        this.props.parentThis.dispatchVerseBarsTimeout = this.dispatchVerseBarsTimeout
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

        const verseElement = this.props.getVerseElement(verseIndex)

        // Check for verse element in case we are loading from a logue.
        if (verseElement) {

            const verseBarStatusObject = getVerseBarStatus({
                    deviceIndex: this.props.deviceIndex,
                    windowHeight: this.props.windowHeight,
                    isLyricExpanded: this.props.isLyricExpanded,
                    isHiddenLyric: this.props.isHiddenLyric,
                    isTwoRowMenu: this.props.isTwoRowMenu,
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

            // To improve performance, only set in Redux if needed.
            if (isVerseBarAbove !== wasVerseBarAbove) {
                this.props.updateToggleStore({ isVerseBarAbove })
            }
            if (isVerseBarBelow !== wasVerseBarBelow) {
                this.props.updateToggleStore({ isVerseBarBelow })
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
    deviceStore: {
        deviceIndex,
        windowHeight
    },
    responsiveStore: {
        isHiddenLyric,
        isTwoRowMenu
    },
    toggleStore: {
        isLyricExpanded,
        isVerseBarAbove,
        isVerseBarBelow
    },
    songStore: {
        selectedVerseIndex
    },
    sliderStore: { sliderVerseIndex }
}) => ({
    queuedDetermineVerseBars,
    queuedVerseBarsTimeout,
    deviceIndex,
    windowHeight,
    isLyricExpanded,
    isVerseBarAbove,
    isVerseBarBelow,
    isHiddenLyric,
    isTwoRowMenu,
    selectedVerseIndex,
    sliderVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateToggleStore,
        resetVerseBarsQueue
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(VerseBarHandler)
