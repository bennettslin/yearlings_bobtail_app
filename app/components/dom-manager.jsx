import React, { Component } from 'react'
import SwitchManager from './switch-manager'
import AdminToggle from './admin/admin-toggle'
import AudioPlayersSection from './audio/audio-players-section'
import { DEVICE_OBJECTS,
         OVERVIEW_OPTIONS,
         SHOWN } from 'helpers/constants'
import { getSongTitle, getSongTimes, getVerse, getIsLogue, getHiddenLyricColumnKey, getLyricsStartAtZero } from 'helpers/album-view-helper'
import { getIsDesktop, getIsPhone, getIsLyricExpandable, getShowSingleLyricColumn } from 'helpers/responsive-helper'

class DomManager extends Component {

    componentDidMount() {
        // Allows app to begin listening for keyboard events.
        this.focusDomManager()
    }

    // Focus for accessibility.
    focusDomManager(element = this.myDomManager) {
        element.focus()
    }

    render() {

        const { props } = this,
            { isLyricExpanded,
              deviceIndex,
              windowWidth,
              windowHeight,

              selectedAdminIndex,
              selectedSongIndex,
              selectedOverviewIndex,
              selectedScoreIndex,
              selectedLyricColumnIndex,
              selectedAnnotationIndex,
              selectedVerseIndex,
              selectedWikiIndex,
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
            isPhone = getIsPhone({ deviceIndex }),

            isLogue = getIsLogue(props),
            selectedSongTitle = getSongTitle(props, isLogue),
            selectedVerse = getVerse(props, sliderVerseIndex),

            songTimes = getSongTimes(props),
            lyricsStartAtZero = getLyricsStartAtZero(props),
            isFirstVerse = selectedVerseIndex === (lyricsStartAtZero ? 1 : 0),
            isLastVerse = selectedVerseIndex === songTimes.length - 1,

            showSingleLyricColumn = getShowSingleLyricColumn(props, props),

            hiddenLyricColumnKey = getHiddenLyricColumnKey({
                showSingleLyricColumn,
                selectedLyricColumnIndex
            }),

            isLyricExpandable = getIsLyricExpandable(props),
            isOverviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,

            isOverlaidAnnotation = !isDesktop && (isLyricExpanded || isPhone),
            showOverlay = (!isPhone && !!selectedScoreIndex) || !!selectedWikiIndex ||
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
                ref={(node) => (this.myDomManager = node)}
                className={`
                    dom-manager
                    ${deviceClassName}
                    ${accessedOn ? 'accessed-on' : ''}
                    ${selectedAdminIndex ? 'admin' : 'live'}
                    ${isDesktop ? 'is-desktop' : 'is-mobile'}
                    ${isPlaying ? ' is-playing' : ' is-paused'}
                `}
                tabIndex="0"
                onClick={handleBodyClick}
                onMouseMove={handleBodyTouchMove}
                onMouseUp={handleBodyTouchEnd}
                onMouseLeave={handleBodyTouchEnd}
                onKeyDown={handleKeyDownPress}
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
                    isLogue={isLogue}
                    selectedSongTitle={selectedSongTitle}
                    selectedVerse={selectedVerse}
                    hiddenLyricColumnKey={hiddenLyricColumnKey}
                    showSingleLyricColumn={showSingleLyricColumn}

                    lyricsStartAtZero={lyricsStartAtZero}
                    isFirstVerse={isFirstVerse}
                    isLastVerse={isLastVerse}
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
