/**
 * Parent component that handles knowledge of state so that child components
 * deal with as little state change as possible.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SwitchManager from './SwitchManager'
import AdminToggle from './admin/admin-toggle'
import Players from './Players/Players'
import { SHOWN,
         OVERVIEW_OPTIONS,
         TIPS_OPTIONS } from '../constants/options'
import { DEVICE_OBJECTS } from '../constants/responsive'
import { getSongIsLogue } from '../helpers/dataHelper'
import { getShowOverlay, getSingleShownLyricColumnKey } from '../helpers/logicHelper'
import { getIsDesktop, getIsTabletOrMini, getIsOverlayingAnnotation } from '../helpers/responsiveHelper'

class DomManager extends Component {

    static propTypes = {
        // Through Redux.
        deviceIndex: PropTypes.number.isRequired,
        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isSliderTouched: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        selectedAccessIndex: PropTypes.number.isRequired,
        selectedAdminIndex: PropTypes.number.isRequired,
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
        isTitleInAudio: PropTypes.bool.isRequired,
        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,

        // From parent.
        handleKeyDownPress: PropTypes.func.isRequired,
        eventHandlers: PropTypes.shape({
            handleBodyClick: PropTypes.func.isRequired,
            handleBodyTouchMove: PropTypes.func.isRequired,
            handleBodyTouchEnd: PropTypes.func.isRequired,
            handlePlayerTimeChange: PropTypes.func.isRequired,
            handlePlayerNextSong: PropTypes.func.isRequired,
            handlePlayerTimeReset: PropTypes.func.isRequired,
            domManagerRef: PropTypes.func.isRequired
        })
    }

    constructor(props) {
        super(props)

        this._handleClick = this._handleClick.bind(this)
        this._handleMouseUp = this._handleMouseUp.bind(this)
        this._resetSliderMousedUp = this._resetSliderMousedUp.bind(this)

        this.state = {
            sliderMousedUp: false
        }
    }

    componentWillReceiveProps(nextProps) {
        // If slider touch ended, then tell dom manager.
        if (!nextProps.isSliderTouched && this.props.isSliderTouched) {

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

    render() {
        const { deviceIndex,
                interactivatedVerseIndex,
                selectedAccessIndex,
                selectedAdminIndex,
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
                isTitleInAudio,
                isVerseBarAbove,
                isVerseBarBelow,

                // Passed directly from access manaager.
                handleKeyDownPress } = this.props,

            { handleBodyTouchMove,
              handlePlayerTimeChange,
              handlePlayerNextSong,
              handlePlayerTimeReset,
              domManagerRef,
              ...other } = this.props.eventHandlers,

            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isDesktop = getIsDesktop(deviceIndex),
            isTabletOrMini = getIsTabletOrMini(deviceIndex),

            isLogue = getSongIsLogue(selectedSongIndex),

            isOverlayingAnnotation = getIsOverlayingAnnotation({
                    deviceIndex,
                    isLyricExpanded
                }),

            singleShownLyricColumnKey = getSingleShownLyricColumnKey({
                showOneOfTwoLyricColumns,
                selectedLyricColumnIndex
            }),

            showOverlay = getShowOverlay({
                deviceIndex,
                isLyricExpanded,
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

            _overviewShown_ = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
            _tipsShown_ = TIPS_OPTIONS[selectedTipsIndex] === SHOWN,

            carouselNavCanShow = !isLogue && !showOverlay && !selectedDotsIndex && !isLyricExpanded && !_overviewShown_ && !_tipsShown_

        return (
            <div
                ref={domManagerRef}
                className={cx(
                    'DomManager',

                    deviceClassName,
                    isDesktop ?
                        '_desktop_' : '_mobile_',
                    { '_mobileNotPhone_': isTabletOrMini },

                    selectedAccessIndex ? '_accessOn_' : '_accessOff_',
                    showOverlay ? '_overlayShown_' : '_overlayHidden_',

                    isLogue ? '_logue_' : '_song_',
                    isPlaying ? '_isPlaying_' : '_isPaused_',
                    isSliderMoving ? '_sliderMoving_' : '_sliderNotMoving_',
                    { '_sliderTouched_': isSliderTouched },
                    interactivatedVerseIndex < 0 ?
                        '_verseInactive_' : '_verseActive_',

                    selectedAnnotationIndex ?
                    '_annotationShown_' : '_annotationHidden_',
                    { '_carouselExpanded_': selectedCarouselNavIndex },
                    selectedDotsIndex ? '_dotsShown_' : '_dotsHidden_',
                    isLyricExpanded ? '_lyricExpanded_' : '_lyricCollapsed_',
                    { '_navExpanded_': !selectedCarouselNavIndex },
                    _overviewShown_ ? '_overviewShown_' : '_overviewHidden_',
                    _tipsShown_ ? '_tipsShown_' : '_tipsHidden_',

                    isOverlayingAnnotation ?
                        '_annotationOverlaid_' : '_annotationSide_',
                    showShrunkNavIcon ? '_navIconShrunk_' : '_navIconStatic_',

                    carouselNavCanShow ?
                        '_carouselNavShowable_' : '_carouselNavUnshowable_',
                    isScoresTipsInMain ?
                        '_scoresTipsMain_' : '_scoresTipsMenu_',
                    { '_titleInAudio_': isTitleInAudio },

                    singleShownLyricColumnKey &&
                        `_${singleShownLyricColumnKey}LyricColumnOnly_`,
                    isHeightlessLyricColumn ?
                        '_lyricHeightless_' : '_lyricHeighted_',

                    { '_bothLyricColumnsShown_': !singleShownLyricColumnKey,
                      '_verseBarHidden_': !isVerseBarAbove && !isVerseBarBelow,
                      '_verseBarAbove_': isVerseBarAbove,
                      '_verseBarBelow_': isVerseBarBelow },

                      selectedDotKeys
                )}
                onClick={this._handleClick}
                onTouchStart={this._handleClick}
                onMouseMove={handleBodyTouchMove}
                onTouchMove={handleBodyTouchMove}
                onMouseUp={this._handleMouseUp}
                onMouseLeave={this._handleMouseUp}
                onTouchEnd={this._handleMouseUp}
                onTouchCancel={this._handleMouseUp}
                onKeyDown={handleKeyDownPress}
                tabIndex="-1"
            >
                <AdminToggle />

                <div className="PopupOverlay" />

                <SwitchManager {...other} />

                {/* Prevent popup interaction when slider is touched. */}
                {!selectedAdminIndex && (
                    <div className="TouchOverlay" />
                )}

                <Players {...audioPlayersProps} />
            </div>
        )
    }
}

export default connect(({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}) => ({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}))(DomManager)
