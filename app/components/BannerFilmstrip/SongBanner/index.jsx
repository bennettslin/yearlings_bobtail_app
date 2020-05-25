import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { updateBannerStore } from '../../../redux/banner/action'

import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import VerseDispatcher from '../../../dispatchers/VerseDispatcher'

import Tracker from '../../Tracker'
import SongBannerTimer from './Timer'
import SongBannerTitle from './Title'

import { getSongIsLogue } from '../../../album/api/songs'
import {
    getDurationForSong,
    getStartTimeForVerse
} from '../../../album/api/time'

import { getClientX, getElementRatioForClientX } from '../../../helpers/dom'
import { populateRefs } from '../../../helpers/ref'
import { getVerseIndexforRatio } from '../../../helpers/verse'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'

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

    state = {
        clientX: 0
    }

    constructor(props) {
        super(props)
        this.bannerElement = React.createRef()
    }

    componentDidUpdate(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (prevSongIndex !== selectedSongIndex) {
            // On the off chance that the song banner is still being hovered.
            this.onMouseMove()
        }
    }

    getCursorWidth() {
        const {
                isBannerHovering,
                selectedSongIndex,
                selectedTime,
                bannerHoverTime
            } = this.props,

            playedTime = isBannerHovering ? bannerHoverTime : selectedTime,
            songDuration = getDurationForSong(selectedSongIndex)

        return playedTime / songDuration * 100
    }

    getVerseIndexFromEvent = e => {
        const clientX = e ? getClientX(e) : this.state.clientX,
            {
                left,
                width
            } = this.bannerElement.current.getBoundingClientRect()

        if (Number.isFinite(clientX)) {
            this.setState({ clientX })

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

        return -1
    }

    handleBannerClick = e => {
        const {
            selectedSongIndex,
            isSliderMoving,
            isActivated,
            isBannerHovering,
            bannerHoverVerseIndex
        } = this.props

        if (
            // If user agent desktop, banner must be hovering.
            (IS_USER_AGENT_DESKTOP && !isBannerHovering) ||
            getSongIsLogue(selectedSongIndex)
        ) {
            // Do not register click in logue.
            return
        }

        this.stopPropagation(e)

        if (isSliderMoving || isActivated) {
            // Do nothing if lyrics locked, but still register click.
            return
        }

        const verseIndex =
            IS_USER_AGENT_DESKTOP ?
                // On desktop, get from banner hover.
                bannerHoverVerseIndex :

                // On mobile, get from click event.
                this.getVerseIndexFromEvent(e)

        this.dispatchVerse({
            selectedVerseIndex: verseIndex,
            scrollLog: `Select banner verse ${verseIndex}.`
        })

        // Once clicked, do not allow another click on the same hover.
        this.onMouseLeave()
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

        const bannerHoverVerseIndex = this.getVerseIndexFromEvent(e)

        this.props.updateBannerStore({
            bannerHoverVerseIndex,
            bannerHoverTime: getStartTimeForVerse(
                selectedSongIndex,
                bannerHoverVerseIndex
            )
        })
    }

    onMouseLeave = () => {
        this.props.updateBannerStore()
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    getStopPropagation = dispatch => {
        this.stopPropagation = dispatch
    }

    render() {
        const {
                isPlaying,
                isSmallBannerText,
                isSliderMoving,
                isActivated,
                isBannerHovering,
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

                        isBannerHovering &&
                        !isSliderMoving &&
                        !isActivated &&
                        !isSelectedLogue &&
                            'dropShadow__lightHover',

                        'ovH',
                        'Rancho'
                    ),
                    onClick: this.handleBannerClick,

                    ...IS_USER_AGENT_DESKTOP && {
                        onMouseEnter: this.onMouseEnter,
                        onMouseMove: this.onMouseMove,
                        onMouseLeave: this.onMouseLeave
                    }
                }}
            >
                <Tracker {...{ cursorWidth }} />
                <SongBannerTitle />
                <SongBannerTimer />
                <StopPropagationDispatcher {...{ ref: this.getStopPropagation }} />
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateBannerStore }
)(SongBanner)
