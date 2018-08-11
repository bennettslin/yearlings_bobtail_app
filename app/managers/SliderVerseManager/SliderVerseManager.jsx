import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSliderStore } from 'flux/actions/slider'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import {
    getSliderRatioForClientX,
    getVerseIndexforRatio
} from './sliderVerseManagerHelper'

class SliderVerseManager extends Component {

    static propTypes = {
        // Through Redux.
        isSliderTouched: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderLeft: PropTypes.number.isRequired,
        sliderWidth: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        updateSliderStore: PropTypes.func.isRequired,

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

        this.props.updateSliderStore({
            isSliderTouched: true,
            sliderLeft,
            sliderRatio,
            sliderWidth,
            sliderVerseIndex
        })

        /**
         * If the move doesn't happen for a while, we recognise that it is
         * moving anyway for styling purposes.
         */
        setTimeout(() => {
            if (this.props.isSliderTouched && !this.props.isSliderMoving) {
                this.props.updateSliderStore({
                    isSliderMoving: true
                })
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

            this.props.updateSliderStore({
                isSliderMoving: true,
                sliderRatio,
                sliderVerseIndex
            })

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
            this.props.updateSliderStore()
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    sliderStore: {
        isSliderTouched,
        isSliderMoving,
        sliderLeft,
        sliderWidth,
        sliderVerseIndex
    },
    selectedStore: { selectedSongIndex }
}) => ({
    isSliderTouched,
    isSliderMoving,
    sliderLeft,
    sliderWidth,
    sliderVerseIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSliderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SliderVerseManager)
