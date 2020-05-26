// Singleton to listen for window resize event.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateMountStore } from '../../../redux/mount/action'
import { updateResponsiveStore } from '../../../redux/responsive/action'
import { updateViewportStore } from '../../../redux/viewport/action'
import { updateProsceniumStore } from '../../../redux/proscenium/action'
import { updateStageStore } from '../../../redux/stage/action'
import { updateTheatreStore } from '../../../redux/theatre/action'
import {
    getDeviceWidthIndex,
    getWindowDimensions
} from '../../../helpers/resize/device'
import { getIsHeightlessLyric } from '../../../helpers/resize/hidden'
import {
    getCanCarouselMount,
    getCanScoreMount,
    getCanSliderMount
} from '../../../helpers/resize/mount'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from '../../../helpers/resize/nav'
import { getProsceniumDimensionCoordinates } from '../../../helpers/resize/proscenium'
import {
    getIsLyricExpandable,
    getIsTwoRowMenu,
    getMenuHeight,
    getIsSmallBannerText
} from '../../../helpers/resize/responsive'
import { getCeilingFloorHeight } from '../../../helpers/resize/theatre'
import { getStageDimensionCoordinates } from '../../../helpers/resize/stage'

class ResizeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateEntranceStore: PropTypes.func.isRequired,
        updateMountStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired,
        updateViewportStore: PropTypes.func.isRequired,
        updateProsceniumStore: PropTypes.func.isRequired,
        updateStageStore: PropTypes.func.isRequired,
        updateTheatreStore: PropTypes.func.isRequired,

        // From parent.
        getRootElement: PropTypes.func.isRequired,
        getBeginEnterTransition: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBeginEnterTransition(
            this.beginEnterTransition
        )

        /**
         * As soon as we have a reference to the root container, begin
         * showing theatre.
         */
        logTransition('Theatre can enter.')
        this.props.updateEntranceStore({
            canTheatreEnter: true
        })
    }

    beginEnterTransition = () => {
        const
            { getRootElement } = this.props,
            {
                windowHeight,
                windowWidth
            } = getWindowDimensions(getRootElement()),
            deviceWidthIndex = getDeviceWidthIndex(windowWidth),

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
        const
            canCarouselMount = getCanCarouselMount({
                deviceWidthIndex,
                windowHeight,
                isHeightlessLyric
            }),
            {
                stageTop,
                stageLeft,
                stageWidth,
                stageHeight

            } = getStageDimensionCoordinates({
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
            deviceWidthIndex,
            windowWidth,
            windowHeight
        })

        this.props.updateMountStore({
            canCarouselMount,
            canScoreMount: getCanScoreMount(deviceWidthIndex),
            canSliderMount: getCanSliderMount(deviceWidthIndex)
        })

        this._updateProsceniumTheatreStore({
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

        logTransition('Theatre can enter.')
        this.props.updateEntranceStore({
            canTheatreEnter: true
        })
    }

    _updateProsceniumTheatreStore({
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
            } = getProsceniumDimensionCoordinates({
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

export default connect(
    null,
    {
        updateEntranceStore,
        updateMountStore,
        updateResponsiveStore,
        updateViewportStore,
        updateProsceniumStore,
        updateStageStore,
        updateTheatreStore
    }
)(ResizeDispatcher)
