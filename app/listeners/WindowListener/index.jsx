// Singleton to listen for window resize event.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'
import { updateDeviceStore } from 'flux/device/action'
import { updateResponsiveStore } from 'flux/responsive/action'

import RenderableDispatcher from '../../handlers/RenderableHandler/Dispatcher'

import { populateRefs } from 'helpers/ref'
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
    getCeilingFloorHeight
} from './helpers/theatre'
import { getIsMobileWiki } from './helpers/wiki'
import { resizeWindow } from './helpers/window'
import { getStageCoordinates } from './helpers/stage'

class WindowListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateDeviceStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        // Set store values based on window size.
        this._windowResize()

        // Then watch for any subsequent window resize.
        window.onresize = debounce(this._windowResize, 100)
    }

    componentWillUnmount() {
        window.onresize = null
    }

    _windowResize = (e) => {
        const {
                deviceIndex,
                windowHeight,
                windowWidth
            } = resizeWindow(e ? e.target : undefined),

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

        this.dispatchWindowResizeUnrenderable()
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
            })

        this.props.updateDeviceStore({
            deviceIndex,
            windowWidth,
            windowHeight,
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
            ceilingHeight,
            floorHeight
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
                windowWidth
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

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <RenderableDispatcher {...{ getRefs: this._getRefs }} />
        )
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    {
        updateDeviceStore,
        updateResponsiveStore
    }
)(WindowListener)
