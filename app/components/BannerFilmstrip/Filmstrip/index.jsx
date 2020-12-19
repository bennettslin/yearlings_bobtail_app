import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import FilmstripScene from './Scene'
import TipsHand from '../../Tips/Hand'
import AccessDirectionLetter from '../../Access/DirectionLetter'
import SceneDispatcher from '../../../dispatchers/Scene'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import { getSceneIndices } from '../../../api/album/scenes'
import {
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY
} from '../../../constants/access'
import { FILMSTRIP } from '../../../constants/tips'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selector'
import './style'

const Filmstrip = () => {
    const
        dispatchSceneIndex = useRef(),
        stopPropagation = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue)

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
                return (
                    <FilmstripScene
                        {...{
                            key: sceneIndex,
                            sceneIndex,
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
