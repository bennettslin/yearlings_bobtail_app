import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSessionStore } from 'flux/session/action'
import { updateToggleStore } from 'flux/toggle/action'

import { getVerseBarStatus } from './helper'

class VerseBarManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        windowHeight: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isHiddenLyric: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

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

    componentDidUpdate(prevProps) {
        this._determineVerseBarsFromSlider(prevProps)
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
            this.dispatchVerseBars({
                verseIndex: sliderVerseIndex,
                calledFromTimeout: false
            })
        }
    }

    dispatchVerseBarsTimeout(timeoutDuration = 10) {
        /**
         * It seems to help to both make the call immediately, and then set a
         * timeout for it. For now, I don't think there's any performance hit.
         */
        this.dispatchVerseBars({
            calledFromTimeout: false
        })

        clearTimeout(this.state.verseBarsTimeoutId)

        const verseBarsTimeoutId = setTimeout(
            this.dispatchVerseBars,
            timeoutDuration
        )

        this.setState({
            verseBarsTimeoutId
        })
    }

    dispatchVerseBars = ({
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
                    windowHeight: this.props.windowHeight,
                    isLyricExpanded: this.props.isLyricExpanded,
                    isHiddenLyric: this.props.isHiddenLyric,
                    isTwoRowMenu: this.props.isTwoRowMenu,
                    verseElement
                }),
                {
                    isVerseBarAbove,
                    isVerseBarBelow
                } = verseBarStatusObject

            this.props.updateToggleStore({
                isVerseBarAbove,
                isVerseBarBelow
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceStore: {
        deviceIndex,
        windowHeight
    },
    responsiveStore: {
        isHiddenLyric,
        isTwoRowMenu
    },
    toggleStore: { isLyricExpanded },
    songStore: {
        selectedVerseIndex
    },
    sliderStore: { sliderVerseIndex }
}) => ({
    deviceIndex,
    windowHeight,
    isLyricExpanded,
    isHiddenLyric,
    isTwoRowMenu,
    selectedVerseIndex,
    sliderVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(VerseBarManager)
