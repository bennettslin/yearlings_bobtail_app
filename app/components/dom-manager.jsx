/**
 * Parent component that handles knowledge of state so that child components
 * deal with as little state change as possible.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SwitchManager from './switch-manager'
import AdminToggle from './admin/admin-toggle'
import PlayersSection from './player/players-section'
import { SHOWN,
         OVERVIEW_OPTIONS } from '../constants/options'
import { DEVICE_OBJECTS } from '../constants/responsive'
import { getSongIsLogue } from '../helpers/data-helper'
import { getShowOverlay, getSingleShownLyricColumnKey } from '../helpers/logic-helper'
import { getIsDesktop, getIsOverlayingAnnotation } from '../helpers/responsive-helper'

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
        this.props.handleBodyTouchEnd(e)

        if (this.props.isSliderTouched) {
            this.setState({
                sliderMousedUp: true
            })

        }
    }

    _handleClick(e) {
        /**
         * Don't register the click event that happens after mouseUp if we're
         * lifting up from moving the slider.
         */
        if (!this.state.sliderMousedUp) {
            this.props.handleBodyClick(e)
        }
    }

    render() {
        const { deviceIndex,
                interactivatedVerseIndex,
                selectedAccessIndex,
                selectedAdminIndex,
                selectedAnnotationIndex,
                selectedCarouselIndex,
                selectedDotKeys,
                selectedDotsIndex,
                selectedLyricColumnIndex,
                selectedNavIndex,
                selectedOverviewIndex,
                selectedScoreIndex,
                selectedSongIndex,
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

                handleBodyTouchMove,
                handleKeyDownPress,
                handlePlayerTimeChange,
                handlePlayerNextSong,
                handlePlayerTimeReset,

                domManagerRef,

                ...other } = this.props,

            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isDesktop = getIsDesktop(deviceIndex),

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
            }

        return (
            <div
                ref={domManagerRef}
                className={classnames(
                    'dom-manager',
                    deviceClassName,
                    selectedDotKeys,
                    selectedAdminIndex ? 'is-admin-view' : 'is-live-view',
                    selectedAnnotationIndex ? 'annotation-shown' : 'annotation-hidden',
                    selectedCarouselIndex ? 'carousel-expanded' : 'carousel-collapsed',
                    selectedDotsIndex ? 'dots-section-shown' : 'dots-section-hidden',
                    selectedNavIndex ? 'nav-expanded' : 'nav-collapsed',

                    isLogue ? 'is-logue' : 'is-song',
                    isDesktop ? 'is-desktop' : 'is-mobile',

                    isPlaying ? 'is-playing' : 'is-paused',
                    isSliderMoving ? 'slider-moving' : 'slider-not-moving',
                    interactivatedVerseIndex < 0 ? 'is-not-verse-interactivated' : 'is-verse-interactivated',

                    showOverlay ? 'overlay-shown' : 'overlay-hidden',
                    isOverlayingAnnotation ? 'overlaid-annotation' : 'side-annotation',

                    isLyricExpanded ? 'lyric-expanded' : 'lyric-collapsed',
                    showShrunkNavIcon ? 'shrink-nav-icon' : 'static-nav-icon',
                    singleShownLyricColumnKey && `show-only-${singleShownLyricColumnKey}`,

                    { 'accessed-on': selectedAccessIndex,
                      'heightless-lyric': isHeightlessLyricColumn,
                      'overview-shown': OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,
                      'scores-tips-in-main': isScoresTipsInMain,
                      'title-in-audio': isTitleInAudio,
                      'verse-bar-above': isVerseBarAbove,
                      'verse-bar-below': isVerseBarBelow,
                      'verse-bar-hidden': !isVerseBarAbove && !isVerseBarBelow,
                      'slider-touched': isSliderTouched }
                )}
                onClick={this._handleClick}
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

                <PlayersSection {...audioPlayersProps} />

                <div className="popup-overlay" />

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
    selectedCarouselIndex: PropTypes.number.isRequired,
    selectedDotKeys: PropTypes.object.isRequired,
    selectedDotsIndex: PropTypes.number.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired,
    selectedNavIndex: PropTypes.number.isRequired,
    selectedOverviewIndex: PropTypes.number.isRequired,
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
    handleBodyClick: PropTypes.func.isRequired,
    handleBodyTouchMove: PropTypes.func.isRequired,
    handleBodyTouchEnd: PropTypes.func.isRequired,
    handleKeyDownPress: PropTypes.func.isRequired,
    handlePlayerTimeChange: PropTypes.func.isRequired,
    handlePlayerNextSong: PropTypes.func.isRequired,
    handlePlayerTimeReset: PropTypes.func.isRequired,
    domManagerRef: PropTypes.func.isRequired
}

export default connect(({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}) => ({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedCarouselIndex, selectedDotKeys, selectedDotsIndex, selectedLyricColumnIndex, selectedNavIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, showOneOfTwoLyricColumns, deviceIndex, isPlaying, isSliderTouched, isSliderMoving, isHeightlessLyricColumn, showShrunkNavIcon, isScoresTipsInMain, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}))(DomManager)
