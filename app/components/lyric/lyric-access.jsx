import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { ALL_DOT_KEYS } from '../../constants/dots'
import { convertTrueFalseKeysToBitNumber } from '../../helpers/bit-helper'

import AccessIconsBlock from '../access/access-icons-block'
import { NAVIGATION_ENTER_KEY,
         NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY,
         NAVIGATION_UP_KEY,
         NAVIGATION_DOWN_KEY } from '../../constants/access'

const mapStateToProps = ({
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys,
    interactivatedVerseIndex
}) => ({
    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys,
    interactivatedVerseIndex
})

const lyricAccessPropTypes = {

    // From Redux.
    selectedAnnotationIndex: PropTypes.number.isRequired,
    selectedCarouselNavIndex: PropTypes.number.isRequired,
    selectedDotsIndex: PropTypes.number.isRequired,
    selectedDotKeys: PropTypes.object.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired
}

const LyricAccess = ({

    selectedAnnotationIndex,
    selectedCarouselNavIndex,
    selectedDotsIndex,
    selectedDotKeys,
    interactivatedVerseIndex

}) => {

    const hasSelectedDots = Boolean(convertTrueFalseKeysToBitNumber({
        keysArray: ALL_DOT_KEYS,
        trueFalseObject: selectedDotKeys
    }))

    return (
        <div>
            <div className="left-right-enter">
                <AccessIconsBlock
                    className="left-right"
                    accessIconKeys={[
                        NAVIGATION_LEFT_KEY,
                        NAVIGATION_RIGHT_KEY
                    ]}
                    accessKeysShown={Boolean(
                        selectedCarouselNavIndex &&
                        hasSelectedDots &&
                        !selectedDotsIndex &&
                        !selectedAnnotationIndex
                    )}
                />

                <AccessIconsBlock
                    className="enter"
                    accessIconKeys={[
                        NAVIGATION_ENTER_KEY
                    ]}
                    accessKeysShown={Boolean(
                        selectedCarouselNavIndex &&
                        hasSelectedDots &&
                        !selectedDotsIndex &&
                        !selectedAnnotationIndex &&
                        interactivatedVerseIndex < 0
                    )}
                />
            </div>

            <AccessIconsBlock
                className="up-down"
                accessIconKeys={[
                    NAVIGATION_UP_KEY,
                    NAVIGATION_DOWN_KEY
                ]}
                accessKeysShown={Boolean(
                    !selectedDotsIndex &&
                    !selectedAnnotationIndex
                )}
            />
        </div>
    )
}

LyricAccess.propTypes = lyricAccessPropTypes

export default connect(mapStateToProps)(LyricAccess)
