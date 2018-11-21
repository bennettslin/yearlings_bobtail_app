import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import debounce from 'debounce'

import { updateDeviceStore } from 'flux/actions/device'
import { updateRenderableStore } from 'flux/actions/renderable'
import { updateResponsiveStore } from 'flux/actions/responsive'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    getShowOneOfTwoLyricColumns,
    getIsLyricExpandable,
    getIsTwoRowMenu
} from 'helpers/responsiveHelper'
import {
    getIsHeightlessLyricColumn,
    getIsHiddenCarouselNav
} from './helpers/hidden'
import {
    getShowShrunkNavIcon,
    getShowSingleBookColumn
} from './helpers/nav'
import { getIsScoreShowable } from './helpers/responsive'
import { getIsScoresTipsInMain } from './helpers/scoresTips'
import { getIsMobileWiki } from './helpers/wiki'
import { resizeWindow } from './helpers/window'
import { getStageCoordinates } from './helpers/stage'

class WindowManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        showOneOfTwoLyricColumns: PropTypes.bool.isRequired,

        updateDeviceStore: PropTypes.func.isRequired,
        updateRenderableStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired,

        // From parent.
        deselectAnnotation: PropTypes.func.isRequired,
        selectLyricExpand: PropTypes.func.isRequired
    }

    state = {
        windowResizeTimeoutId: ''
    }

    componentDidMount() {
        // Then watch for any subsequent window resize.
        window.onresize = debounce(this._windowResize, 25)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextProps: nextState
        })
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

            isHeightlessLyricColumn = getIsHeightlessLyricColumn({
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

        /**
         * Deselect selected annotation if not in new shown column. Do it here,
         * before we tell Redux to update the prop.
         */
        if (
            showOneOfTwoLyricColumns &&
            !this.props.showOneOfTwoLyricColumns
        ) {
            this.props.deselectAnnotation({
                deviceIndex
            })
        }

        this._updateDeviceStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyricColumn
        })

        this._updateResponsiveStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyricColumn,
            showOneOfTwoLyricColumns
        })

        /**
         * Force collapse of lyric in state if not expandable, or if heightless
         * lyric.
         */
        // if (
        //     !isLyricExpandable ||
        //     isHeightlessLyricColumn
        // ) {
        //     this.props.selectLyricExpand(false)
        // }

        return deviceIndex
    }

    _updateDeviceStore({
        deviceIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyricColumn
    }) {
        this.props.updateDeviceStore({
            deviceIndex,
            windowWidth,
            windowHeight,
            stageCoordinates: getStageCoordinates({
                deviceIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyricColumn
            })
        })
    }

    _updateResponsiveStore({
        deviceIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyricColumn,
        showOneOfTwoLyricColumns
    }) {
        this.props.updateResponsiveStore({
            isHeightlessLyricColumn,
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
    songStore: { selectedSongIndex },
    responsiveStore: { showOneOfTwoLyricColumns }
}) => ({
    appMounted,
    selectedSongIndex,
    showOneOfTwoLyricColumns
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateDeviceStore,
        updateResponsiveStore,
        updateRenderableStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WindowManager)
