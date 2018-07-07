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

import { getPropsAreShallowEqual } from '../helpers/generalHelper'
import {
    getSliderRatioForClientX,
    getVerseIndexforRatio
} from '../helpers/logicHelper'

class SliderVerseManager extends Component {

    static propTypes = {
        // Through Redux.
        isSliderTouched: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderLeft: PropTypes.number.isRequired,
        sliderWidth: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,

        setIsSliderMoving: PropTypes.func.isRequired,
        setIsSliderTouched: PropTypes.func.isRequired,
        setSliderLeft: PropTypes.func.isRequired,
        setSliderRatio: PropTypes.func.isRequired,
        setSliderWidth: PropTypes.func.isRequired,
        setSliderVerseIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        selectVerse: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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

            // Verse bars are determined by verse manager to avoid timeout.
        }
    }

    touchBodyEnd() {

        if (this.props.isSliderTouched) {

            // Selected verse is wherever touch ended on slider.
            this.props.selectVerse({
                selectedVerseIndex: this.props.sliderVerseIndex,
                scrollLog: 'Slider touch body end.'
            })

            // Verse bars always get reset.
            this.props.resetVerseBars()

            // Reset slider state.
            this.props.setIsSliderMoving(false)
            this.props.setIsSliderTouched(false)
            this.props.setSliderLeft(0)
            this.props.setSliderRatio(0)
            this.props.setSliderWidth(0)
            this.props.setSliderVerseIndex(-1)
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    isSliderTouched,
    isSliderMoving,
    sliderLeft,
    sliderWidth,
    selectedSongIndex,
    sliderVerseIndex
}) => ({
    isSliderTouched,
    isSliderMoving,
    sliderLeft,
    sliderWidth,
    selectedSongIndex,
    sliderVerseIndex
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

export default connect(mapStateToProps, bindDispatchToProps)(SliderVerseManager)
