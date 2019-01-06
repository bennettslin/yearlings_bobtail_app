// Singleton to listen for window resize event.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateDeviceStore } from 'flux/device/action'
import { updateResponsiveStore } from 'flux/responsive/action'

import {
    getIsHeightlessLyric,
    getIsUnrenderableCarouselNav
} from './helpers/hidden'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from './helpers/nav'
import {
    getIsLyricExpandable,
    getIsScoreShowable
} from './helpers/responsive'
import { getIsScoresTipsInMain } from './helpers/scoresTips'
import {
    getIsTwoRowMenu,
    getCeilingFloorHeight,
    getLyricHeightRatio
} from './helpers/theatre'
import { getIsMobileWiki } from './helpers/wiki'
import { resizeWindow } from './helpers/window'
import { getStageCoordinates } from './helpers/stage'

class WindowResizeEnterDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateDeviceStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchBeginEnterTransition: this.beginEnterTransitionWithNewState
        })

        // Set state based on initial window size.
        this.beginEnterTransitionWithNewState()
    }

    beginEnterTransitionWithNewState = () => {
        logTransition('Theatre can enter.')

        const {
                deviceIndex,
                windowHeight,
                windowWidth
            } = resizeWindow(),

            isHeightlessLyric = getIsHeightlessLyric({
                deviceIndex,
                windowHeight,
                windowWidth
            })

        this._updateDeviceStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric
        })

        this._updateResponsiveStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric
        })
    }

    _updateDeviceStore({
        deviceIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyric
    }) {
        const {
                stageTop,
                stageLeft,
                stageWidth,
                stageHeight

            } = getStageCoordinates({
                deviceIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyric
            }),
            {
                ceilingHeight,
                floorHeight

            } = getCeilingFloorHeight({
                deviceIndex,
                windowWidth,
                windowHeight,
                stageHeight,
                stageTop,
                isHeightlessLyric
            }),
            lyricHeightRatio = getLyricHeightRatio({
                deviceIndex,
                windowHeight,
                stageHeight,
                isHeightlessLyric
            })

        this.props.updateDeviceStore({
            canTheatreEnter: true,
            deviceIndex,
            windowWidth,
            windowHeight,
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
            ceilingHeight,
            floorHeight,
            lyricHeightRatio
        })
    }

    _updateResponsiveStore({
        deviceIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyric
    }) {
        this.props.updateResponsiveStore({
            isHeightlessLyric,
            isUnrenderableCarouselNav: getIsUnrenderableCarouselNav({
                deviceIndex,
                windowHeight,
                windowWidth,
                isHeightlessLyric
            }),
            isMobileWiki: getIsMobileWiki({
                deviceIndex,
                windowWidth
            }),
            isScoresTipsInMain: getIsScoresTipsInMain({
                deviceIndex,
                windowWidth
            }),
            isTwoRowMenu: getIsTwoRowMenu({
                deviceIndex,
                windowWidth
            }),
            showShrunkNavIcon: getShowShrunkNavIcon({
                deviceIndex,
                windowWidth
            }),
            showSingleNavBook: getShowSingleNavBook({
                deviceIndex,
                windowWidth
            }),
            isScoreShowable: getIsScoreShowable(deviceIndex),
            isLyricExpandable: getIsLyricExpandable(deviceIndex)
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    {
        updateDeviceStore,
        updateResponsiveStore
    }
)(WindowResizeEnterDispatcher)
