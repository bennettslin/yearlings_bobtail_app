// Static field that shows the song stanzas in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMaxStanzaTimesCount,
         getStanzaTimeObject,
         getSongTotalTime } from '../../helpers/data-helper'
import { getArrayOfLength } from '../../helpers/general-helper'

const SliderStanzas = ({

    selectedSongIndex

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),

        maxStanzaTimesCount = getMaxStanzaTimesCount(),

        /**
         * Dynamically create array of just indices. Audio slider will fetch
         * stanza times object directly from data helper.
         */
        stanzaTimesIndices = getArrayOfLength({
            length: maxStanzaTimesCount
        })

    return (
        <div className="slider-stanzas-block">
            {stanzaTimesIndices.map((nothing, stanzaTimeIndex) => {

                const stanzaTimeObject = getStanzaTimeObject(selectedSongIndex, stanzaTimeIndex),
                    stanzaWidth = (totalTime - stanzaTimeObject.time) / totalTime * 100,
                    stanzaStyle = {
                        width: `${stanzaWidth}%`
                    }

                return (
                    <div
                        key={stanzaTimeIndex}
                        className={`slider-bar stanza-slider-bar stanza-type-${stanzaTimeObject.type}`}
                        style={stanzaStyle}
                    >
                    </div>
                )
            })}
        </div>
    )
}

SliderStanzas.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(SliderStanzas)
