// Singleton to listen for window resize event.

import { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'debounce'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateDeviceStore } from 'flux/actions/device'
import { updateRenderableStore } from 'flux/actions/renderable'
import { updateResponsiveStore } from 'flux/actions/responsive'

import {
    getShowOneOfTwoLyricColumns
} from 'helpers/responsiveHelper'
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
        const { selectedSongIndex } = this.props,
            {
                deviceIndex,
                windowHeight,
                windowWidth
            } = resizeWindow(e ? e.target : undefined),

            isHiddenLyric = getIsHiddenLyric({
                deviceIndex,
                windowHeight,
                windowWidth
            }),
            showOneOfTwoLyricColumns = getShowOneOfTwoLyricColumns(
                selectedSongIndex,
                deviceIndex
            )

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
            isHiddenLyric,
            showOneOfTwoLyricColumns
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
        isHiddenLyric,
        showOneOfTwoLyricColumns
    }) {
        this.props.updateResponsiveStore({
            isHiddenLyric,
            showOneOfTwoLyricColumns,
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
