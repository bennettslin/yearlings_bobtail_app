import React, { PureComponent, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ALL_DOT_KEYS } from 'constants/dots'
import { convertTrueFalseKeysToBitNumber } from 'helpers/bit'
import { getDotKeysFromBitNumber } from 'helpers/dot'

import AccessLetters from '../../Access/Letters'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN
} from 'constants/access'

const mapStateToProps = ({
    renderedStore: { renderedAnnotationIndex },
    toggleStore: {
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    dotsStore: { dotsBitNumber }
}) => ({
    isLyricExpanded,
    renderedAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    dotsBitNumber
})

class LyricAccess extends PureComponent {

    static propTypes = {

        // From Redux.
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired
    }

    render() {

        const {
                isLyricExpanded,
                renderedAnnotationIndex,
                isCarouselShown,
                isDotsSlideShown,
                dotsBitNumber
            } = this.props,

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            hasSelectedDots = Boolean(convertTrueFalseKeysToBitNumber({
                keysArray: ALL_DOT_KEYS,
                trueFalseObject: selectedDotKeys
            })),

            showLeftRight = Boolean(
                // Must have at least one selected dot, and no selected annotation.
                hasSelectedDots && !renderedAnnotationIndex && (
                    (
                        // Must show carousel and not have dots section open...
                        isCarouselShown &&
                        !isDotsSlideShown
                    ) || (
                        // ... or else have lyric section open.
                        isLyricExpanded
                    )
                )
            ),

            showUpDown = Boolean(
                !isDotsSlideShown &&
                !renderedAnnotationIndex
            )

        return (
            <___>
                <AccessLetters
                    accessIconsName="lyricLeftRight"
                    showIfAccessed={showLeftRight}
                    inLyric
                    accessKeys={[
                        ARROW_LEFT,
                        ARROW_RIGHT
                    ]}
                />
                <AccessLetters
                    accessIconsName="lyricUpDown"
                    showIfAccessed={showUpDown}
                    inLyric
                    accessKeys={[
                        ARROW_UP,
                        ARROW_DOWN
                    ]}
                />
            </___>
        )
    }
}

export default connect(mapStateToProps)(LyricAccess)
