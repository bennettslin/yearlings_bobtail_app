// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateMountStore } from 'flux/mount/action'

import {
    getCanCarouselMount,
    getLyricHeightRatio
} from 'helpers/mount'

import {
    getHasRoomForScore,
    getHasRoomForSlider
} from './helper'

const mapStateToProps = ({
    appStore: { isHigherProcessor },
    viewportStore: {
        isDesktopWidth,
        deviceWidthIndex,
        windowHeight,
        stageHeight
    },
    responsiveStore: { isHeightlessLyric }
}) => ({
    isHigherProcessor,
    isDesktopWidth,
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    isHeightlessLyric
})

class MountListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHigherProcessor: PropTypes.bool.isRequired,
        isDesktopWidth: PropTypes.bool.isRequired,
        deviceWidthIndex: PropTypes.number.isRequired,
        windowHeight: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,
        isHeightlessLyric: PropTypes.bool.isRequired,
        updateMountStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._checkCarouselMount(prevProps)
        this._checkScoreMount(prevProps)
        this._checkSliderMount(prevProps)
    }

    _checkCarouselMount(prevProps) {
        const
            { isHigherProcessor } = this.props,
            { isHigherProcessor: wasHigherProcessor } = prevProps

        if (isHigherProcessor !== wasHigherProcessor) {
            /**
             * Mount listener updates these values upon processor change.
             * Window listener will update them on viewport size changes.
             */
            const
                {
                    deviceWidthIndex,
                    windowHeight,
                    stageHeight,
                    isHeightlessLyric
                } = this.props,
                canCarouselMount = getCanCarouselMount({
                    isHigherProcessor,
                    deviceWidthIndex,
                    windowHeight,
                    isHeightlessLyric
                }),
                lyricHeightRatio = getLyricHeightRatio({
                    canCarouselMount,
                    deviceWidthIndex,
                    windowHeight,
                    stageHeight,
                    isHeightlessLyric
                })

            this.props.updateMountStore({
                canCarouselMount,
                lyricHeightRatio
            })
        }
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

            this.props.updateMountStore({
                // To mount score, must have higher processor and room for it.
                canScoreMount: isHigherProcessor && hasRoomForScore
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
