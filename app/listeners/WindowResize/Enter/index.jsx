// Singleton to listen for window resize event.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateViewportStore } from 'flux/viewport/action'
import { updateResponsiveStore } from 'flux/responsive/action'
import { updateMountStore } from 'flux/mount/action'

import {
    getCanCarouselMount,
    getCanScoreMount,
    getCanSliderMount,
    getLyricHeightRatio
} from './helpers/mount'

import { getIsHeightlessLyric } from './helpers/hidden'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from './helpers/nav'
import { getIsLyricExpandable } from './helpers/responsive'
import {
    getIsTwoRowMenu,
    getCeilingFloorHeight
} from './helpers/theatre'
import { getIsMobileWiki } from './helpers/wiki'
import { resizeWindow } from './helpers/window'
import { getStageCoordinates } from './helpers/stage'

class WindowResizeEnterDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHigherProcessor: PropTypes.bool.isRequired,
        updateViewportStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired,
        updateMountStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchBeginEnterTransition: this.beginEnterTransition
        })

        // Set state based on initial window size.
        this.beginEnterTransition()
    }

    beginEnterTransition = () => {
        logTransition('Theatre can enter.')

        const {
                deviceWidthIndex,
                windowHeight,
                windowWidth
            } = resizeWindow(),

            isHeightlessLyric = getIsHeightlessLyric({
                deviceWidthIndex,
                windowHeight,
                windowWidth
            })

        this._updateViewportAndMountStores({
            deviceWidthIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric
        })

        this._updateResponsiveStore({
            deviceWidthIndex,
            windowWidth,
            isHeightlessLyric
        })
    }

    _updateViewportAndMountStores({
        deviceWidthIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyric
    }) {
        const { isHigherProcessor } = this.props,
            canCarouselMount = getCanCarouselMount({
                isHigherProcessor,
                deviceWidthIndex,
                windowHeight,
                isHeightlessLyric
            }),
            {
                stageTop,
                stageLeft,
                stageWidth,
                stageHeight

            } = getStageCoordinates({
                deviceWidthIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyric,
                canCarouselMount
            }),
            {
                ceilingHeight,
                floorHeight

            } = getCeilingFloorHeight({
                deviceWidthIndex,
                windowHeight,
                stageHeight,
                stageTop,
                isHeightlessLyric
            })

        const rootContainerHeight = document.getElementsByClassName('RootContainer')[0].getBoundingClientRect().height

        this.props.updateViewportStore({
            canTheatreEnter: true,
            deviceWidthIndex,
            windowWidth,
            rootContainerHeight,
            windowHeight,
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
            ceilingHeight,
            floorHeight
        })

        this.props.updateMountStore({
            canCarouselMount,
            canScoreMount: getCanScoreMount({
                deviceWidthIndex,
                isHigherProcessor
            }),
            canSliderMount: getCanSliderMount({
                deviceWidthIndex,
                isHigherProcessor
            }),
            lyricHeightRatio: getLyricHeightRatio({
                canCarouselMount,
                deviceWidthIndex,
                windowHeight,
                stageHeight,
                isHeightlessLyric
            })
        })
    }

    _updateResponsiveStore({
        deviceWidthIndex,
        windowWidth,
        isHeightlessLyric
    }) {
        this.props.updateResponsiveStore({
            isHeightlessLyric,
            isMobileWiki: getIsMobileWiki({
                deviceWidthIndex,
                windowWidth
            }),
            isTwoRowMenu: getIsTwoRowMenu(deviceWidthIndex),
            showShrunkNavIcon: getShowShrunkNavIcon({
                deviceWidthIndex,
                windowWidth
            }),
            showSingleNavBook: getShowSingleNavBook({
                deviceWidthIndex,
                windowWidth
            }),
            isLyricExpandable: getIsLyricExpandable(deviceWidthIndex)
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    appStore: { isHigherProcessor }
}) => ({
    isHigherProcessor
})
export default connect(
    mapStateToProps,
    {
        updateViewportStore,
        updateResponsiveStore,
        updateMountStore
    }
)(WindowResizeEnterDispatcher)
