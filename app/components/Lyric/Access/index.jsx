import React, {
    Component, Fragment
} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ALL_DOT_KEYS } from 'constants/dots'
import { convertTrueFalseKeysToBitNumber } from 'helpers/bitHelper'

import AccessLetters from '../../Access/Letters'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN
} from 'constants/access'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    renderedStore: { renderedAnnotationIndex },
    toggleStore: {
        isCarouselShown,
        isDotsSlideShown,
        isLyricExpanded
    },
    selectedDotKeys
}) => ({
    canLyricRender,
    isLyricExpanded,
    renderedAnnotationIndex,
    isCarouselShown,
    isDotsSlideShown,
    selectedDotKeys
})

class LyricAccess extends Component {

    static propTypes = {

        // From Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        selectedDotKeys: PropTypes.object.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender
    }

    render() {

        const {
                isLyricExpanded,
                renderedAnnotationIndex,
                isCarouselShown,
                isDotsSlideShown,
                selectedDotKeys
            } = this.props,

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
            <Fragment>
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
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(LyricAccess)
