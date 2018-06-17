import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import debounce from 'debounce'

import { accessAnnotationIndex } from '../redux/actions/access'
import {
    setDeviceIndex,
    setWindowHeight,
    setWindowWidth,
    setStageCoordinates
} from '../redux/actions/device'
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
} from '../helpers/responsiveHelper'

import {
    getAnnotationIndexForDirection,
    getAnnotationIndexForVerseIndex
} from '../helpers/logicHelper'
import { getStageCoordinates } from '../helpers/stageHelper'

class WindowManager extends Component {

    static propTypes = {
        // Through Redux.
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        showOneOfTwoLyricColumns: PropTypes.bool.isRequired,

        accessAnnotationIndex: PropTypes.func.isRequired,
        setDeviceIndex: PropTypes.func.isRequired,
        setWindowHeight: PropTypes.func.isRequired,
        setWindowWidth: PropTypes.func.isRequired,
        setStageCoordinates: PropTypes.func.isRequired,
        setIsTwoRowMenu: PropTypes.func.isRequired,
        setIsScoresTipsInMain: PropTypes.func.isRequired,
        setIsHeightlessLyricColumn: PropTypes.func.isRequired,
        setShowOneOfTwoLyricColumns: PropTypes.func.isRequired,
        setIsHiddenCarouselNav: PropTypes.func.isRequired,
        setShowSingleBookColumn: PropTypes.func.isRequired,
        setShowShrunkNavIcon: PropTypes.func.isRequired,
        setIsMobileWiki: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired,
        deselectAnnotation: PropTypes.func.isRequired,
        selectLyricExpand: PropTypes.func.isRequired,
        selectScore: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.windowResize = this.windowResize.bind(this)
    }

    componentDidMount() {
        this.props.getRef(this)

        /**
         * Set initial responsive UI, then modify state based on device index.
         */
        this._updateStateAfterMount(
            this.windowResize()
        )

        // Then watch for any subsequent window resize.
        window.onresize = debounce(this.windowResize, 50)
    }

    _updateStateAfterMount(deviceIndex) {
        const {
            selectedAnnotationIndex,
            selectedDotKeys,
            selectedLyricColumnIndex,
            selectedSongIndex,
            selectedVerseIndex

        } = this.props

        // This needs to wait upon getting the deviceIndex.
        this.props.accessAnnotationIndex(

            // Based on either selected annotation or selected verse.
            selectedAnnotationIndex ?
                getAnnotationIndexForDirection({
                    deviceIndex,
                    currentAnnotationIndex: selectedAnnotationIndex,
                    selectedSongIndex,
                    selectedDotKeys,
                    lyricColumnIndex: selectedLyricColumnIndex
                }) :
                getAnnotationIndexForVerseIndex({
                    deviceIndex,
                    verseIndex: selectedVerseIndex,
                    selectedSongIndex,
                    selectedDotKeys,
                    lyricColumnIndex: selectedLyricColumnIndex
                })
        )
    }

    componentWillUnmount() {
        window.onresize = null
    }

    windowResize(e) {
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

        /**
         * Deselect selected annotation if not in new shown column. Do it here,
         * before we tell Redux to update the prop.
         */
        if (showOneOfTwoLyricColumns && !this.props.showOneOfTwoLyricColumns) {
            this.props.deselectAnnotation({
                deviceIndex
            })
        }

        this.props.setDeviceIndex(deviceIndex)
        this.props.setWindowHeight(windowHeight)
        this.props.setWindowWidth(windowWidth)
        this.props.setStageCoordinates(
            getStageCoordinates({
                deviceIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyricColumn
            })
        )

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

    render() {
        return null
    }
}

const mapStateToProps = ({
        selectedAnnotationIndex,
        selectedDotKeys,
        selectedLyricColumnIndex,
        selectedSongIndex,
        selectedVerseIndex,
        showOneOfTwoLyricColumns
}) => ({
        selectedAnnotationIndex,
        selectedDotKeys,
        selectedLyricColumnIndex,
        selectedSongIndex,
        selectedVerseIndex,
        showOneOfTwoLyricColumns
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessAnnotationIndex,
        setDeviceIndex,
        setWindowHeight,
        setWindowWidth,
        setStageCoordinates,
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
