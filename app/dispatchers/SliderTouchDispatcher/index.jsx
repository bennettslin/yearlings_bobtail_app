import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSliderStore } from 'flux/slider/action'

import VerseDispatcher from '../VerseDispatcher'

import { getTimeForVerseIndex } from 'helpers/data'
import { getClientX } from 'helpers/dom'

import {
    getSliderRatioForClientX,
    getVerseIndexforRatio
} from './helper'

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
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchTouchBegin = this.dispatchTouchBegin
        this.props.parentThis.dispatchTouchMove = this.dispatchTouchMove
        this.props.parentThis.dispatchTouchEnd = this.dispatchTouchEnd
    }

    // TODO: These can easily just be a single method.
    dispatchTouchBegin = (e, sliderElement) => {
        // Can't be handled in logue.
        if (this.props.isSelectedLogue) {
            return
        }

        const clientX = getClientX(e),
            clientRect = sliderElement.getBoundingClientRect()

        if (!isNaN(clientX)) {
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
            sliderRatio = getSliderRatioForClientX(
                clientX,
                sliderLeft,
                sliderWidth
            ),

            sliderVerseIndex = getVerseIndexforRatio(
                selectedSongIndex,
                sliderRatio,
                sliderWidth
            )

        this.props.updateSliderStore({
            isSliderTouched: true,
            sliderLeft,
            sliderWidth,
            sliderVerseIndex,
            sliderTime: getTimeForVerseIndex(
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
    dispatchTouchMove = (e) => {
        if (this.props.isSliderTouched) {

            const clientX = getClientX(e)

            if (!isNaN(clientX)) {
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
            sliderRatio = getSliderRatioForClientX(
                clientX, sliderLeft, sliderWidth
            ),

            sliderVerseIndex = getVerseIndexforRatio(
                selectedSongIndex,
                sliderRatio,
                sliderWidth
            )

        // For better performance, only set in Redux upon actual change.
        if (!this.props.isSliderMoving) {
            this.props.updateSliderStore({ isSliderMoving: true })
        }
        if (sliderVerseIndex !== prevVerseIndex) {
            this.props.updateSliderStore({
                sliderVerseIndex,
                sliderTime: getTimeForVerseIndex(
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
                    scrollLog: 'Slider selected verse.'
                })
            }

            // Reset slider state.
            this.props.updateSliderStore()
            return true
        }

        return false
    }

    render() {
        return (
            <VerseDispatcher {...{ parentThis: this }} />
        )
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
    songStore: {
        isSelectedLogue,
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    isSliderTouched,
    isSliderMoving,
    sliderLeft,
    sliderWidth,
    sliderVerseIndex,
    isSelectedLogue,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSliderStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(SliderTouchDispatcher)
