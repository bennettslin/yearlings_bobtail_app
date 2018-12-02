// Temporary wrapper for remaining class names. Slowly separate them out.

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getPrefixedDotLetterClassNames } from 'helpers/dot'
import { getStanzaIndexForVerseIndex } from '../helper'

class LogicWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.

        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,

        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                selectedDotKeys,
                isPlaying,
                isSliderMoving,
                renderedSongIndex,
                renderedVerseIndex,
                sliderVerseIndex,
                interactivatedVerseIndex,
                isVerseBarAbove,
                isVerseBarBelow,
                children
            } = this.props,

            areVerseBarsHidden = !isVerseBarAbove && !isVerseBarBelow,

            /**
             * If slider touched, compare stanza to slider verse. Otherwise,
             * compare it to selected verse.
             */
            cursorVerseIndex = sliderVerseIndex > -1 ?
                sliderVerseIndex :
                renderedVerseIndex,

            cursorStanzaIndex = getStanzaIndexForVerseIndex(
                renderedSongIndex, cursorVerseIndex
            )

        return (
            <div
                {...{
                    className: cx(
                        'LogicWrapper',

                        getPrefixedDotLetterClassNames(
                            selectedDotKeys,
                            // "Root selected dot letter."
                            'RsD'
                        ),

                        // "Root cursored stanza index."
                        `RcS${cursorStanzaIndex}`,

                        isSliderMoving ?
                            // "Root slider verse index."
                            `RsV${sliderVerseIndex}` :
                            // "Root default verse index."
                            `RdV${renderedVerseIndex}`,

                        isPlaying &&
                            // "Root playing verse index."
                            `RpV${renderedVerseIndex}`,

                        interactivatedVerseIndex < 0 &&
                            // "Root non-interactivated verse index."
                            `RnV${cursorVerseIndex}`,

                        areVerseBarsHidden && interactivatedVerseIndex < 0 &&
                            // "Root cursored lyric verse."
                            `RlV${cursorVerseIndex}`
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    sessionStore: { interactivatedVerseIndex },
    audioStore: { isPlaying },
    dotsStore: {
        dotsBitNumber,
        ...selectedDotKeys
    },
    toggleStore: {
        isVerseBarAbove,
        isVerseBarBelow
    },
    renderedStore: {
        renderedSongIndex,
        renderedVerseIndex
    },
    sliderStore: {
        isSliderMoving,
        sliderVerseIndex
    }
}) => ({
    interactivatedVerseIndex,
    dotsBitNumber,
    selectedDotKeys,
    isPlaying,
    renderedSongIndex,
    renderedVerseIndex,
    isSliderMoving,
    sliderVerseIndex,
    isVerseBarAbove,
    isVerseBarBelow
})

export default connect(mapStateToProps)(LogicWrapper)
