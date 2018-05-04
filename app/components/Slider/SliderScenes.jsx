// Static field that shows the song scenes in the slider. Probably admin only.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getScenesArray,
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
        scenesArray = getScenesArray(selectedSongIndex)

    return (
        <div className="SliderScenes">
            {scenesArray.map((scene, sceneIndex) => {

                const { time: sceneTime } = scene,

                    sceneWidth =
                    (totalTime - sceneTime) / totalTime * 100,

                    sceneStyle = {
                        width: `${sceneWidth}%`
                    },

                    isOdd = sceneIndex % 2

                return (
                    <div
                        key={sceneIndex}
                        className={cx(
                            'SliderSceneBar',
                            'Slider__dynamicBar',
                            isOdd ?
                                'SliderSceneBar__even' :
                                'SliderSceneBar__odd'
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
