import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessIconsBlock from '../access/access-icons-block'
import { NAVIGATION_ENTER_KEY,
         AUDIO_REWIND_KEY,
         AUDIO_FAST_FORWARD_KEY } from '../../constants/access'

const mapStateToProps = ({
    interactivatedVerseIndex
}) => ({
    interactivatedVerseIndex
})

const sliderAccessPropTypes = {

    // From Redux.
    interactivatedVerseIndex: PropTypes.number.isRequired
}

const SliderAccess = ({

    interactivatedVerseIndex

}) => (
    <div>
        <AccessIconsBlock
            className="rewind-forward"
            accessIconKeys={[
                AUDIO_REWIND_KEY,
                AUDIO_FAST_FORWARD_KEY
            ]}
            accessKeysShown
        />
        <AccessIconsBlock
            className="enter"
            accessIconKeys={[
                NAVIGATION_ENTER_KEY
            ]}
            accessKeysShown={interactivatedVerseIndex >= 0}
        />
    </div>
)

SliderAccess.propTypes = sliderAccessPropTypes

export default connect(mapStateToProps)(SliderAccess)
