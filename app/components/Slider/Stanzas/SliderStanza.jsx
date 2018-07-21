import React, { Component } from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import SliderVerses from '../Verses/SliderVerses'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

import { OVERLAP_MARGIN_SLIDER_STANZA } from '../../../constants/responsive'

class SliderStanza extends Component {

    static propTypes = {
        stanzaIndex: PropTypes.number.isRequired,
        isLastStanza: PropTypes.bool.isRequired,
        stanzaVerseConfigs: PropTypes.array.isRequired,
        stanzaEndTime: PropTypes.number.isRequired,
        songTotalTime: PropTypes.number.isRequired,
        stanzaType: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                stanzaIndex,
                isLastStanza,
                songTotalTime,

                stanzaVerseConfigs,
                stanzaEndTime,
                stanzaType,

            } = this.props,

            stanzaStartTime = stanzaVerseConfigs[0].verseStartTime,

            /**
             * Width of stanza is exactly proportionate to its duration within
             * the song. However, each stanza then adds padding of fixed width.
             * As such, its verse widths remain proportionate to their duration
             * within the stanza, but *not* within the song.
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
                    // "Child component stanza index."

                    // Aligned selector when on cursor.
                    `ChS${stanzaIndex}`,

                    /**
                     * General selector when before cursor, general sibling
                     * selector when after cursor.
                     */
                    'ChS',

                    'SliderStanza',

                    `SliderStanza__${stanzaType}`,
                    'bgColour__sliderStanza__pattern',
                    `bgColour__stanza__${stanzaType}`
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
                    `bgColour__stanza__${stanzaType}`,
                    'absoluteFullContainer'
                )}>
                    <SliderVerses
                        {...{
                            stanzaVerseConfigs,
                            stanzaEndTime,
                            stanzaDuration
                        }}
                    />
                </div>

                {/* This tab covers the sheet's box shadow. */}
                <div className={cx(
                    'SliderStanza__tab',
                    'SliderStanza__tabTop',
                    'bgColour__sliderStanza__pattern',
                    `bgColour__stanza__${stanzaType}`
                )}/>
            </div>
        )
    }
}

export default SliderStanza
