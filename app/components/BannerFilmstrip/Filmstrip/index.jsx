import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
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
import { getCursorIndex } from '../../../helpers/verse'
import {
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY
} from '../../../constants/access'
import { FILMSTRIP } from '../../../constants/tips'
import { mapActivatedSceneIndex } from '../../../redux/activated/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedSceneIndex,
    mapIsSelectedLogue,
    mapSelectedTime
} from '../../../redux/selected/selectors'
import { mapSliderSceneIndex } from '../../../redux/slider/selectors'
import './style'

const Filmstrip = () => {
    const
        dispatchSceneIndex = useRef(),
        stopPropagation = useRef(),
        activatedSceneIndex = useSelector(mapActivatedSceneIndex),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        selectedSceneIndex = useSelector(mapSelectedSceneIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        selectedTime = useSelector(mapSelectedTime),
        sliderSceneIndex = useSelector(mapSliderSceneIndex),
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

                    cursorWidth =
                        (selectedTime - sceneStartTime) /
                        sceneDuration * 100

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
                            dispatchSceneIndex,
                            stopPropagation
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
            <SceneDispatcher {...{ ref: dispatchSceneIndex }} />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
}

export default Filmstrip
