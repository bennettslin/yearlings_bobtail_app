// Static field that shows the song stanzas in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderStanza from './SliderStanza'

import { getSliderStanzasArray,
         getSongTotalTime } from '../../../helpers/dataHelper'

const mapStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

const sliderStanzasPropTypes = {

    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

const SliderStanzas = ({

    selectedSongIndex

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),
        sliderStanzasArray = getSliderStanzasArray(selectedSongIndex)

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

SliderStanzas.propTypes = sliderStanzasPropTypes

export default connect(mapStateToProps)(SliderStanzas)
