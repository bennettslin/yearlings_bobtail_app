import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import isFinite from 'lodash/isfinite'

import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import VerseDispatcher from '../../../dispatchers/VerseDispatcher'

import PlayTimer from './Timer'
import SongTitle from './Title'

import { getSongTotalTime } from 'album/api/time'

import { getClientX, getElementRatioForClientX } from 'helpers/dom'
import { populateRefs } from 'helpers/ref'
import { getVerseIndexforRatio } from 'helpers/verse'

const mapStateToProps = ({
    responsiveStore: { isSmallBannerText },
    lyricStore: { lyricSongIndex },
    selectedStore: {
        selectedSongIndex,
        selectedTime
    }
}) => ({
    isSmallBannerText,
    lyricSongIndex,
    selectedSongIndex,
    selectedTime
})

class Banner extends PureComponent {

    static propTypes = {
        // Through Redux.
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
        const { isSmallBannerText } = this.props,
            cursorWidth = this.getCursorWidth()

        return (
            <div
                {...{
                    ref: this.bannerElement,
                    className: cx(
                        'Banner',
                        isSmallBannerText &&
                            'Cursor__smallText',
                        'dropShadow',
                        'textShadow__light',
                        'abF',
                        'ovH',
                        'Rancho'
                    ),
                    onClick: this.handleBannerClick
                }}
            >
                <div
                    {...{
                        className: cx(
                            'BannerTracker',
                            'abF'
                        ),
                        style: {
                            width: `${cursorWidth}%`
                        }
                    }}
                />
                <SongTitle />
                <PlayTimer />
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
                <VerseDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Banner)
