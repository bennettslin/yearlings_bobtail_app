import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import FilmstripCell from './Cell'
import { getMapSceneDimensionCoordinate } from '../../../../redux/filmstrip/selector'
import { getMapIsSceneSelected } from '../../../../redux/selected/selector'
import './style'

const FilmstripScene = ({
    sceneIndex,
    dispatchSceneIndex,
    stopPropagation,

}) => {
    const
        {
            sceneLeft,
            sceneWidth,
        } = JSON.parse(useSelector(getMapSceneDimensionCoordinate(sceneIndex))),

        isSceneQueuedOrSelected = useSelector(
            getMapIsSceneSelected(sceneIndex),
        )

    const onClick = e => {
        logEvent('FilmstripScene')
        stopPropagation.current(e)
        dispatchSceneIndex.current(sceneIndex)
    }

    return (
        <div
            {...{
                className: cx(
                    'FilmstripScene',
                    isSceneQueuedOrSelected ?
                        'FilmstripScene__selected' :
                        'FilmstripScene__interactable',
                    'abF',
                ),
                style: {
                    left: `${sceneLeft}%`,
                    width: `${sceneWidth}%`,
                },
                ...!isSceneQueuedOrSelected && { onClick },
            }}
        >
            <FilmstripCell {...{ sceneIndex }} />
        </div>
    )
}

FilmstripScene.propTypes = {
    sceneIndex: PropTypes.number.isRequired,
    dispatchSceneIndex: PropTypes.shape({
        current: PropTypes.func,
    }).isRequired,
    stopPropagation: PropTypes.shape({
        current: PropTypes.func,
    }).isRequired,
}

export default memo(FilmstripScene)
