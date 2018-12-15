import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetters from '../../Access/Letters'

import {
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY
} from 'constants/access'

const mapStateToProps = ({
    renderedStore: { isRenderedLogue }
}) => ({
    isRenderedLogue
})

class SliderAccess extends PureComponent {

    static propTypes = {
        // From Redux.
        isRenderedLogue: PropTypes.bool.isRequired
    }

    render() {
        const {
            isRenderedLogue
        } = this.props

        return (
            <AccessLetters
                accessIconsName="sliderRewindForward"
                inSlider
                showIfAccessed={!isRenderedLogue}
                accessKeys={[
                    AUDIO_REWIND_KEY,
                    AUDIO_FAST_FORWARD_KEY
                ]}
            />
        )
    }
}

export default connect(mapStateToProps)(SliderAccess)
