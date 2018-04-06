import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessIconsBlock from '../access/AccessIconsBlock'
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

    return (
        <div>
            <AccessIconsBlock
                className="rewind-forward"
                accessIconKeys={[
                    AUDIO_REWIND_KEY,
                    AUDIO_FAST_FORWARD_KEY
                ]}
                accessKeysShown={!isLogue}
            />
            <AccessIconsBlock
                className="enter"
                accessIconKeys={[
                    NAVIGATION_ENTER_KEY
                ]}
                accessKeysShown={!isLogue && isVerseInteractivated}
            />
        </div>
    )
}

SliderAccess.propTypes = sliderAccessPropTypes

export default connect(mapStateToProps)(SliderAccess)
