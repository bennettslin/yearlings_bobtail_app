import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import isFinite from 'lodash/isfinite'

import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import VerseDispatcher from '../../../dispatchers/VerseDispatcher'

import Tracker from '../../Tracker'
import PlayTimer from './Timer'
import SongTitle from './Title'

import { getSongIsLogue } from '../../../album/api/songs'
import { getSongTotalTime } from '../../../album/api/time'

import { getClientX, getElementRatioForClientX } from 'helpers/dom'
import { populateRefs } from 'helpers/ref'
import { getVerseIndexforRatio } from 'helpers/verse'

const mapStateToProps = ({
    audioStore: { isPlaying },
    responsiveStore: { isSmallBannerText },
    lyricStore: { lyricSongIndex },
    selectedStore: {
        selectedSongIndex,
        selectedTime
    }
}) => ({
    isPlaying,
    isSmallBannerText,
    lyricSongIndex,
    selectedSongIndex,
    selectedTime
})

class SongBanner extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        isSmallBannerText: PropTypes.bool.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props)
        this.bannerElement = React.createRef()
    }

    getCursorWidth() {
        const {
                lyricSongIndex,
                selectedTime
            } = this.props,

            totalTime = getSongTotalTime(lyricSongIndex)

        return selectedTime / totalTime * 100
    }

    handleBannerClick = (e) => {

        const { selectedSongIndex } = this.props

        if (getSongIsLogue(selectedSongIndex)) {
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
                isSmallBannerText
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
                        'dropShadow',
                        'dropShadow__brightHover',
                        isPlaying ? 'textShadow__light' : 'textShadow__dark',
                        'ovH',
                        'Rancho'
                    ),
                    onClick: this.handleBannerClick
                }}
            >
                <Tracker {...{ cursorWidth }} />
                <SongTitle />
                <PlayTimer />
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(SongBanner)
