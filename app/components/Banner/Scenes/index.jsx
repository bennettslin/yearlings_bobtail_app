import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import BannerScene from './Scene'
import AccessDirectionLetter from '../../Access/DirectionLetter'
import SceneDispatcher from '../../../dispatchers/Scene'

import { getSongSceneConfigs } from 'album/api/scenes'
import { getSongTotalTime } from 'album/api/time'

import { populateRefs } from 'helpers/ref'

import {
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY
} from 'constants/access'

const mapStateToProps = ({
    lyricStore: {
        lyricSongIndex,
        lyricSceneIndex
    },
    sessionStore: { interactivatedSceneIndex }
}) => ({
    lyricSongIndex,
    lyricSceneIndex,
    interactivatedSceneIndex
})

class BannerScenes extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        lyricSceneIndex: PropTypes.number.isRequired,
        interactivatedSceneIndex: PropTypes.number.isRequired
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    dispatchScene = (sceneIndex) => {
        this.dispatchSceneIndex(sceneIndex)
    }

    render() {
        const {
                lyricSongIndex,
                lyricSceneIndex,
                interactivatedSceneIndex
            } = this.props,

            totalTime = getSongTotalTime(lyricSongIndex),
            songSceneConfigs = getSongSceneConfigs(lyricSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'BannerScenes',
                        'dropShadow',
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
                        isInteractivated =
                            interactivatedSceneIndex === sceneIndex,
                        isSelected =
                            lyricSceneIndex === sceneIndex,
                        isAfterSelected = lyricSceneIndex < sceneIndex,

                        sceneLeft = sceneStartTime / totalTime * 100,
                        sceneWidth = sceneDuration / totalTime * 100

                    return (
                        <BannerScene
                            {...{
                                key: sceneIndex,
                                isOdd,
                                isInteractivated,
                                isSelected,
                                isAfterSelected,
                                sceneIndex,
                                sceneLeft,
                                sceneWidth,
                                dispatchScene: this.dispatchScene
                            }}
                        />
                    )
                })}
                <AccessDirectionLetter {...{ accessKey: PREVIOUS_SCENE_KEY }} />
                <AccessDirectionLetter
                    isNext
                    {...{ accessKey: NEXT_SCENE_KEY }}
                />

                <SceneDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(BannerScenes)
