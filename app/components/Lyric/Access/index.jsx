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
    isLyricExpanded,
    renderStore: { canLyricRender },
    renderedStore: { renderedAnnotationIndex },
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys
}) => ({
    isLyricExpanded,
    canLyricRender,
    renderedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys
})

class LyricAccess extends Component {

    static propTypes = {

        // From Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderedAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender
    }

    // componentDidUpdate() {
    //     logger.warn('LyricAccess rendered.')
    // }

    render() {

        const {
                isLyricExpanded,
                renderedAnnotationIndex,
                selectedCarouselNavIndex,
                selectedDotsIndex,
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
                        selectedCarouselNavIndex &&
                        !selectedDotsIndex
                    ) || (
                        // ... or else have lyric section open.
                        isLyricExpanded
                    )
                )
            ),

            showUpDown = Boolean(
                !selectedDotsIndex &&
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
