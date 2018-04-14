// Static field that shows the song stanzas in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getMaxStanzaTimesCount,
         getStanzaTimeObject,
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

const maxStanzaTimesCount = getMaxStanzaTimesCount()

const SliderStanzas = ({

    selectedSongIndex

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),

        /**
         * Dynamically create array of just indices. Audio slider will fetch
         * stanza times object directly from data helper.
         */
        stanzaTimesIndices = getArrayOfLength({
            length: maxStanzaTimesCount
        })

    return (
        <div className="SliderStanzas">
            {stanzaTimesIndices.map((nothing, stanzaTimeIndex) => {

                const stanzaTimeObject = getStanzaTimeObject(selectedSongIndex, stanzaTimeIndex),
                    stanzaWidth = (totalTime - stanzaTimeObject.time) / totalTime * 100,
                    stanzaStyle = {
                        width: `${stanzaWidth}%`
                    }

                return (
                    <div
                        key={stanzaTimeIndex}
                        className={cx(
                            'SliderStanzaBar',
                            'Slider__dynamicBar',
                            `bgColour__stanza__${stanzaTimeObject.type}`
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
