// Base DOM component for both admin and user-facing views.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import SwitchManager from './switch-manager'
import AdminToggle from './admin/admin-toggle'
import AudioPlayersSection from './player/audio-players-section'
import { DEVICE_OBJECTS } from '../constants/responsive'
import { getShowOverlay } from '../helpers/logic-helper'
import { getIsDesktop, getIsOverlayingAnnotation } from '../helpers/responsive-helper'
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
                    'selectedAccessIndex',
                    'selectedAdminIndex',
                    'selectedAnnotationIndex',
                    'selectedScoreIndex',
                    'selectedTitleIndex',
                    'selectedWikiIndex',
                    'isPlaying'
                ]
            })

        return componentShouldUpdate
    }

    render() {
        const { deviceIndex,
                isLyricExpanded,
                selectedAccessIndex,
                selectedAdminIndex,
                selectedAnnotationIndex,
                selectedScoreIndex,
                selectedTitleIndex,
                selectedWikiIndex,
                isPlaying,

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

            isOverlayingAnnotation = getIsOverlayingAnnotation({
                deviceIndex,
                isLyricExpanded
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
                    selectedAdminIndex ? 'admin' : 'live',
                    isDesktop ? 'is-desktop' : 'is-mobile',
                    isPlaying ? 'is-playing' : 'is-paused',
                    showOverlay ? 'overlay-shown' : 'overlay-hidden',
                    { 'accessed-on': selectedAccessIndex }
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

                <SwitchManager {...other}
                    isOverlayingAnnotation={isOverlayingAnnotation}
                />
            </div>
        )
    }
}

export default connect(({
    selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedScoreIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, deviceIndex, isPlaying
}) => ({
    selectedAccessIndex, selectedAdminIndex, selectedAnnotationIndex, selectedScoreIndex, selectedTitleIndex, selectedWikiIndex, isLyricExpanded, deviceIndex, isPlaying
}))(DomManager)
