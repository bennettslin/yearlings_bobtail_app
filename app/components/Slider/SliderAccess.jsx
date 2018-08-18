import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetters from 'components/AccessLetter/AccessLetters'
import {
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY
} from 'constants/access'

import { getSongIsLogue } from 'helpers/dataHelper'

const mapStateToProps = ({
    renderStore: { canVerseRender },
    renderedStore: { renderedSongIndex }
}) => ({
    canVerseRender,
    renderedSongIndex
})

class SliderAccess extends Component {

    static propTypes = {
        // From Redux.
        canVerseRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canVerseRender
    }

    render() {
        const {
                renderedSongIndex
            } = this.props,

            isLogue = getSongIsLogue(renderedSongIndex)

        return (
            <AccessLetters
                accessIconsName="sliderRewindForward"
                inSlider
                showIfAccessed={!isLogue}
                accessKeys={[
                    AUDIO_REWIND_KEY,
                    AUDIO_FAST_FORWARD_KEY
                ]}
            />
        )
    }
}

export default connect(mapStateToProps)(SliderAccess)
