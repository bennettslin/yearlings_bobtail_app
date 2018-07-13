import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ALL_DOT_KEYS } from '../../constants/dots'
import { convertTrueFalseKeysToBitNumber } from '../../helpers/bitHelper'

import AccessIcons from '../AccessIcon/AccessIcons'

import {
    NAVIGATION_ENTER_KEY,
    NAVIGATION_LEFT_KEY,
    NAVIGATION_RIGHT_KEY,
    NAVIGATION_UP_KEY,
    NAVIGATION_DOWN_KEY
} from '../../constants/access'

const mapStateToProps = ({
    isLyricExpanded,
    canLyricRender,
    renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys,
    interactivatedVerseIndex
}) => ({
    isLyricExpanded,
    canLyricRender,
    renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys,
    interactivatedVerseIndex
})

class LyricColumnAccess extends Component {

    static propTypes = {

        // From Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender
    }

    // componentDidUpdate() {
    //     console.warn('LyricColumnAccess rendered.')
    // }

    render() {

        const {
                isLyricExpanded,
                renderableAnnotationIndex,
                selectedCarouselNavIndex,
                selectedDotsIndex,
                selectedDotKeys,
                interactivatedVerseIndex
            } = this.props,

            hasSelectedDots = Boolean(convertTrueFalseKeysToBitNumber({
                keysArray: ALL_DOT_KEYS,
                trueFalseObject: selectedDotKeys
            })),

            showLeftRight = Boolean(
                // Must have at least one selected dot, and no selected annotation.
                hasSelectedDots && !renderableAnnotationIndex && (
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

            // Must not have interactivated verse.
            showEnter = showLeftRight && interactivatedVerseIndex < 0,

            showUpDown = Boolean(
                !selectedDotsIndex &&
                !renderableAnnotationIndex
            )

        return (
            <Fragment>
                <AccessIcons
                    accessIconsName="lyricLeftRightEnter"
                    inLyric
                    accessKeys={[
                        {
                            accessKey: NAVIGATION_LEFT_KEY,
                            showIfAccessed: showLeftRight
                        },
                        {
                            accessKey: NAVIGATION_RIGHT_KEY,
                            showIfAccessed: showLeftRight
                        },
                        {
                            accessKey: NAVIGATION_ENTER_KEY,
                            showIfAccessed: showEnter,
                            beginsCluster: true
                        }
                    ]}
                />
                <AccessIcons
                    accessIconsName="lyricUpDown"
                    inLyric
                    accessKeys={[
                        {
                            accessKey: NAVIGATION_UP_KEY,
                            showIfAccessed: showUpDown
                        },
                        {
                            accessKey: NAVIGATION_DOWN_KEY,
                            showIfAccessed: showUpDown
                        }
                    ]}
                />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(LyricColumnAccess)
