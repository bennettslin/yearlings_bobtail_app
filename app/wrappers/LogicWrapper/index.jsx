import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getDotKeysFromBitNumber,
    getPrefixedDotLetterClassNames
} from 'helpers/dot'
import { getStanzaIndexForVerseIndex } from './helper'

class LogicWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.

        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,

        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                dotsBitNumber,
                isPlaying,
                isSliderMoving,
                lyricSongIndex,
                lyricVerseIndex,
                sliderVerseIndex,
                activatedVerseIndex,
                isVerseBarAbove,
                isVerseBarBelow,
                children
            } = this.props,

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            areVerseBarsHidden = !isVerseBarAbove && !isVerseBarBelow,

            /**
             * If slider touched, compare stanza to slider verse. Otherwise,
             * compare it to selected verse.
             */
            cursorVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                lyricVerseIndex,

            cursorStanzaIndex = getStanzaIndexForVerseIndex(
                lyricSongIndex, cursorVerseIndex
            )

        return (
            <div
                {...{
                    className: cx(
                        'LogicWrapper',

                        // "Root cursored stanza index."
                        `RcS${cursorStanzaIndex}`,

                        isSliderMoving ?
                            // "Root slider verse index."
                            `RsV${sliderVerseIndex}` :
                            // "Root default verse index."
                            `RdV${lyricVerseIndex}`,

                        isPlaying &&
                            // "Root playing verse index."
                            `RpV${lyricVerseIndex}`,

                        activatedVerseIndex < 0 &&
                            // "Root non-activated verse index."
                            `RnV${cursorVerseIndex}`,

                        areVerseBarsHidden && activatedVerseIndex < 0 &&
                            // "Root cursored lyric verse."
                            `RlV${cursorVerseIndex}`,

                        getPrefixedDotLetterClassNames(
                            selectedDotKeys,
                            // "Root selected dot letter."
                            'RsD'
                        ),

                        !dotsBitNumber && 'LW__noSelectedDots'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    sessionStore: { activatedVerseIndex },
    audioStore: { isPlaying },
    dotsStore: { dotsBitNumber },
    verseBarsStore: {
        isVerseBarAbove,
        isVerseBarBelow
    },
    lyricStore: {
        lyricSongIndex,
        lyricVerseIndex
    },
    sliderStore: {
        isSliderMoving,
        sliderVerseIndex
    }
}) => ({
    activatedVerseIndex,
    dotsBitNumber,
    isPlaying,
    lyricSongIndex,
    lyricVerseIndex,
    isSliderMoving,
    sliderVerseIndex,
    isVerseBarAbove,
    isVerseBarBelow
})

export default connect(mapStateToProps)(LogicWrapper)
