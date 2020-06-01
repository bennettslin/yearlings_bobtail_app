import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSliderStore } from '../../redux/slider/action'
import VerseDispatcher from '../VerseDispatcher'
import { getStartTimeForVerse } from '../../album/api/time'
import { getSceneIndexForVerse } from '../../album/api/verses'
import { getClientX, getElementRatioForClientX } from '../../helpers/dom'
import { getVerseIndexforRatio } from '../../helpers/verse'
import {
    mapSelectedSongIndex,
    mapSelectedVerseIndex,
    mapIsSelectedLogue
} from '../../redux/selected/selectors'
import {
    mapSliderLeft,
    mapSliderWidth,
    mapIsSliderMoving,
    mapIsSliderTouched,
    mapSliderVerseIndex
} from '../../redux/slider/selectors'

const mapStateToProps = state => {
    const
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedVerseIndex = mapSelectedVerseIndex(state),
        isSelectedLogue = mapIsSelectedLogue(state),
        sliderLeft = mapSliderLeft(state),
        sliderWidth = mapSliderWidth(state),
        isSliderMoving = mapIsSliderMoving(state),
        isSliderTouched = mapIsSliderTouched(state),
        sliderVerseIndex = mapSliderVerseIndex(state)

    return {
        isSliderTouched,
        isSliderMoving,
        sliderLeft,
        sliderWidth,
        sliderVerseIndex,
        isSelectedLogue,
        selectedSongIndex,
        selectedVerseIndex
    }
}

class SliderTouchDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSliderTouched: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        sliderLeft: PropTypes.number.isRequired,
        sliderWidth: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateSliderStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchTouchBegin: this.dispatchTouchBegin,
            dispatchTouchMove: this.dispatchTouchMove,
            dispatchTouchEnd: this.dispatchTouchEnd
        })
    }

    // TODO: These can easily just be a single method.
    dispatchTouchBegin = (e, sliderElement) => {
        // Can't be handled in logue.
        if (this.props.isSelectedLogue) {
            return
        }

        const clientX = getClientX(e),
            clientRect = sliderElement.getBoundingClientRect()

        if (Number.isFinite(clientX)) {
            this._touchSliderBegin(
                clientRect,
                clientX
            )
        }
    }
    _touchSliderBegin = (
        {
            left: sliderLeft,
            width: sliderWidth
        },
        clientX
    ) => {
        const { selectedSongIndex } = this.props,
            sliderRatio = getElementRatioForClientX({
                clientX,
                elementLeft: sliderLeft,
                elementWidth: sliderWidth
            }),

            sliderVerseIndex = getVerseIndexforRatio(
                selectedSongIndex,
                sliderRatio
            )

        this.props.updateSliderStore({
            isSliderTouched: true,
            sliderLeft,
            sliderWidth,
            sliderVerseIndex,
            sliderSceneIndex: getSceneIndexForVerse(
                selectedSongIndex,
                sliderVerseIndex
            ),
            sliderTime: getStartTimeForVerse(
                selectedSongIndex,
                sliderVerseIndex
            )
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

    // TODO: These can easily just be a single method.
    dispatchTouchMove = e => {
        if (this.props.isSliderTouched) {

            const clientX = getClientX(e)

            if (Number.isFinite(clientX)) {
                this._touchBodyMove(clientX)
            }
        }
    }
    _touchBodyMove = (clientX) => {
        const {
                sliderLeft,
                sliderWidth,
                sliderVerseIndex: prevVerseIndex,
                selectedSongIndex
            } = this.props,
            sliderRatio = getElementRatioForClientX({
                clientX,
                elementLeft: sliderLeft,
                elementWidth: sliderWidth
            }),

            sliderVerseIndex = getVerseIndexforRatio(
                selectedSongIndex,
                sliderRatio
            )

        // For better performance, only set in Redux upon actual change.
        if (!this.props.isSliderMoving) {
            this.props.updateSliderStore({ isSliderMoving: true })
        }
        if (sliderVerseIndex !== prevVerseIndex) {
            this.props.updateSliderStore({
                sliderVerseIndex,
                sliderSceneIndex: getSceneIndexForVerse(
                    selectedSongIndex,
                    sliderVerseIndex
                ),
                sliderTime: getStartTimeForVerse(
                    selectedSongIndex,
                    sliderVerseIndex
                )
            })
        }
    }

    dispatchTouchEnd = () => {
        if (this.props.isSliderTouched) {
            const {
                selectedVerseIndex,
                sliderVerseIndex
            } = this.props

            if (sliderVerseIndex !== selectedVerseIndex) {

                // Selected verse is wherever touch ended on slider.
                this.dispatchVerse({
                    selectedVerseIndex: sliderVerseIndex,
                    scrollLog: `Select slider verse ${sliderVerseIndex}.`
                })
            }

            // Reset slider state.
            this.props.updateSliderStore()
            return true
        }

        return false
    }

    getDispatchVerse = dispatch => {
        this.dispatchVerse = dispatch
    }

    render() {
        return (
            <VerseDispatcher {...{ ref: this.getDispatchVerse }} />
        )
    }
}

export default connect(
    mapStateToProps,
    { updateSliderStore }
)(SliderTouchDispatcher)
