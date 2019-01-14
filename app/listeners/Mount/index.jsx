// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateMountStore } from 'flux/mount/action'

import {
    getHasRoomForScore,
    getHasRoomForSlider
} from './helper'

const mapStateToProps = ({
    mobileStore: { isHigherProcessor },
    viewportStore: {
        isDesktopWidth,
        deviceWidthIndex
    }
}) => ({
    isHigherProcessor,
    isDesktopWidth,
    deviceWidthIndex
})

class MountListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHigherProcessor: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        updateMountStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkScoreMount(prevProps)
        this._checkSliderMount(prevProps)
    }

    _checkScoreMount(prevProps) {
        const
            {
                isHigherProcessor,
                deviceWidthIndex
            } = this.props,
            {
                isHigherProcessor: wasHigherProcessor,
                deviceWidthIndex: prevWidthIndex
            } = prevProps

        if (
            isHigherProcessor !== wasHigherProcessor ||
            deviceWidthIndex !== prevWidthIndex
        ) {
            const hasRoomForScore = getHasRoomForScore(deviceWidthIndex)

            // To mount score, must have higher processor and room for it.
            this.props.updateMountStore({
                canScoreMount: isHigherProcessor && hasRoomForScore,

                /**
                 * This assumes that the criteria for mounting carousel and
                 * score are the same. This may change, but let's cross that
                 * bridge when we get there.
                 */
                canCarouselMount: isHigherProcessor && hasRoomForScore
            })
        }
    }

    _checkSliderMount(prevProps) {
        const
            {
                isHigherProcessor,
                isDesktopWidth
            } = this.props,
            {
                isHigherProcessor: wasHigherProcessor,
                isDesktopWidth: prevDesktopWidth
            } = prevProps

        if (
            isHigherProcessor !== wasHigherProcessor ||
            isDesktopWidth !== prevDesktopWidth
        ) {
            const hasRoomForSlider = getHasRoomForSlider(isDesktopWidth)

            // To mount slider, must have higher processor and room for it.
            this.props.updateMountStore({
                canSliderMount: isHigherProcessor && hasRoomForSlider
            })
        }
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    { updateMountStore }
)(MountListener)
