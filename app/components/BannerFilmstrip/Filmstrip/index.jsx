import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import FilmstripScene from './Scene'
import TipsHand from '../../Tips/Hand'

import AccessDirectionLetter from '../../Access/DirectionLetter'
import SceneDispatcher from '../../../dispatchers/Scene'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'

import { getSongSceneConfigs } from '../../../album/api/scenes'
import { getSongTotalTime } from '../../../album/api/time'

import { populateRefs } from '../../../helpers/ref'
import { getCursorIndex } from '../../../helpers/verse'

import {
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY
} from '../../../constants/access'
import { FILMSTRIP } from '../../../constants/tips'

const mapStateToProps = ({
    lyricStore: {
        lyricSongIndex,
        lyricSceneIndex
    },
    selectedStore: { selectedTime },
    activatedStore: { activatedSceneIndex },
    sliderStore: { sliderSceneIndex }
}) => ({
    lyricSongIndex,
    lyricSceneIndex,
    selectedTime,
    activatedSceneIndex,
    sliderSceneIndex
})

class Filmstrip extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        lyricSceneIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        activatedSceneIndex: PropTypes.number.isRequired,
        sliderSceneIndex: PropTypes.number.isRequired
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    dispatchScene = (sceneIndex) => {
        this.dispatchSceneIndex(sceneIndex)
    }

    dispatchStopPropagation = (e) => {
        this.dispatchStopPropagation(e)
    }

    getCursorWidth({
        sceneStartTime,
        sceneDuration
    }) {
        const { selectedTime } = this.props
        return (selectedTime - sceneStartTime) / sceneDuration * 100
    }

    render() {
        const {
                lyricSongIndex,
                lyricSceneIndex,
                activatedSceneIndex,
                sliderSceneIndex
            } = this.props,

            totalTime = getSongTotalTime(lyricSongIndex),
            songSceneConfigs = getSongSceneConfigs(lyricSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'Filmstrip',
                        'BannerFilmstrip__child',

                        'dropShadow',
                        'dropShadow__lightHover'
                    )
                }}
            >
                {songSceneConfigs.map((sceneConfig, sceneIndex) => {
                    const {
                            sceneStartTime,
                            sceneDuration
                        } = sceneConfig,

                        isOdd = Boolean(sceneIndex % 2),
                        isSelectedScene = lyricSceneIndex === sceneIndex,
                        isActivatedScene = activatedSceneIndex === sceneIndex,
                        isSliderScene = sliderSceneIndex === sceneIndex,

                        cursorIndex = getCursorIndex(
                            activatedSceneIndex,
                            sliderSceneIndex,
                            lyricSceneIndex
                        ),
                        isAfterCursor = cursorIndex < sceneIndex,

                        sceneLeft = sceneStartTime / totalTime * 100,
                        sceneWidth = sceneDuration / totalTime * 100,

                        cursorWidth = this.getCursorWidth({
                            sceneStartTime,
                            sceneDuration
                        })

                    return (
                        <FilmstripScene
                            {...{
                                key: sceneIndex,
                                isOdd,
                                isActivatedScene,
                                isSliderScene,
                                isSelectedScene,
                                isAfterCursor,
                                sceneIndex,
                                sceneLeft,
                                sceneWidth,
                                ...isSelectedScene && { cursorWidth },
                                dispatchScene: this.dispatchScene,
                                dispatchStopPropagation: this.dispatchStopPropagation
                            }}
                        />
                    )
                })}
                <AccessDirectionLetter {...{ accessKey: PREVIOUS_SCENE_KEY }} />
                <AccessDirectionLetter
                    isNext
                    {...{ accessKey: NEXT_SCENE_KEY }}
                />
                <TipsHand reverse {...{ tipType: FILMSTRIP }} />
                <SceneDispatcher {...{ getRefs: this._getRefs }} />
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Filmstrip)
