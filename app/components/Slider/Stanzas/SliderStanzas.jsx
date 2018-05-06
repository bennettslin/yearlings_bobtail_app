// Static field that shows the song stanzas in the slider.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderStanza from './SliderStanza'

import { getSliderStanzasArray,
         getSongTotalTime } from '../../../helpers/dataHelper'

const mapStateToProps = ({
    renderReadySongIndex
}) => ({
    renderReadySongIndex
})

class SliderStanzas extends Component {

    static propTypes = {

        // Through Redux.
        renderReadySongIndex: PropTypes.number.isRequired
    }

    render() {
        const { renderReadySongIndex } = this.props,
            totalTime = getSongTotalTime(renderReadySongIndex),
            sliderStanzasArray = getSliderStanzasArray(renderReadySongIndex)

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
