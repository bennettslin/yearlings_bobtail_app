import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ALL_DOT_KEYS } from '../../constants/dots'
import { convertTrueFalseKeysToBitNumber } from '../../helpers/bitHelper'

import AccessIcons from '../AccessIcon/AccessIcons'

import {
    NAVIGATION_LEFT_KEY,
    NAVIGATION_RIGHT_KEY,
    NAVIGATION_UP_KEY,
    NAVIGATION_DOWN_KEY
} from '../../constants/access'

const mapStateToProps = ({
    isLyricExpanded,
    canLyricRender,
    renderableStore,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys
}) => ({
    isLyricExpanded,
    canLyricRender,
    renderableAnnotationIndex: renderableStore.renderableAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys
})

class LyricAccess extends Component {

    static propTypes = {

        // From Redux.
        canLyricRender: PropTypes.bool.isRequired,
        renderableAnnotationIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedDotsIndex: PropTypes.number.isRequired,
        selectedDotKeys: PropTypes.object.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender
    }

    // componentDidUpdate() {
    //     console.warn('LyricAccess rendered.')
    // }

    render() {

        const {
                isLyricExpanded,
                renderableAnnotationIndex,
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

            showUpDown = Boolean(
                !selectedDotsIndex &&
                !renderableAnnotationIndex
            )

        return (
            <Fragment>
                <AccessIcons
                    accessIconsName="lyricLeftRight"
                    inLyric
                    accessKeys={[
                        {
                            accessKey: NAVIGATION_LEFT_KEY,
                            showIfAccessed: showLeftRight
                        },
                        {
                            accessKey: NAVIGATION_RIGHT_KEY,
                            showIfAccessed: showLeftRight
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

export default connect(mapStateToProps)(LyricAccess)
