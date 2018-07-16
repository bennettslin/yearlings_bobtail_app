import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessIcons from '../AccessIcon/AccessIcons'
import {
    AUDIO_REWIND_KEY,
    AUDIO_FAST_FORWARD_KEY
} from '../../constants/access'

import { getSongIsLogue } from '../../helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableStore
}) => ({
    canSliderRender,
    renderableSongIndex: renderableStore.renderableSongIndex
})

class SliderAccess extends Component {

    static propTypes = {
        // From Redux.
        canSliderRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender
    }

    render() {
        const {
                renderableSongIndex
            } = this.props,

            isLogue = getSongIsLogue(renderableSongIndex)

        return (
            <AccessIcons
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
        )
    }
}

export default connect(mapStateToProps)(SliderAccess)
