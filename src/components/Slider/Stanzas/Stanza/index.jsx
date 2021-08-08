import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import SliderVerses from './Verses'
import { getFormTypeForStanza } from '../../../../api/album/stanzas'
import {
    getDurationForSong,
    getStartTimeForStanza,
    getEndTimeForStanza,
} from '../../../../api/album/time'
import { CSS_OVERLAP_MARGIN_X_SLIDER } from '../../../../constants/responsive'
import { getMapIsStanzaCursor } from '../../../../redux/cursor/selector'
import { mapLyricSongIndex } from '../../../../redux/lyric/selector'
import './style'

const SliderStanza = ({ stanzaIndex }) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isCursorStanza = useSelector(getMapIsStanzaCursor(stanzaIndex)),
        stanzaEndTime = getEndTimeForStanza(lyricSongIndex, stanzaIndex),
        stanzaFormType = getFormTypeForStanza(lyricSongIndex, stanzaIndex),
        stanzaStartTime = getStartTimeForStanza(
            lyricSongIndex,
            stanzaIndex,
        ),

        songDuration = getDurationForSong(lyricSongIndex),

        /**
         * Width of stanza is exactly proportionate to its duration within
         * the song. However, each stanza then adds padding of fixed width.
         * As such, its verse widths remain proportionate to their duration
         * within the stanza, but *not* within the song.
         */
        stanzaRightPercentage =
            (songDuration - stanzaEndTime) / songDuration * 100,

        formattedStanzaRight =
            `calc(${stanzaRightPercentage}% - ${
                CSS_OVERLAP_MARGIN_X_SLIDER
            }px)`,

        /**
         * Stanza width ends where the next one begins. Its right edge that
         * gets overlapped by the next stanza is not included in any slider
         * touch calculations. The last stanza has no overlapped right edge.
         */
        stanzaWidthPercentage =
            (stanzaEndTime - stanzaStartTime) / songDuration * 100,

        formattedStanzaWidth =
            `calc(${stanzaWidthPercentage}% + ${
                CSS_OVERLAP_MARGIN_X_SLIDER
            }px)`,

        stanzaStyle = {
            right: formattedStanzaRight,
            width: formattedStanzaWidth,
        }

    return (
        <div
            {...{
                className: cx(
                    'SliderStanza',
                    `SliderStanza__${stanzaFormType}`,
                    isCursorStanza && 'SliderStanza__cursor',
                ),
                style: stanzaStyle,
            }}
        >
            <div className={cx(
                'SliderStanza__sheet',
                'bgColour__sliderStanza__pattern',
                `bgColour__formType__${stanzaFormType}`,
                'abF',
            )}>
                <SliderVerses
                    {...{
                        stanzaIndex,
                        stanzaDuration: stanzaEndTime - stanzaStartTime,
                    }}
                />
            </div>

            {/* This tab covers the sheet's box shadow. */}
            <div className={cx(
                'SliderStanza__tab',
                'bgColour__sliderStanza__pattern',
                'bgColour__sliderStanza__pattern__reverse',
                `bgColour__formType__${stanzaFormType}`,
            )}/>
        </div>
    )
}

SliderStanza.propTypes = {
    stanzaIndex: PropTypes.number.isRequired,
}

export default memo(SliderStanza)
