import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import isFinite from 'lodash/isfinite'

import { updateBannerStore } from 'flux/banner/action'

import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import VerseDispatcher from '../../../dispatchers/VerseDispatcher'

import Tracker from '../../Tracker'
import SongBannerTimer from './Timer'
import SongBannerTitle from './Title'

import { getSongIsLogue } from '../../../album/api/songs'
import {
    getSongTotalTime,
    getStartTimeForVerseIndex
} from '../../../album/api/time'

import { getClientX, getElementRatioForClientX } from 'helpers/dom'
import { populateRefs } from 'helpers/ref'
import { getVerseIndexforRatio } from 'helpers/verse'

const mapStateToProps = ({
    audioStore: { isPlaying },
    bannerStore: {
        isBannerHovering,
        bannerHoverVerseIndex,
        bannerHoverTime
    },
    responsiveStore: { isSmallBannerText },
    selectedStore: {
        isSelectedLogue,
        selectedSongIndex,
        selectedTime
    },
    activatedStore: { isActivated },
    sliderStore: { isSliderMoving }
}) => ({
    isPlaying,
    isBannerHovering,
    bannerHoverVerseIndex,
    bannerHoverTime,
    isSmallBannerText,
    isSelectedLogue,
    selectedSongIndex,
    selectedTime,
    isActivated,
    isSliderMoving
})

class SongBanner extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        isBannerHovering: PropTypes.bool.isRequired,
        bannerHoverVerseIndex: PropTypes.number.isRequired,
        bannerHoverTime: PropTypes.number.isRequired,
        isSmallBannerText: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        updateBannerStore: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.bannerElement = React.createRef()
    }

    getCursorWidth() {
        const {
                isBannerHovering,
                selectedSongIndex,
                selectedTime,
                bannerHoverTime
            } = this.props,

            playedTime = isBannerHovering ? bannerHoverTime : selectedTime,
            totalTime = getSongTotalTime(selectedSongIndex)

        return playedTime / totalTime * 100
    }

    getVerseIndexFromEvent = e => {
        const clientX = getClientX(e),
            {
                left,
                width
            } = this.bannerElement.current.getBoundingClientRect()

        if (isFinite(clientX)) {

            const { selectedSongIndex } = this.props,
                bannerRatio = getElementRatioForClientX({
                    clientX,
                    elementLeft: left,
                    elementWidth: width
                })

            return getVerseIndexforRatio(
                selectedSongIndex,
                bannerRatio
            )
        }

        return null
    }

    handleBannerClick = (e) => {

        const {
            selectedSongIndex,
            isSliderMoving,
            isActivated,
            bannerHoverVerseIndex
        } = this.props

        if (getSongIsLogue(selectedSongIndex)) {
            // Do not register click in logue.
            return
        }

        this.dispatchStopPropagation(e)

        if (isSliderMoving || isActivated) {
            // Do nothing if lyrics locked, but still register click.
            return
        }

        this.dispatchVerse({
            selectedVerseIndex: bannerHoverVerseIndex,
            scrollLog: `Select banner verse ${bannerHoverVerseIndex}.`
        })
    }

    onMouseEnter = e => {
        const {
            selectedSongIndex,
            selectedTime,
            isSliderMoving,
            isActivated
        } = this.props

        if (
            isSliderMoving ||
            isActivated ||
            getSongIsLogue(selectedSongIndex)
        ) {
            // Do not toggle banner hovering state.
            return
        }

        this.props.updateBannerStore({
            isBannerHovering: true,

            // Begin from selected time to keep tracker animation smooth.
            bannerHoverTime: selectedTime
        })
        this.onMouseMove(e)
    }

    onMouseMove = e => {
        const {
            isBannerHovering,
            selectedSongIndex
        } = this.props

        if (!isBannerHovering) {
            // Do not proceed if we are not in banner hovering state.
            return
        }

        const bannerHoverVerseIndex = this.getVerseIndexFromEvent(e) || -1

        this.props.updateBannerStore({
            bannerHoverVerseIndex,
            bannerHoverTime: getStartTimeForVerseIndex(
                selectedSongIndex,
                bannerHoverVerseIndex
            )
        })
    }

    onMouseLeave = () => {
        this.props.updateBannerStore()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                isPlaying,
                isSmallBannerText,
                isSliderMoving,
                isActivated,
                isSelectedLogue
            } = this.props,
            cursorWidth = this.getCursorWidth()

        return (
            <div
                {...{
                    ref: this.bannerElement,
                    className: cx(
                        'SongBanner',
                        'BannerFilmstrip__child',
                        isSmallBannerText &&
                            'Cursor__smallText',

                        (
                            isPlaying ||
                            isSliderMoving ||
                            isActivated
                        ) ?
                            'textShadow__light' :
                            'textShadow__dark',

                        'dropShadow',

                        !isSliderMoving && !isActivated && !isSelectedLogue &&
                            'dropShadow__lightHover',

                        'ovH',
                        'Rancho'
                    ),
                    onClick: this.handleBannerClick,
                    onMouseEnter: this.onMouseEnter,
                    onMouseLeave: this.onMouseLeave,
                    onMouseMove: this.onMouseMove
                }}
            >
                <Tracker {...{ cursorWidth }} />
                <SongBannerTitle />
                <SongBannerTimer />
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateBannerStore }
)(SongBanner)
