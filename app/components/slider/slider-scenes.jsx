// Static field that shows the song scenes in the slider.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { getSceneTimesArray,
         getSongTotalTime } from '../../helpers/data-helper'

const SliderScenes = ({

    selectedSongIndex

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),
        sceneTimesArray = getSceneTimesArray(selectedSongIndex)

    return (
        <div className="slider-scenes-block">
            {sceneTimesArray && sceneTimesArray.map((sceneTime, sceneTimeIndex) => {

                const sceneWidth = (totalTime - sceneTime) / totalTime * 100,
                    sceneStyle = {
                        width: `${sceneWidth}%`
                    },
                    isEven = sceneTimeIndex % 2 === 0

                return (
                    <div
                        key={sceneTimeIndex}
                        className={classnames(
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

SliderScenes.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(SliderScenes)
