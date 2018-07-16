// Static field that shows the song stanzas in the slider.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderStanza from './SliderStanza'

import { getSliderStanzasArray,
         getSongTotalTime } from '../../../helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableStore
}) => ({
    canSliderRender,
    renderableSongIndex: renderableStore.renderableSongIndex
})

class SliderStanzas extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender
    }

    render() {
        const { renderableSongIndex } = this.props,
            totalTime = getSongTotalTime(renderableSongIndex),
            sliderStanzasArray = getSliderStanzasArray(renderableSongIndex)

        return (
            <div className={cx(
                'SliderStanzas',
                'absoluteFullContainer'
            )}>
                {sliderStanzasArray.map((stanzaDataObject, stanzaIndex) => {

                    return (
                        <SliderStanza {...stanzaDataObject}
                            key={stanzaIndex}
                            isLastStanza={
                                stanzaIndex === sliderStanzasArray.length - 1
                            }
                            totalTime={totalTime}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderStanzas)
