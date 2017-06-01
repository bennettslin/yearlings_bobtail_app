import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import SwitchManager from './switch-manager'
import AdminToggle from './admin/admin-toggle'
import AudioPlayersSection from './audio/audio-players-section'
import { SHOWN,
         OVERVIEW_OPTIONS } from '../constants/options'
import { DEVICE_OBJECTS } from '../constants/responsive'
import { getSongTitle } from '../helpers/data-helper'
import { getIsDesktop, getIsPhone } from '../helpers/responsive-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({ selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded }) => ({ selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedOverviewIndex, selectedScoreIndex, selectedSongIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded })

class DomManager extends Component {
    render() {

        const { props } = this,
            { isLyricExpanded,
              deviceIndex,
              windowWidth,
              windowHeight,

              selectedAdminIndex,
              selectedAnnotationIndex,
              selectedOverviewIndex,
              selectedScoreIndex,
              selectedSongIndex,
              selectedTitleIndex,
              selectedWikiIndex,

              selectedAccessIndex,

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
            isOverviewShown = OVERVIEW_OPTIONS[selectedOverviewIndex] === SHOWN,

            isOverlaidAnnotation = !isDesktop && (isLyricExpanded || isPhone),
            showOverlay = !!selectedTitleIndex || (!isPhone && !!selectedScoreIndex) || !!selectedWikiIndex ||
                (!!selectedAnnotationIndex && isOverlaidAnnotation),

            audioPlayersProps = {
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
                    { 'accessed-on': selectedAccessIndex }
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
                    className={classnames(
                        'popup-overlay',
                        { 'hidden': !showOverlay }
                    )}
                >
                </div>
                <SwitchManager {...props}
                    // For scores tips section.
                    isDesktop={isDesktop}
                    isPhone={isPhone}
                    selectedSongTitle={selectedSongTitle}
                    showOverlay={showOverlay}
                    isOverviewShown={isOverviewShown}
                    isOverlaidAnnotation={isOverlaidAnnotation}
                />
            </div>
        )
    }
}

export default connect(passReduxStateToProps)(DomManager)
