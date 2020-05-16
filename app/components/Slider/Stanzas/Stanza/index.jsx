import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import { getFormTypeForStanza } from '../../../../album/api/stanzas'
import {
    getSongTotalTime,
    getStartTimeForStanza,
    getEndTimeForStanza
} from '../../../../album/api/time'

import SliderVerses from './Verses'

import { CSS_OVERLAP_MARGIN_X_SLIDER } from '../../../../constants/responsive'

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
            stanzaEndTime = getEndTimeForStanza(lyricSongIndex, stanzaIndex),
            stanzaFormType = getFormTypeForStanza(lyricSongIndex, stanzaIndex),
            stanzaStartTime = getStartTimeForStanza(
                lyricSongIndex,
                stanzaIndex
            ),

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
                    CSS_OVERLAP_MARGIN_X_SLIDER
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
                    CSS_OVERLAP_MARGIN_X_SLIDER
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
                        `SliderStanza__${stanzaFormType}`,
                        logicSelectors
                    ),
                    style: stanzaStyle
                }}
            >
                <div className={cx(
                    'SliderStanza__sheet',
                    'bgColour__sliderStanza__pattern',
                    `bgColour__formType__${stanzaFormType}`,
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
                    'bgColour__sliderStanza__pattern',
                    'bgColour__sliderStanza__pattern__reverse',
                    `bgColour__formType__${stanzaFormType}`
                )}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanza)
