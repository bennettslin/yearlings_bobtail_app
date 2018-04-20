import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessIcons from '../access/AccessIcons'
import { NAVIGATION_ENTER_KEY,
         AUDIO_REWIND_KEY,
         AUDIO_FAST_FORWARD_KEY } from '../../constants/access'

import { getSongIsLogue } from '../../helpers/dataHelper'

const mapStateToProps = ({
    selectedSongIndex,
    interactivatedVerseIndex
}) => ({
    selectedSongIndex,
    interactivatedVerseIndex
})

const sliderAccessPropTypes = {

    // From Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired
}

const SliderAccess = ({

    selectedSongIndex,
    interactivatedVerseIndex

}) => {

    const isLogue = getSongIsLogue(selectedSongIndex),
        isVerseInteractivated = interactivatedVerseIndex >= 0

    return [(
        <AccessIcons
            key="rewindForward"
            className="rewindForward"
            accessIconKeys={[
                AUDIO_REWIND_KEY,
                AUDIO_FAST_FORWARD_KEY
            ]}
            accessKeysShown={!isLogue}
        />
    ), (
        <AccessIcons
            key="enter"
            className="enter"
            accessIconKeys={[
                NAVIGATION_ENTER_KEY
            ]}
            accessKeysShown={!isLogue && isVerseInteractivated}
        />
    )]
}

SliderAccess.propTypes = sliderAccessPropTypes

export default connect(mapStateToProps)(SliderAccess)
