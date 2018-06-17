import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    setIsSliderMoving,
    setIsSliderTouched,
    setSliderLeft,
    setSliderRatio,
    setSliderWidth,
    setSliderVerseIndex
} from '../redux/actions/slider'

import { VERSE_SCROLL } from '../constants/dom'
import { getSongVerseTimes } from '../helpers/dataHelper'
import { scrollElementIntoView } from '../helpers/domHelper'
import {
    getSliderRatioForClientX,
    getVerseIndexforRatio
} from '../helpers/logicHelper'

class SliderManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderLeft: PropTypes.number.isRequired,
        sliderWidth: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        selectedVerseElement: PropTypes.object,
        sliderVerseElement: PropTypes.object,

        setIsSliderMoving: PropTypes.func.isRequired,
        setIsSliderTouched: PropTypes.func.isRequired,
        setSliderLeft: PropTypes.func.isRequired,
        setSliderRatio: PropTypes.func.isRequired,
        setSliderWidth: PropTypes.func.isRequired,
        setSliderVerseIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        selectOrSlideVerseElement: PropTypes.func.isRequired,
        selectTime: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    touchSliderBegin({ clientRect, clientX }) {

        const sliderLeft = clientRect.left,
            sliderWidth = clientRect.width,
            sliderRatio = getSliderRatioForClientX(clientX, sliderLeft, sliderWidth),

            sliderVerseIndex = getVerseIndexforRatio(
                this.props.selectedSongIndex,
                sliderRatio,
                sliderWidth
            )

        this.props.setIsSliderTouched(true)
        this.props.setSliderLeft(sliderLeft)
        this.props.setSliderRatio(sliderRatio)
        this.props.setSliderWidth(sliderWidth)
        this.props.setSliderVerseIndex(sliderVerseIndex)

        /**
         * If the move doesn't happen for a while, we recognise that it is
         * moving anyway for styling purposes.
         */
        setTimeout(() => {
            if (this.props.isSliderTouched && !this.props.isSliderMoving) {
                this.props.setIsSliderMoving(true)
            }
        }, 125)
    }

    touchBodyMove(clientX) {

        if (this.props.isSliderTouched) {
            const { sliderLeft,
                    sliderWidth } = this.props,
                sliderRatio = getSliderRatioForClientX(clientX, sliderLeft, sliderWidth),

                sliderVerseIndex = getVerseIndexforRatio(
                    this.props.selectedSongIndex,
                    sliderRatio,
                    sliderWidth
                )

            this.props.setSliderRatio(sliderRatio)
            this.props.setSliderVerseIndex(sliderVerseIndex)
            this.props.setIsSliderMoving(true)
        }
    }

    touchBodyEnd() {

        if (this.props.isSliderTouched) {

            // Selected verse is wherever touch ended on slider.
            const selectedVerseIndex = this.props.sliderVerseIndex,

                // We will start at the beginning of the selected verse.
                songVerseTimes =
                    getSongVerseTimes(this.props.selectedSongIndex),
                selectedTimePlayed = songVerseTimes[selectedVerseIndex]

            this.props.selectTime(selectedTimePlayed)

            // Reset slider state.
            this.props.setIsSliderMoving(false)
            this.props.setIsSliderTouched(false)
            this.props.setSliderLeft(0)
            this.props.setSliderRatio(0)
            this.props.setSliderWidth(0)
            this.props.setSliderVerseIndex(-1)

            this.props.selectOrSlideVerseElement({
                /**
                 * If slider was moved, there will be a slider verse element.
                 * If it was just tapped, there won't be, so fall back to the
                 * selected verse element.
                 */
                verseElement: this.props.sliderVerseElement ||
                    this.props.selectedVerseElement,

                isTouchBodyEnd: true
            })

            // Scroll to verse index, then reset verse bars.
            scrollElementIntoView({
                scrollClass: VERSE_SCROLL,
                index: selectedVerseIndex,
                deviceIndex: this.props.deviceIndex,
                windowWidth: this.props.windowWidth,
                isLyricExpanded: this.props.isLyricExpanded
            })
            this.props.resetVerseBars()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    deviceIndex,
    windowWidth,
    isLyricExpanded,
    isSliderTouched,
    isSliderMoving,
    sliderLeft,
    sliderWidth,
    selectedSongIndex,
    sliderVerseIndex,
    selectedVerseElement,
    sliderVerseElement
}) => ({
    deviceIndex,
    windowWidth,
    isLyricExpanded,
    isSliderTouched,
    isSliderMoving,
    sliderLeft,
    sliderWidth,
    selectedSongIndex,
    sliderVerseIndex,
    selectedVerseElement,
    sliderVerseElement
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsSliderMoving,
        setIsSliderTouched,
        setSliderLeft,
        setSliderRatio,
        setSliderWidth,
        setSliderVerseIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SliderManager)
