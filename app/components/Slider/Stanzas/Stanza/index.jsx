import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getStanzaConfig } from 'album/api/stanzas'
import { getSongTotalTime } from 'album/api/time'

import SliderVerses from './Verses'

import { LS_OVERLAP_MARGIN_X_SLIDER } from 'constants/responsive'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class SliderStanza extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,

        // From parents.
        stanzaIndex: PropTypes.number.isRequired,
        logicSelectors: PropTypes.string.isRequired
    }

    render() {
        const {
                lyricSongIndex,
                stanzaIndex,
                logicSelectors
            } = this.props,
            {
                stanzaVerseConfigs,
                stanzaEndTime,
                stanzaType
            } = getStanzaConfig(
                lyricSongIndex,
                stanzaIndex
            ),

            { verseStartTime: stanzaStartTime } = stanzaVerseConfigs[0],

            songTotalTime = getSongTotalTime(lyricSongIndex),

            /**
             * Width of stanza is exactly proportionate to its duration within
             * the song. However, each stanza then adds padding of fixed width.
             * As such, its verse widths remain proportionate to their duration
             * within the stanza, but *not* within the song.
             */
            stanzaRightPercentage =
                (songTotalTime - stanzaEndTime) / songTotalTime * 100,

            formattedStanzaRight =
                `calc(${stanzaRightPercentage}% - ${
                    LS_OVERLAP_MARGIN_X_SLIDER
                }px)`,

            /**
             * Stanza width ends where the next one begins. Its right edge that
             * gets overlapped by the next stanza is not included in any slider
             * touch calculations. The last stanza has no overlapped right edge.
             */
            stanzaWidthPercentage =
                (stanzaEndTime - stanzaStartTime) / songTotalTime * 100,

            formattedStanzaWidth =
                `calc(${stanzaWidthPercentage}% + ${
                    LS_OVERLAP_MARGIN_X_SLIDER
                }px)`,

            stanzaStyle = {
                right: formattedStanzaRight,
                width: formattedStanzaWidth
            }

        return (
            <div
                {...{
                    className: cx(
                        'SliderStanza',
                        `SliderStanza__${stanzaType}`,
                        logicSelectors
                    ),
                    style: stanzaStyle
                }}
            >
                <div className={cx(
                    'SliderStanza__sheet',
                    'boxShadow__sliderStanza',
                    'bgColour__sliderStanza__pattern',
                    `bgColour__stanzaType__${stanzaType}`,
                    'abF'
                )}>
                    <SliderVerses
                        {...{
                            stanzaIndex,
                            stanzaDuration: stanzaEndTime - stanzaStartTime
                        }}
                    />
                </div>

                {/* This tab covers the sheet's box shadow. */}
                <div className={cx(
                    'SliderStanza__tab',
                    'boxShadow__sliderStanzaTab',
                    'bgColour__sliderStanza__pattern',
                    'bgColour__sliderStanza__pattern__reverse',
                    `bgColour__stanzaType__${stanzaType}`
                )}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanza)
