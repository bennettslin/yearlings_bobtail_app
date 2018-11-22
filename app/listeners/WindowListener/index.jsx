// Singleton to listen for window resize event.

import { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateDeviceStore } from 'flux/device/action'
import { updateRenderableStore } from 'flux/renderable/action'
import { updateResponsiveStore } from 'flux/responsive/action'

import {
    getIsHiddenLyric,
    getIsHiddenCarouselNav
} from './helpers/hidden'
import {
    getShowShrunkNavIcon,
    getShowSingleBookColumn
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

class WindowListener extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        updateDeviceStore: PropTypes.func.isRequired,
        updateRenderableStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        // Then watch for any subsequent window resize.
        window.onresize = debounce(this._windowResize, 25)
    }

    componentDidUpdate(prevProps) {
        if (this.props.appMounted && !prevProps.appMounted) {
            this._windowResize()
        }
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

            isHiddenLyric = getIsHiddenLyric({
                deviceIndex,
                windowHeight,
                windowWidth
            })

        if (e) {
            this._prepareForWindowResizeUnrender()

        // Set to true the first time this is called, when app is mounted.
        } else {
            this._prepareForWindowResizeRender()
        }

        this._updateDeviceStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHiddenLyric
        })

        this._updateResponsiveStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHiddenLyric
        })

        return deviceIndex
    }

    _updateDeviceStore({
        deviceIndex,
        windowHeight,
        windowWidth,
        isHiddenLyric
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
                isHiddenLyric
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
                isHiddenLyric
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
        isHiddenLyric
    }) {
        this.props.updateResponsiveStore({
            isHiddenLyric,
            isHiddenCarouselNav: getIsHiddenCarouselNav({
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
            showSingleBookColumn: getShowSingleBookColumn({
                deviceIndex,
                windowWidth
            }),
            isScoreShowable: getIsScoreShowable(deviceIndex),
            isLyricExpandable: getIsLyricExpandable(deviceIndex)
        })
    }

    _prepareForWindowResizeUnrender() {
        this.props.updateRenderableStore({
            isWindowResizeRenderable: false
        })

        // Clear previous timeout.
        clearTimeout(this.state.windowResizeTimeoutId)

        /**
         * Render is synchronous, so wait a bit after resizing window before
         * rendering the most performance intensive components.
         */
        const windowResizeTimeoutId = setTimeout(
            this._prepareForWindowResizeRender, 200
        )

        this.setState({
            windowResizeTimeoutId
        })
    }

    _prepareForWindowResizeRender = () => {
        this.props.updateRenderableStore({
            isWindowResizeRenderable: true
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    appMounted,
    songStore: { selectedSongIndex }
}) => ({
    appMounted,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateDeviceStore,
        updateResponsiveStore,
        updateRenderableStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WindowListener)
