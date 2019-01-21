import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import BannerScene from './Scene'
import SceneDispatcher from '../../../dispatchers/Scene'

import { getSongSceneConfigs } from 'album/api/scenes'
import { getSongTotalTime } from 'album/api/time'

import { populateRefs } from 'helpers/ref'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class BannerScenes extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    dispatchScene = (sceneIndex) => {
        this.dispatchSceneIndex(sceneIndex)
    }

    render() {
        const { lyricSongIndex } = this.props,
            totalTime = getSongTotalTime(lyricSongIndex),
            songSceneConfigs = getSongSceneConfigs(lyricSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'BannerScenes',
                        'abF'
                    )
                }}
            >
                {songSceneConfigs.map((sceneConfig, sceneIndex) => {
                    const {
                            sceneStartTime,
                            sceneDuration
                        } = sceneConfig,

                        isOdd = Boolean(sceneIndex % 2),
                        sceneLeft = sceneStartTime / totalTime * 100,
                        sceneWidth = sceneDuration / totalTime * 100

                    return (
                        <BannerScene
                            key={sceneIndex}
                            {...{
                                isOdd,
                                sceneIndex,
                                sceneLeft,
                                sceneWidth,
                                dispatchScene: this.dispatchScene
                            }}
                        />
                    )
                })}
                <SceneDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(BannerScenes)
