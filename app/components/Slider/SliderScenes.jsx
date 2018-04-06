// Static field that shows the song scenes in the slider. Probably admin only.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSceneTimesArray,
         getSongTotalTime } from '../../helpers/dataHelper'

const mapStateToProps = ({
    selectedSongIndex
}) => ({
    selectedSongIndex
})

const sliderScenesPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
},

SliderScenes = ({

    selectedSongIndex

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),
        sceneTimesArray = getSceneTimesArray(selectedSongIndex)

    return (
        <div className="SliderScenes-block">
            {sceneTimesArray && sceneTimesArray.map((sceneTime, sceneTimeIndex) => {

                const sceneWidth = (totalTime - sceneTime) / totalTime * 100,
                    sceneStyle = {
                        width: `${sceneWidth}%`
                    },
                    isEven = sceneTimeIndex % 2 === 0

                return (
                    <div
                        key={sceneTimeIndex}
                        className={cx(
                            'slider-bar',
                            'scene-slider-bar',
                            isEven ? 'even' : 'odd'
                        )}
                        style={sceneStyle}
                    />
                )
            })}
        </div>
    )
}

SliderScenes.propTypes = sliderScenesPropTypes

export default connect(mapStateToProps)(SliderScenes)
