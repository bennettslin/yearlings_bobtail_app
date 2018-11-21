import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetters from '../../Access/Letters'
import {
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY
} from 'constants/access'

const mapStateToProps = ({
    renderStore: { canVerseRender },
    renderedStore: { isRenderedLogue }
}) => ({
    canVerseRender,
    isRenderedLogue
})

class SliderAccess extends Component {

    static propTypes = {
        // From Redux.
        canVerseRender: PropTypes.bool.isRequired,
        isRenderedLogue: PropTypes.bool.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canVerseRender
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
