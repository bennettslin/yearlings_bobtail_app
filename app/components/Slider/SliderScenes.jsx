// Static field that shows the song scenes in the slider. Probably admin only.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getScenesArray,
         getSongTotalTime } from '../../helpers/dataHelper'

const mapStateToProps = ({
    canSliderRender,
    renderableSongIndex
}) => ({
    canSliderRender,
    renderableSongIndex
})

class SliderScenes extends Component {

    static propTypes = {
        // Through Redux.
        canSliderRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSliderRender
    }

    componentDidUpdate() {
        console.warn('SliderScenes rendered.')
    }

    render() {
        const { renderableSongIndex } = this.props,
            totalTime = getSongTotalTime(renderableSongIndex),
            scenesArray = getScenesArray(renderableSongIndex)

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
}

export default connect(mapStateToProps)(SliderScenes)
