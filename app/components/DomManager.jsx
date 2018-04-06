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

            overviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
            tipsShown = TIPS_OPTIONS[selectedTipsIndex] === SHOWN,

            carouselNavCanShow = !isLogue && !showOverlay && !selectedDotsIndex && !isLyricExpanded && !overviewShown && !tipsShown

        return (
            <div
                ref={domManagerRef}
                className={cx(
                    'DomManager',
                    deviceClassName,
                    isDesktop ? 'is-desktop' : 'is-mobile',
                    { 'is-tablet-or-mini': isTabletOrMini },

                    selectedAdminIndex ? 'is-admin-view' : 'is-live-view',

                    selectedDotKeys,
                    selectedAnnotationIndex ? 'annotation-shown' : 'annotation-hidden',
                    selectedCarouselNavIndex ? 'carousel-expanded' : 'nav-expanded',
                    selectedDotsIndex ? 'Dots-shown' : 'Dots-hidden',

                    isLogue ? 'is-logue' : 'is-song',

                    isPlaying ? 'is-playing' : 'is-paused',
                    isSliderMoving ? 'slider-moving' : 'slider-not-moving',
                    interactivatedVerseIndex < 0 ? 'is-not-verse-interactivated' : 'is-verse-interactivated',

                    showOverlay ? 'overlay-shown' : 'overlay-hidden',
                    isOverlayingAnnotation ? 'overlaid-annotation' : 'side-annotation',
                    overviewShown ? 'overview-shown' : 'overview-hidden',
                    tipsShown ? 'tips-shown' : 'tips-hidden',

                    isLyricExpanded ? 'lyric-expanded' : 'lyric-collapsed',
                    showShrunkNavIcon ? 'shrink-nav-icon' : 'static-nav-icon',
                    isScoresTipsInMain ? 'scores-tips-in-main' : 'scores-tips-in-menu',
                    singleShownLyricColumnKey && `show-only-${singleShownLyricColumnKey}`,
                    selectedAccessIndex ? 'accessed-on' : 'accessed-off',
                    isHeightlessLyricColumn ? 'heightless-lyric' : 'not-heightless-lyric',
                    carouselNavCanShow ? 'CarouselNav-can-show' : 'CarouselNav-cannot-show',

                    { 'title-in-audio': isTitleInAudio,
                      'verse-bar-above': isVerseBarAbove,
                      'verse-bar-below': isVerseBarBelow,
                      'verse-bar-hidden': !isVerseBarAbove && !isVerseBarBelow,
                      'show-both-columns': !singleShownLyricColumnKey,
                      'slider-touched': isSliderTouched }
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

                <Players {...audioPlayersProps} />

                <div className="PopupOverlay" />

                <SwitchManager {...other} />

                {/* Prevent popup interaction when slider is touched. */}
                {!selectedAdminIndex ? (
                    <div className="super-overlay" />
                ) : null}
            </div>
        )
    }
}

DomManager.propTypes = {
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

export default connect(({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}) => ({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselNavIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTipsIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}))(DomManager)
