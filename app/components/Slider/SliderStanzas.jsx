// Static field that shows the song stanzas in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderStanza from './SliderStanza'

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
         * Dynamically create array of just indices.
         */
        stanzaIndices = getArrayOfLength({
            length: maxStanzasCount
        })

    return (
        <div className={cx(
            'SliderStanzas',
            'absoluteFullContainer'
        )}>
            {stanzaIndices.map((nothing, stanzaIndex) => {

                const stanzaDataObject = getSliderStanzaData(
                    selectedSongIndex, stanzaIndex
                )

                return (
                    <SliderStanza {...stanzaDataObject}
                        key={stanzaIndex}
                        totalTime={totalTime}
                    />
                )
            })}
        </div>
    )
}

SliderStanzas.propTypes = sliderStanzasPropTypes

export default connect(mapStateToProps)(SliderStanzas)
