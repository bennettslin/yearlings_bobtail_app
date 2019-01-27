// Singleton to listen for window resize event.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateMountStore } from 'flux/mount/action'
import { updateResponsiveStore } from 'flux/responsive/action'
import { updateViewportStore } from 'flux/viewport/action'
import { updateProsceniumStore } from 'flux/viewport/proscenium/action'
import { updateStageStore } from 'flux/viewport/stage/action'
import { updateTheatreStore } from 'flux/viewport/theatre/action'

import {
    getDeviceWidthIndex,
    getWindowHeightAndWidth
} from '../helper'
import { getIsHeightlessLyric } from './helpers/hidden'
import {
    getCanCarouselMount,
    getCanScoreMount,
    getCanSliderMount,
    getLyricDynamicHeight
} from './helpers/mount'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from './helpers/nav'
import { getProsceniumCoordinates } from './helpers/proscenium'
import {
    getIsLyricExpandable,
    getIsTwoRowMenu,
    getMenuHeight,
    getIsSmallBannerText
} from './helpers/responsive'
import { getCeilingFloorHeight } from './helpers/theatre'
import { getIsMobileWiki } from './helpers/wiki'
import { getStageCoordinates } from './helpers/stage'

class WindowResizeEnterDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHigherProcessor: PropTypes.bool.isRequired,
        updateMountStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired,
        updateViewportStore: PropTypes.func.isRequired,
        updateProsceniumStore: PropTypes.func.isRequired,
        updateStageStore: PropTypes.func.isRequired,
        updateTheatreStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            setRootContainer: this.setRootContainer,
            dispatchBeginEnterTransition: this.beginEnterTransition
        })
    }

    setRootContainer = (node) => {
        this.rootElement = node

        /**
         * As soon as we have a reference to the root container, set state
         * based on initial window size.
         */
        this.beginEnterTransition()
    }

    beginEnterTransition = () => {
        logTransition('Theatre can enter.')

        const
            deviceWidthIndex = getDeviceWidthIndex(),
            {
                windowHeight,
                windowWidth
            } = getWindowHeightAndWidth(this.rootElement),

            isHeightlessLyric = getIsHeightlessLyric({
                deviceWidthIndex,
                windowHeight,
                windowWidth
            }),
            isTwoRowMenu = getIsTwoRowMenu({
                deviceWidthIndex,
                windowWidth
            }),
            menuHeight = getMenuHeight({ isTwoRowMenu })

        this._updateViewportAndMountStores({
            deviceWidthIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric,
            isTwoRowMenu,
            menuHeight
        })

        this._updateResponsiveStore({
            deviceWidthIndex,
            windowWidth,
            isHeightlessLyric,
            isTwoRowMenu,
            menuHeight
        })
    }

    _updateViewportAndMountStores({
        deviceWidthIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyric,
        isTwoRowMenu,
        menuHeight
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
                menuHeight,
                isHeightlessLyric,
                isTwoRowMenu,
                canCarouselMount
            })

        this.props.updateStageStore({
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight
        })

        this.props.updateViewportStore({
            canTheatreEnter: true,
            deviceWidthIndex,
            windowWidth,
            windowHeight
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
            lyricDynamicHeight: getLyricDynamicHeight({
                canCarouselMount,
                deviceWidthIndex,
                windowHeight,
                stageHeight,
                isHeightlessLyric,
                menuHeight
            })
        })

        this._updateProsceniumStore({
            deviceWidthIndex,
            windowHeight,
            menuHeight,
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
            isHeightlessLyric,
            isTwoRowMenu
        })
    }

    _updateProsceniumStore({
        deviceWidthIndex,
        windowHeight,
        menuHeight,
        stageTop,
        stageLeft,
        stageWidth,
        stageHeight,
        isHeightlessLyric,
        isTwoRowMenu
    }) {
        const {
                prosceniumTop,
                prosceniumLeft,
                prosceniumWidth,
                prosceniumHeight
            } = getProsceniumCoordinates({
                stageTop,
                stageLeft,
                stageWidth,
                stageHeight
            }),
            {
                ceilingHeight,
                floorHeight

            } = getCeilingFloorHeight({
                deviceWidthIndex,
                windowHeight,
                menuHeight,
                prosceniumTop,
                prosceniumHeight,
                isHeightlessLyric,
                isTwoRowMenu
            })

        this.props.updateProsceniumStore({
            prosceniumTop,
            prosceniumLeft,
            prosceniumWidth,
            prosceniumHeight
        })

        this.props.updateTheatreStore({
            ceilingHeight,
            floorHeight
        })
    }

    _updateResponsiveStore({
        deviceWidthIndex,
        windowWidth,
        isHeightlessLyric,
        isTwoRowMenu,
        menuHeight
    }) {
        this.props.updateResponsiveStore({
            isHeightlessLyric,
            isTwoRowMenu,
            menuHeight,
            isMobileWiki: getIsMobileWiki({
                deviceWidthIndex,
                windowWidth
            }),
            showShrunkNavIcon: getShowShrunkNavIcon({
                deviceWidthIndex,
                windowWidth
            }),
            showSingleNavBook: getShowSingleNavBook({
                deviceWidthIndex,
                windowWidth
            }),
            isLyricExpandable: getIsLyricExpandable(deviceWidthIndex),
            isSmallBannerText: getIsSmallBannerText(windowWidth)
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
        updateMountStore,
        updateResponsiveStore,
        updateViewportStore,
        updateProsceniumStore,
        updateStageStore,
        updateTheatreStore
    }
)(WindowResizeEnterDispatcher)
