// Static field that shows the song scenes in the slider. Probably admin only.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongSceneConfigs } from 'album/api/scenes'
import { getSongTotalTime } from 'album/api/time'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex }
}) => ({
    renderedSongIndex
})

class SliderScenes extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired
    }

    render() {
        const { renderedSongIndex } = this.props,
            totalTime = getSongTotalTime(renderedSongIndex),
            songSceneConfigs = getSongSceneConfigs(renderedSongIndex)

        return (
            <div className="SliderScenes">
                {songSceneConfigs.map((sceneConfig, sceneIndex) => {

                    const { sceneStartTime } = sceneConfig,

                        sceneWidth =
                        (totalTime - sceneStartTime) / totalTime * 100,

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
