import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import isFinite from 'lodash/isfinite'

import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import VerseDispatcher from '../../../dispatchers/VerseDispatcher'

import Tracker from '../../Tracker'
import SongBannerTimer from './Timer'
import SongBannerTitle from './Title'

import { getSongIsLogue } from '../../../album/api/songs'
import { getSongTotalTime } from '../../../album/api/time'

import { getClientX, getElementRatioForClientX } from 'helpers/dom'
import { populateRefs } from 'helpers/ref'
import { getVerseIndexforRatio } from 'helpers/verse'

const mapStateToProps = ({
    audioStore: { isPlaying },
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
        isSmallBannerText: PropTypes.bool.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props)
        this.bannerElement = React.createRef()
    }

    getCursorWidth() {
        const {
                selectedSongIndex,
                selectedTime
            } = this.props,

            totalTime = getSongTotalTime(selectedSongIndex)

        return selectedTime / totalTime * 100
    }

    handleBannerClick = (e) => {

        const {
            selectedSongIndex,
            isSliderMoving,
            isActivated
        } = this.props

        if (getSongIsLogue(selectedSongIndex)) {
            // Do nothing in logue.
            return
        }

        if (isSliderMoving || isActivated) {
            // Do nothing if lyrics locked, but still register click event.
            this.dispatchStopPropagation(e)
            return
        }

        const clientX = getClientX(e),
            { left, width } = this.bannerElement.current.getBoundingClientRect()

        if (isFinite(clientX)) {
            const { selectedSongIndex } = this.props,
                bannerRatio = getElementRatioForClientX({
                    clientX,
                    elementLeft: left,
                    elementWidth: width
                })

            const selectedVerseIndex = getVerseIndexforRatio(
                selectedSongIndex,
                bannerRatio
            )

            this.dispatchVerse({
                selectedVerseIndex,
                scrollLog: `Select banner verse ${selectedVerseIndex}.`
            })
        }

        this.dispatchStopPropagation(e)
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
                    onClick: this.handleBannerClick
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

export default connect(mapStateToProps)(SongBanner)
