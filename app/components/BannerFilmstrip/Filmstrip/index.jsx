import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import FilmstripScene from './Scene'
import TipsHand from '../../Tips/Hand'

import AccessDirectionLetter from '../../Access/DirectionLetter'
import SceneDispatcher from '../../../dispatchers/Scene'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'

import { getSceneIndices } from '../../../album/api/scenes'
import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene
} from '../../../album/api/time'

import { populateRefs } from '../../../helpers/ref'
import { getCursorIndex } from '../../../helpers/verse'

import {
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY
} from '../../../constants/access'
import { FILMSTRIP } from '../../../constants/tips'

const mapStateToProps = ({
    selectedStore: {
        isSelectedLogue,
        selectedSongIndex,
        selectedSceneIndex,
        selectedTime
    },
    activatedStore: { activatedSceneIndex },
    sliderStore: { sliderSceneIndex }
}) => ({
    isSelectedLogue,
    selectedSongIndex,
    selectedSceneIndex,
    selectedTime,
    activatedSceneIndex,
    sliderSceneIndex
})

class Filmstrip extends PureComponent {

    static propTypes = {
        // Through Redux.
        isSelectedLogue: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedSceneIndex: PropTypes.number.isRequired,
        selectedTime: PropTypes.number.isRequired,
        activatedSceneIndex: PropTypes.number.isRequired,
        sliderSceneIndex: PropTypes.number.isRequired
    }

    _getRefs = payload => {
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
                selectedSongIndex,
                selectedSceneIndex,
                activatedSceneIndex,
                sliderSceneIndex,
                isSelectedLogue
            } = this.props,

            songDuration = getDurationForSong(selectedSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'Filmstrip',
                        'BannerFilmstrip__child',

                        'dropShadow',
                        !isSelectedLogue && 'dropShadow__lightHover'
                    )
                }}
            >
                {getSceneIndices(selectedSongIndex).map(sceneIndex => {
                    const
                        sceneStartTime = getStartTimeForScene(
                            selectedSongIndex,
                            sceneIndex
                        ),
                        sceneDuration = getDurationForScene(
                            selectedSongIndex,
                            sceneIndex
                        ),

                        isOdd = Boolean(sceneIndex % 2),
                        isSelectedScene = selectedSceneIndex === sceneIndex,
                        isActivatedScene = activatedSceneIndex === sceneIndex,
                        isSliderScene = sliderSceneIndex === sceneIndex,

                        cursorIndex = getCursorIndex(
                            activatedSceneIndex,
                            sliderSceneIndex,
                            selectedSceneIndex
                        ),
                        isAfterCursor = cursorIndex < sceneIndex,

                        sceneLeft = sceneStartTime / songDuration * 100,
                        sceneWidth = sceneDuration / songDuration * 100,

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
