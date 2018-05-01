// Static field that shows the song stanzas in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getMaxStanzasCount,
         getSliderStanzaData,
         getSongTotalTime } from '../../helpers/dataHelper'

import { getArrayOfLength } from '../../helpers/generalHelper'

const mapStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

const sliderStanzasPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

const maxStanzasCount = getMaxStanzasCount()

const SliderStanzas = ({

    selectedSongIndex

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),

        /**
         * Dynamically create array of just indices. Audio slider will fetch
         * stanza times object directly from data helper.
         */
        stanzaIndices = getArrayOfLength({
            length: maxStanzasCount
        })

    return (
        <div className="SliderStanzas">
            {stanzaIndices.map((nothing, stanzaTimeIndex) => {

                const stanzaDataObject = getSliderStanzaData(
                        selectedSongIndex, stanzaTimeIndex
                    ),

                    stanzaWidth =
                        (totalTime - stanzaDataObject.times[0]) / totalTime * 100,

                    stanzaStyle = {
                        width: `${stanzaWidth}%`
                    }

                return (
                    <div
                        key={stanzaTimeIndex}
                        className={cx(
                            'SliderStanzaBar',
                            'Slider__dynamicBar',
                            `bgColour__stanza__${stanzaDataObject.type}`
                        )}
                        style={stanzaStyle}
                    />
                )
            })}
        </div>
    )
}

SliderStanzas.propTypes = sliderStanzasPropTypes

export default connect(mapStateToProps)(SliderStanzas)
