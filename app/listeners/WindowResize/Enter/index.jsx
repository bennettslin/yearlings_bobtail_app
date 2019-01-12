// Singleton to listen for window resize event.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateViewportStore } from 'flux/viewport/action'
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
        updateViewportStore: PropTypes.func.isRequired,
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
                deviceWidthIndex,
                windowHeight,
                windowWidth
            } = resizeWindow(),

            isHeightlessLyric = getIsHeightlessLyric({
                deviceWidthIndex,
                windowHeight,
                windowWidth
            })

        this._updateViewportStore({
            deviceWidthIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric
        })

        this._updateResponsiveStore({
            deviceWidthIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric
        })
    }

    _updateViewportStore({
        deviceWidthIndex,
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
                deviceWidthIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyric
            }),
            {
                ceilingHeight,
                floorHeight

            } = getCeilingFloorHeight({
                deviceWidthIndex,
                windowWidth,
                windowHeight,
                stageHeight,
                stageTop,
                isHeightlessLyric
            }),
            lyricHeightRatio = getLyricHeightRatio({
                deviceWidthIndex,
                windowHeight,
                stageHeight,
                isHeightlessLyric
            })

        this.props.updateViewportStore({
            canTheatreEnter: true,
            deviceWidthIndex,
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
        deviceWidthIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyric
    }) {
        this.props.updateResponsiveStore({
            isHeightlessLyric,
            isUnrenderableCarouselNav: getIsUnrenderableCarouselNav({
                deviceWidthIndex,
                windowHeight,
                windowWidth,
                isHeightlessLyric
            }),
            isMobileWiki: getIsMobileWiki({
                deviceWidthIndex,
                windowWidth
            }),
            isScoresTipsInMain: getIsScoresTipsInMain({
                deviceWidthIndex,
                windowWidth
            }),
            isTwoRowMenu: getIsTwoRowMenu({
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
            isScoreShowable: getIsScoreShowable(deviceWidthIndex),
            isLyricExpandable: getIsLyricExpandable(deviceWidthIndex)
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
        updateViewportStore,
        updateResponsiveStore
    }
)(WindowResizeEnterDispatcher)
