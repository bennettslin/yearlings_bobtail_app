// Static field that shows the song scenes in the slider. Probably admin only.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getSongSceneConfigs } from 'album/api/scenes'
import { getSongTotalTime } from 'album/api/time'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class SliderScenes extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired
    }

    render() {
        const
            { lyricSongIndex } = this.props,
            totalTime = getSongTotalTime(lyricSongIndex),
            songSceneConfigs = getSongSceneConfigs(lyricSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'SliderScenes',
                        'abF'
                    )
                }}
            >
                {songSceneConfigs.map((sceneConfig, sceneIndex) => {

                    const { sceneStartTime } = sceneConfig,

                        sceneWidth =
                            (totalTime - sceneStartTime)
                            / totalTime * 100,

                        isOdd = sceneIndex % 2

                    return (
                        <div
                            key={sceneIndex}
                            {...{
                                className: cx(
                                    'SliderSceneBar',
                                    isOdd ?
                                        'SliderSceneBar__even' :
                                        'SliderSceneBar__odd'
                                ),
                                style: {
                                    width: `${sceneWidth}%`
                                }
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SliderScenes)
