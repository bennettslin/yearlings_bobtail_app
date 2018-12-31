import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetters from '../../Access/Letters'

import {
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY
} from 'constants/access'

const mapStateToProps = ({
    lyricStore: { isLyricLogue }
}) => ({
    isLyricLogue
})

class SliderAccess extends PureComponent {

    static propTypes = {
        // From Redux.
        isLyricLogue: PropTypes.bool.isRequired
    }

    render() {
        const {
            isLyricLogue
        } = this.props

        return (
            <AccessLetters
                accessIconsName="sliderRewindForward"
                showIfAccessed={!isLyricLogue}
                accessKeys={[
                    AUDIO_REWIND_KEY,
                    AUDIO_FAST_FORWARD_KEY
                ]}
            />
        )
    }
}

export default connect(mapStateToProps)(SliderAccess)
