/**
 * Parent component that handles knowledge of UI state so that child components
 * deal with as little state change as possible.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AccessManager from '../managers/AccessManager'
import Admin from './Admin/Admin'
import Live from './Live/Live'
import AdminToggle from './admin/AdminToggle'
import Players from './Players/Players'

import { SHOWN,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from '../constants/options'
import { DEVICE_OBJECTS } from '../constants/responsive'
import { getSongIsLogue } from '../helpers/dataHelper'
import { getPrefixPrependedClassNames } from '../helpers/domHelper'
import { getShowOverlay,
         getSingleShownLyricColumnKey } from '../helpers/logicHelper'
import { getIsDesktop, getIsTabletOrMini } from '../helpers/responsiveHelper'

class Root extends Component {

    static propTypes = {
        // Through Redux.
        selectedAdminIndex: PropTypes.number.isRequired,

        deviceIndex: PropTypes.number.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        selectedAccessIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,
        selectedOverviewIndex: PropTypes.number.isRequired,
        selectedTipsIndex: PropTypes.number.isRequired,
        selectedScoreIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTitleIndex: PropTypes.number.isRequired,
        selectedWikiIndex: PropTypes.number.isRequired,

        isLyricExpanded: PropTypes.bool.isRequired,
        showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
        showShrunkNavIcon: PropTypes.bool.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,
        isTwoRowMenu: PropTypes.bool.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,
        isManualScroll: PropTypes.bool.isRequired,
        isHeavyRenderReady: PropTypes.bool.isRequired,

        // From parent.
        eventHandlers: PropTypes.shape({
            handleBodyClick: PropTypes.func.isRequired,
            handleBodyTouchMove: PropTypes.func.isRequired,
            handleBodyTouchEnd: PropTypes.func.isRequired,
            handlePlayerTimeChange: PropTypes.func.isRequired,
            handlePlayerNextSong: PropTypes.func.isRequired,
            handlePlayerTimeReset: PropTypes.func.isRequired,
            rootManagerRef: PropTypes.func.isRequired
        })
    }

    constructor(props) {
        super(props)

        this.state = {
            sliderMousedUp: false
        }

        this._handleClick = this._handleClick.bind(this)
        this._handleMouseUp = this._handleMouseUp.bind(this)
        this._resetSliderMousedUp = this._resetSliderMousedUp.bind(this)
        this.handleKeyDownPress = this.handleKeyDownPress.bind(this)
    }

    componentDidUpdate(prevProps) {
        // If slider touch ended, then tell dom manager.
        if (!this.props.isSliderTouched && prevProps.isSliderTouched) {

            // Let click handler get called first, then reset state.
            setTimeout(this._resetSliderMousedUp, 0)
        }
    }

    _resetSliderMousedUp() {
        this.setState({
            sliderMousedUp: false
        })
    }

    _handleMouseUp(e) {
        const { handleBodyTouchEnd } = this.props.eventHandlers
        handleBodyTouchEnd(e)

        if (this.props.isSliderTouched) {
            this.setState({
                sliderMousedUp: true
            })

        }
    }

    _handleClick(e) {
        const { handleBodyClick } = this.props.eventHandlers

        /**
         * Don't register the click event that happens after mouseUp if we're
         * lifting up from moving the slider.
         */
        if (!this.state.sliderMousedUp) {
            handleBodyClick(e)
        }
    }

    handleKeyDownPress(e) {
        this.accessManager.handleKeyDownPress(e)
    }

    render() {
        const { selectedAdminIndex,

                deviceIndex,
                interactivatedVerseIndex,
                selectedAccessIndex,
                selectedAnnotationIndex,
                selectedCarouselNavIndex,
                selectedDotKeys,
                selectedDotsIndex,
                selectedLyricColumnIndex,
                selectedOverviewIndex,
                selectedScoreIndex,
                selectedSongIndex,
                selectedTipsIndex,
                selectedTitleIndex,
                selectedWikiIndex,
                isPlaying,
                isSliderTouched,
                isSliderMoving,

                isLyricExpanded,
                showOneOfTwoLyricColumns,
                isHeightlessLyricColumn,
                showShrunkNavIcon,
                isScoresTipsInMain,
                isTwoRowMenu,
                isVerseBarAbove,
                isVerseBarBelow,
                isManualScroll,
                isHeavyRenderReady } = this.props,

            { handleBodyTouchMove,
              handlePlayerTimeChange,
              handlePlayerNextSong,
              handlePlayerTimeReset,
              rootManagerRef,
              ...other } = this.props.eventHandlers,

            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isDesktop = getIsDesktop(deviceIndex),
            isTabletOrMini = getIsTabletOrMini(deviceIndex),

            isLogue = getSongIsLogue(selectedSongIndex),

            singleShownLyricColumnKey = getSingleShownLyricColumnKey({
                showOneOfTwoLyricColumns,
                selectedLyricColumnIndex
            }),

            showOverlay = getShowOverlay({
                deviceIndex,
                isLyricExpanded,
                isHeightlessLyricColumn,
                selectedAnnotationIndex,
                selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex
            }),

            audioPlayersProps = {
                handlePlayerTimeChange,
                handlePlayerNextSong,
                handlePlayerTimeReset
            },

            overviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
            tipsShown = TIPS_OPTIONS[selectedTipsIndex] === SHOWN,

            isCarouselNavShowable =
                !isLogue
                && !showOverlay
                && !isLyricExpanded
                && !overviewShown
                && !tipsShown

        return (
            <div
                ref={rootManagerRef}
                className={cx(
                    'Root',

                    `RM__${deviceClassName}`,
                    isDesktop ?
                        'RM__desktop' : 'RM__mobile',
                    { 'RM__mobileNotPhone': isTabletOrMini },

                    selectedAccessIndex ? 'RM__accessOn' : 'RM__accessOff',
                    showOverlay ? 'RM__overlayShown' : 'RM__overlayHidden',

                    isLogue ? 'RM__logue' : 'RM__song',
                    isPlaying ? 'RM__isPlaying' : 'RM__isPaused',
                    isSliderMoving ? 'RM__sliderMoving' : 'RM__sliderNotMoving',
                    { 'RM__sliderTouched': isSliderTouched },
                    interactivatedVerseIndex < 0 ?
                        'RM__verseInactive' : 'RM__verseActive',

                    selectedAnnotationIndex ?
                        'RM__annotationShown' : 'RM__annotationHidden',
                    { 'RM__carouselExpanded': selectedCarouselNavIndex },
                    selectedDotsIndex ? 'RM__dotsShown' : 'RM__dotsHidden',
                    isLyricExpanded ?
                        'RM__lyricExpanded' : 'RM__lyricCollapsed',
                    { 'RM__navExpanded': !selectedCarouselNavIndex },
                    overviewShown ? 'RM__overviewShown' : 'RM__overviewHidden',
                    tipsShown ? 'RM__tipsShown' : 'RM__tipsHidden',

                    showShrunkNavIcon ?
                        'RM__navIconShrunk' : 'RM__navIconStatic',

                    isCarouselNavShowable ?
                        'RM__carouselNavShowable' : 'RM__carouselNavUnshowable',
                    isScoresTipsInMain ?
                        'RM__scoresTipsMain' : 'RM__scoresTipsMenu',
                    isTwoRowMenu ?
                        'RM__twoRowMenu' : 'RM__oneRowMenu',

                    singleShownLyricColumnKey &&
                        `RM__${singleShownLyricColumnKey}LyricColumnOnly`,
                    isHeightlessLyricColumn ?
                        'RM__lyricHeightless' : 'RM__lyricHeighted',
                    isHeavyRenderReady ?
                        'RM__renderReady' : 'RM__renderUnready',

                    { 'RM__bothLyricColumnsShown': !singleShownLyricColumnKey,
                      'RM__verseBarHidden':
                          !isVerseBarAbove && !isVerseBarBelow,
                      'RM__verseBarAbove': isVerseBarAbove,
                      'RM__verseBarBelow': isVerseBarBelow,
                      'RM__manualScroll': isManualScroll },

                    getPrefixPrependedClassNames(selectedDotKeys, 'RM')
                )}
                onClick={this._handleClick}
                onTouchStart={this._handleClick}
                onMouseMove={handleBodyTouchMove}
                onTouchMove={handleBodyTouchMove}
                onMouseUp={this._handleMouseUp}
                onMouseLeave={this._handleMouseUp}
                onTouchEnd={this._handleMouseUp}
                onTouchCancel={this._handleMouseUp}
                onKeyDown={this.handleKeyDownPress}
                tabIndex="-1"
            >
                {/* TODO: Only pass the events used by AccessManager. */}
                <AccessManager
                    eventHandlers={this.props.eventHandlers}
                    getRef={node => (this.accessManager = node)}
                />

                {selectedAdminIndex ? (
                    <Admin {...other} />
                ) : (
                    <Live {...other} />
                )}

                <AdminToggle />

                <Players {...audioPlayersProps} />
            </div>
        )
    }
}

const mapStateToProps = ({
    selectedAdminIndex, interactivatedVerseIndex, selectedAccessIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTwoRowMenu, isVerseBarAbove, isVerseBarBelow, isManualScroll, isHeavyRenderReady
}) => ({
    selectedAdminIndex, interactivatedVerseIndex, selectedAccessIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTwoRowMenu, isVerseBarAbove, isVerseBarBelow, isManualScroll, isHeavyRenderReady
})

export default connect(mapStateToProps)(Root)
