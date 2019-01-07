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
    lyricStore: { lyricAnnotationIndex },
    toggleStore: {
        isNavShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    dotsStore: { dotsBitNumber }
}) => ({
    isLyricExpanded,
    lyricAnnotationIndex,
    isNavShown,
    isDotsSlideShown,
    dotsBitNumber
})

class LyricAccess extends PureComponent {

    static propTypes = {

        // From Redux.
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired
    }

    render() {

        const {
                isLyricExpanded,
                lyricAnnotationIndex,
                isNavShown,
                isDotsSlideShown,
                dotsBitNumber
            } = this.props,

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            hasSelectedDots = Boolean(convertTrueFalseKeysToBitNumber({
                keysArray: ALL_DOT_KEYS,
                trueFalseObject: selectedDotKeys
            })),

            showLeftRight = Boolean(
                /**
                 * Must have at least one selected dot, and no selected
                 * annotation.
                 */
                hasSelectedDots && !lyricAnnotationIndex && (
                    (
                        // Must not show nav or have dots section open...
                        !isNavShown &&
                        !isDotsSlideShown
                    ) || (
                        // ... or else have lyric expanded.
                        isLyricExpanded
                    )
                )
            ),

            showUpDown = Boolean(
                !isDotsSlideShown &&
                !lyricAnnotationIndex
            )

        return (
            <___>
                <AccessLetters
                    {...{
                        accessIconsName: 'lyricLeftRight',
                        showIfAccessed: showLeftRight,
                        accessKeys: [
                            ARROW_LEFT,
                            ARROW_RIGHT
                        ]
                    }}
                />
                <AccessLetters
                    {...{
                        accessIconsName: 'lyricUpDown',
                        showIfAccessed: showUpDown,
                        accessKeys: [
                            ARROW_UP,
                            ARROW_DOWN
                        ]
                    }}
                />
            </___>
        )
    }
}

export default connect(mapStateToProps)(LyricAccess)
