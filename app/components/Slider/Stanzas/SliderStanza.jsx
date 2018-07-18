import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderVerse from './SliderVerse'
import { OVERLAP_MARGIN_SLIDER_STANZA } from '../../../constants/responsive'

const sliderStanzaPropTypes = {
    isLastStanza: PropTypes.bool.isRequired,
    firstVerseIndex: PropTypes.number.isRequired,
    verseTimes: PropTypes.array.isRequired,
    endTime: PropTypes.number.isRequired,
    songTotalTime: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
}

const SliderStanza = ({

    isLastStanza,
    firstVerseIndex,
    verseTimes,

    // Renaming for clarity.
    endTime: stanzaEndTime,

    songTotalTime,
    type

}) => {

    const
        stanzaStartTime = verseTimes[0],

        /**
         * Width of stanza is exactly proportionate to its duration within the
         * song. However, each stanza then adds padding of fixed width. As
         * such, its verse widths remain proportionate to their duration within
         * the stanza, but *not* within the song.
         */
        stanzaRightPercentage =
            (songTotalTime - stanzaEndTime) / songTotalTime * 100,

        formattedStanzaRight =
            isLastStanza ?
                `${stanzaRightPercentage}%` :
                `calc(${stanzaRightPercentage}% - ${
                    OVERLAP_MARGIN_SLIDER_STANZA
                }px)`,

        /**
         * Stanza width ends where the next one begins. Its right edge that
         * gets overlapped by the next stanza is not included in any slider
         * touch calculations. The last stanza has no overlapped right edge.
         */
        stanzaWidthPercentage =
            (stanzaEndTime - stanzaStartTime) / songTotalTime * 100,

        formattedStanzaWidth =
            isLastStanza ?
                `${stanzaWidthPercentage}%` :
                `calc(${stanzaWidthPercentage}% + ${
                    OVERLAP_MARGIN_SLIDER_STANZA
                }px)`,

        stanzaStyle = {
            right: formattedStanzaRight,
            width: formattedStanzaWidth
        },

        stanzaDuration = stanzaEndTime - stanzaStartTime

    return (
        <div
            className={cx(
                'SliderStanza',
                `SliderStanza__${type}`,
                'bgColour__sliderStanza__pattern',
                `bgColour__stanza__${type}`
            )}
            style={stanzaStyle}
        >
            {/* This is the tab's box shadow. */}
            <div className={cx(
                'SliderStanza__tab',
                'SliderStanza__tabShadow',
                'boxShadow__sliderStanza'
            )}/>

            <div className={cx(
                'SliderStanza__sheet',
                'boxShadow__sliderStanza',
                'bgColour__sliderStanza__pattern',
                `bgColour__stanza__${type}`,
                'absoluteFullContainer'
            )}>
                <div className={cx(
                    'SliderVerses'
                )}>
                    {verseTimes.map((verseTime, index) => {

                        /**
                         * Slider verses are not concerned with their times
                         * respective to the song's total time. They only know
                         * their times relative to the stanza.
                         */
                        const
                            relativeStartTime = verseTime - stanzaStartTime,

                            /**
                             * If it's the last verse, its relative end time is
                             * the stanza's relative total time. Otherwise,
                             * it's the next verse's start time.
                             */
                            relativeEndTime =
                                index === verseTimes.length - 1 ?
                                    stanzaDuration :
                                    verseTimes[index + 1] - stanzaStartTime,

                            // Pass absolute times for slider cursor.
                            // FIXME: This maybe shouldn't be needed eventually?
                            absoluteEndTime =
                                index === verseTimes.length - 1 ?
                                    stanzaEndTime :
                                    verseTimes[index + 1],

                            /**
                             * Let cursor know what percentage of the width bar
                             * it should take up when it's full.
                             */
                            fullCursorRatio =
                                (absoluteEndTime - verseTime)
                                / (stanzaEndTime - verseTime)

                        return (
                            <SliderVerse
                                key={index}
                                {...{
                                    verseIndex: firstVerseIndex + index,
                                    relativeStartTime,
                                    relativeEndTime,
                                    stanzaDuration,

                                    startTime: verseTime,
                                    stanzaEndTime: absoluteEndTime,
                                    fullCursorRatio
                                }}
                            />
                        )
                    })}
                </div>
            </div>

            {/* This tab covers the sheet's box shadow. */}
            <div className={cx(
                'SliderStanza__tab',
                'SliderStanza__tabTop',
                'bgColour__sliderStanza__pattern',
                `bgColour__stanza__${type}`
            )}/>
        </div>
    )
}

SliderStanza.propTypes = sliderStanzaPropTypes

export default SliderStanza
