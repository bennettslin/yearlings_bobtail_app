import React, { Component } from 'react'
import classnames from 'classnames'
import SwitchManager from './switch-manager'
import AdminToggle from './admin/admin-toggle'
import AudioPlayersSection from './audio/audio-players-section'
import { DEVICE_OBJECTS,
         OVERVIEW_OPTIONS,
         SHOWN } from '../helpers/constants'
import { getSongTitle, getVerseObject } from '../helpers/data-helper'
import { getHiddenLyricColumnKey } from '../helpers/logic-helper'
import { getIsDesktop, getIsPhone, getIsLyricExpandable } from '../helpers/responsive-helper'

class DomManager extends Component {
    render() {

        const { props } = this,
            { isLyricExpanded,
              deviceIndex,
              windowWidth,
              windowHeight,
              showSingleLyricColumn,
              selectedAdminIndex,
              selectedSongIndex,
              selectedOverviewIndex,
              selectedScoreIndex,
              selectedLyricColumnIndex,
              selectedAnnotationIndex,
              selectedTitleIndex,
              selectedWikiIndex,
              selectedVerseIndex,
              sliderVerseIndex,

              accessedOn,

              mp3s,
              isPlaying,
              updatedTimePlayed,

              handleBodyClick,
              handleBodyTouchMove,
              handleBodyTouchEnd,
              handleKeyDownPress,
              handlePlayerTimeChange,
              handlePlayerNextSong,
              handlePlayerTimeReset } = props,

            deviceClassName = DEVICE_OBJECTS[deviceIndex].className,
            isDesktop = getIsDesktop(deviceIndex),
            isPhone = getIsPhone(deviceIndex),

            selectedSongTitle = getSongTitle(selectedSongIndex),
            shownVerseIndex = !isNaN(sliderVerseIndex) && sliderVerseIndex > -1 ? sliderVerseIndex : selectedVerseIndex,
            selectedVerse = getVerseObject(selectedSongIndex, shownVerseIndex),

            hiddenLyricColumnKey = getHiddenLyricColumnKey({
                showSingleLyricColumn,
                selectedLyricColumnIndex
            }),

            isLyricExpandable = getIsLyricExpandable(deviceIndex),
            isOverviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,

            isOverlaidAnnotation = !isDesktop && (isLyricExpanded || isPhone),
            showOverlay = !!selectedTitleIndex || (!isPhone && !!selectedScoreIndex) || !!selectedWikiIndex ||
                (!!selectedAnnotationIndex && isOverlaidAnnotation),

            audioPlayersProps = {
                mp3s,
                isPlaying,
                selectedSongIndex,
                updatedTimePlayed,
                handlePlayerTimeChange,
                handlePlayerNextSong,
                handlePlayerTimeReset
            }

        return (
            <div
                ref={this.props.domManagerRef}
                className={classnames(
                    'dom-manager',
                    deviceClassName,
                    selectedAdminIndex ? 'admin' : 'live',
                    isDesktop ? 'is-desktop' : 'is-mobile',
                    isPlaying ? 'is-playing' : 'is-paused',
                    { 'accessed-on': accessedOn }
                )}
                onClick={handleBodyClick}
                onMouseMove={handleBodyTouchMove}
                onMouseUp={handleBodyTouchEnd}
                onMouseLeave={handleBodyTouchEnd}
                onKeyDown={handleKeyDownPress}
                tabIndex="-1"
            >
                <AdminToggle
                    selectedAdminIndex={selectedAdminIndex}
                    isLyricExpanded={isLyricExpanded}
                    deviceIndex={deviceIndex}
                    windowWidth={windowWidth}
                    windowHeight={windowHeight}
                />
                <AudioPlayersSection {...audioPlayersProps} />
                <div
                    className={`popup-overlay${showOverlay ? '' : ' hidden'}`}
                >
                </div>
                <SwitchManager {...props}
                    // For scores tips section.
                    isDesktop={isDesktop}
                    isPhone={isPhone}
                    selectedSongTitle={selectedSongTitle}
                    selectedVerse={selectedVerse}
                    hiddenLyricColumnKey={hiddenLyricColumnKey}
                    showSingleLyricColumn={showSingleLyricColumn}

                    isLyricExpandable={isLyricExpandable}
                    showOverlay={showOverlay}
                    isOverviewShown={isOverviewShown}
                    isOverlaidAnnotation={isOverlaidAnnotation}
                />
            </div>
        )
    }
}

export default DomManager
