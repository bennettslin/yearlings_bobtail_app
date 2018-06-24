import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessIcons from '../AccessIcon/AccessIcons'
import { NAVIGATION_ENTER_KEY,
         AUDIO_REWIND_KEY,
         AUDIO_FAST_FORWARD_KEY } from '../../constants/access'

import { getSongIsLogue } from '../../helpers/dataHelper'

const mapStateToProps = ({
    renderableSongIndex,
    interactivatedVerseIndex
}) => ({
    renderableSongIndex,
    interactivatedVerseIndex
})

const sliderAccessPropTypes = {

    // From Redux.
    renderableSongIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired
}

const SliderAccess = ({

    renderableSongIndex,
    interactivatedVerseIndex

}) => {

    const isLogue = getSongIsLogue(renderableSongIndex),
        isVerseInteractivated = interactivatedVerseIndex >= 0

    return [(
        <AccessIcons
            key="rewindForward"
            accessIconsName="sliderRewindForward"
            inSlider
            accessKeys={[
                {
                    accessKey: AUDIO_REWIND_KEY,
                    showIfAccessed: !isLogue
                },
                {
                    accessKey: AUDIO_FAST_FORWARD_KEY,
                    showIfAccessed: !isLogue
                }
            ]}
        />
    ), (
        <AccessIcons
            key="enter"
            accessIconsName="sliderEnter"
            inSlider
            accessKeys={[
                {
                    accessKey: NAVIGATION_ENTER_KEY,
                    showIfAccessed: !isLogue && isVerseInteractivated
                }
            ]}
        />
    )]
}

SliderAccess.propTypes = sliderAccessPropTypes

export default connect(mapStateToProps)(SliderAccess)
