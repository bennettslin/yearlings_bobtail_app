import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessIcons from '../AccessIcon/AccessIcons'
import { NAVIGATION_ENTER_KEY,
         AUDIO_REWIND_KEY,
         AUDIO_FAST_FORWARD_KEY } from '../../constants/access'

import { getSongIsLogue } from '../../helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableSongIndex,
    interactivatedVerseIndex
}) => ({
    canSliderRender,
    renderableSongIndex,
    interactivatedVerseIndex
})

class SliderAccess extends Component {

    static propTypes = {
        // From Redux.
        canSliderRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender
    }

    render() {
        const {
                renderableSongIndex,
                interactivatedVerseIndex
            } = this.props,

            isLogue = getSongIsLogue(renderableSongIndex),
            isVerseInteractivated = interactivatedVerseIndex >= 0

        return (
            <Fragment>
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
                <AccessIcons
                    accessIconsName="sliderEnter"
                    inSlider
                    accessKeys={[
                        {
                            accessKey: NAVIGATION_ENTER_KEY,
                            showIfAccessed: !isLogue && isVerseInteractivated
                        }
                    ]}
                />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(SliderAccess)
