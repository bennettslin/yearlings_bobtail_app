// Base DOM component for both admin and user-facing views.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import SwitchManager from './switch-manager'
import AdminToggle from './admin/admin-toggle'
import AudioPlayersSection from './player/audio-players-section'
import { DEVICE_OBJECTS } from '../constants/responsive'
import { getSongIsLogue } from '../helpers/data-helper'
import { getShowOverlay } from '../helpers/logic-helper'
import { getIsDesktop } from '../helpers/responsive-helper'
import { getComponentShouldUpdate } from '../helpers/general-helper'

class DomManager extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'isLyricExpanded',
                    'interactivatedVerseIndex',
                    'selectedAccessIndex',
                    'selectedAdminIndex',
                    'selectedAnnotationIndex',
                    'selectedScoreIndex',
                    'selectedSongIndex',
                    'selectedTitleIndex',
                    'selectedWikiIndex',
                    'isPlaying',
                    'isSliderMoving',

                    'isHeightlessLyricColumn',
                    'isTitleInAudio',
                    'isVerseBarAbove',
                    'isVerseBarBelow'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { deviceIndex,
                isLyricExpanded,
                interactivatedVerseIndex,
                selectedAccessIndex,
                selectedAdminIndex,
                selectedAnnotationIndex,
                selectedScoreIndex,
                selectedSongIndex,
                selectedTitleIndex,
                selectedWikiIndex,
                isPlaying,
                isSliderMoving,

                isHeightlessLyricColumn,
                isTitleInAudio,
                isVerseBarAbove,
                isVerseBarBelow,

                handleBodyClick,
                handleBodyTouchBegin,
                handleBodyTouchMove,
                handleBodyTouchEnd,
                handleKeyDownPress,
                handlePlayerTimeChange,
                handlePlayerNextSong,
                handlePlayerTimeReset,

                domManagerRef,

                ...other } = this.props,

            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isDesktop = getIsDesktop(deviceIndex),

            isLogue = getSongIsLogue(selectedSongIndex),

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
                    selectedAdminIndex ? 'is-admin-view' : 'is-live-view',
                    isLogue ? 'is-logue' : 'is-song',
                    isDesktop ? 'is-desktop' : 'is-mobile',

                    isPlaying ? 'is-playing' : 'is-paused',
                    isSliderMoving ? 'slider-moving' : 'slider-not-moving',
                    interactivatedVerseIndex < 0 ? 'is-not-verse-interactivated' : 'is-verse-interactivated',

                    showOverlay ? 'overlay-shown' : 'overlay-hidden',

                    isLyricExpanded ? 'lyric-expanded' : 'lyric-collapsed',

                    { 'accessed-on': selectedAccessIndex,
                      'heightless-lyric': isHeightlessLyricColumn,
                      'title-in-audio': isTitleInAudio,
                      'verse-bar-above': isVerseBarAbove,
                      'verse-bar-below': isVerseBarBelow,
                      'verse-bar-hidden': !isVerseBarAbove && !isVerseBarBelow }
                )}
                onClick={handleBodyClick}
                onMouseDown={handleBodyTouchBegin}
                onMouseMove={handleBodyTouchMove}
                onMouseUp={handleBodyTouchEnd}
                onMouseLeave={handleBodyTouchEnd}
                onKeyDown={handleKeyDownPress}
                tabIndex="-1"
            >
                <AdminToggle />

                <AudioPlayersSection {...audioPlayersProps} />

                <div className="popup-overlay" />

                <SwitchManager {...other} />
            </div>
        )
    }
}

DomManager.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isSliderMoving: PropTypes.bool.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,
    selectedAccessIndex: PropTypes.number.isRequired,
    selectedAdminIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,
    selectedWikiIndex: PropTypes.number.isRequired,

    isHeightlessLyricColumn: PropTypes.bool.isRequired,
    isTitleInAudio: PropTypes.bool.isRequired,
    isVerseBarAbove: PropTypes.bool.isRequired,
    isVerseBarBelow: PropTypes.bool.isRequired,

    // From parent.
    handleBodyClick: PropTypes.func.isRequired,
    handleBodyTouchBegin: PropTypes.func.isRequired,
    handleBodyTouchMove: PropTypes.func.isRequired,
    handleBodyTouchEnd: PropTypes.func.isRequired,
    handleKeyDownPress: PropTypes.func.isRequired,
    handlePlayerTimeChange: PropTypes.func.isRequired,
    handlePlayerNextSong: PropTypes.func.isRequired,
    handlePlayerTimeReset: PropTypes.func.isRequired,
    domManagerRef: PropTypes.func.isRequired
}

export default connect(({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedScoreIndex, selectedSongIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, deviceIndex, isPlaying, isSliderMoving, isHeightlessLyricColumn, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}) => ({
    interactivatedVerseIndex, selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedScoreIndex, selectedSongIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, deviceIndex, isPlaying, isSliderMoving, isHeightlessLyricColumn, isTitleInAudio, isVerseBarAbove, isVerseBarBelow
}))(DomManager)
