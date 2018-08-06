import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import debounce from 'debounce'

import { setIsWindowResizeRenderable } from '../redux/actions/render'

import { updateDeviceStore } from '../redux/actions/device'

import {
    setIsHeightlessLyricColumn,
    setIsHiddenCarouselNav,
    setIsMobileWiki,
    setIsScoresTipsInMain,
    setIsTwoRowMenu,
    setShowOneOfTwoLyricColumns,
    setShowShrunkNavIcon,
    setShowSingleBookColumn
} from '../redux/actions/responsive'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

import {
    resizeWindow,
    getShowOneOfTwoLyricColumns,
    getIsHeightlessLyricColumn,
    getIsHiddenCarouselNav,
    getIsLyricExpandable,
    getIsMobileWiki,
    getIsScoreExpandable,
    getShowSingleBookColumn,
    getShowShrunkNavIcon,
    getIsScoresTipsInMain,
    getIsTwoRowMenu
} from 'helpers/responsiveHelper'
import { getStageCoordinates } from 'helpers/stageHelper'

class WindowManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        showOneOfTwoLyricColumns: PropTypes.bool.isRequired,

        updateDeviceStore: PropTypes.func.isRequired,
        setIsTwoRowMenu: PropTypes.func.isRequired,
        setIsScoresTipsInMain: PropTypes.func.isRequired,
        setIsHeightlessLyricColumn: PropTypes.func.isRequired,
        setShowOneOfTwoLyricColumns: PropTypes.func.isRequired,
        setIsHiddenCarouselNav: PropTypes.func.isRequired,
        setShowSingleBookColumn: PropTypes.func.isRequired,
        setShowShrunkNavIcon: PropTypes.func.isRequired,
        setIsMobileWiki: PropTypes.func.isRequired,

        // From parent.
        deselectAnnotation: PropTypes.func.isRequired,
        selectLyricExpand: PropTypes.func.isRequired,
        selectScore: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            windowResizeTimeoutId: ''
        }

        this._windowResize = this._windowResize.bind(this)

        this._prepareForWindowResizeRender =
            this._prepareForWindowResizeRender.bind(this)
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

    _windowResize(e) {
        const { selectedSongIndex } = this.props,
            { deviceIndex,
              windowHeight,
              windowWidth } = resizeWindow(e ? e.target : undefined),

            isLyricExpandable = getIsLyricExpandable(deviceIndex),
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
        if (showOneOfTwoLyricColumns && !this.props.showOneOfTwoLyricColumns) {
            this.props.deselectAnnotation({
                deviceIndex
            })
        }

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

        this.props.setIsHeightlessLyricColumn(isHeightlessLyricColumn)
        this.props.setShowOneOfTwoLyricColumns(showOneOfTwoLyricColumns)

        this.props.setIsHiddenCarouselNav(getIsHiddenCarouselNav({
            deviceIndex,
            windowHeight,
            windowWidth
        }))
        this.props.setIsMobileWiki(getIsMobileWiki({
            deviceIndex,
            windowWidth
        }))
        this.props.setIsScoresTipsInMain(getIsScoresTipsInMain({
            deviceIndex,
            windowWidth
        }))
        this.props.setIsTwoRowMenu(getIsTwoRowMenu({
            deviceIndex,
            windowWidth
        }))
        this.props.setShowSingleBookColumn(getShowSingleBookColumn({
            deviceIndex,
            windowWidth
        }))
        this.props.setShowShrunkNavIcon(getShowShrunkNavIcon({
            deviceIndex,
            windowWidth
        }))

        /**
         * Force collapse of lyric in state if not expandable, or if heightless
         * lyric.
         */
         if (!isLyricExpandable || isHeightlessLyricColumn) {
             this.props.selectLyricExpand(false)
         }

        // Force collapse of score in state if not expandable.
        if (!getIsScoreExpandable(deviceIndex)) {
            this.props.selectScore(false)
        }

        return deviceIndex
    }

    _prepareForWindowResizeRender() {
        this.props.setIsWindowResizeRenderable(true)
    }

    _prepareForWindowResizeUnrender() {
        this.props.setIsWindowResizeRenderable(false)

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

    render() {
        return null
    }
}

const mapStateToProps = ({
    appMounted,
    selectedSongIndex,
    showOneOfTwoLyricColumns
}) => ({
    appMounted,
    selectedSongIndex,
    showOneOfTwoLyricColumns
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateDeviceStore,
        setIsWindowResizeRenderable,
        setIsTwoRowMenu,
        setIsScoresTipsInMain,
        setIsHeightlessLyricColumn,
        setShowOneOfTwoLyricColumns,
        setIsHiddenCarouselNav,
        setShowSingleBookColumn,
        setShowShrunkNavIcon,
        setIsMobileWiki
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WindowManager)
