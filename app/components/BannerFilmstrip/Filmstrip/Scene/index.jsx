import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FilmstripCell from './Cell'
import './style'

const FilmstripScene = ({
    isOdd,
    isActivatedScene,
    isSliderScene,
    isSelectedScene,
    isAfterCursor,
    sceneIndex,
    sceneLeft,
    sceneWidth,
    cursorWidth,
    dispatchSceneIndex,
    stopPropagation

}) => {
    const onClick = e => {
        stopPropagation.current(e)

        if (isSelectedScene) {
            return
        }

        logEvent({ e, componentName: 'FilmstripScene' })

        dispatchSceneIndex.current(sceneIndex)
    }

    return (
        <div
            {...{
                className: cx(
                    'FilmstripScene',
                    isSelectedScene ?
                        'FilmstripScene__selected' :
                        'FilmstripScene__interactable',
                    'abF'
                ),
                style: {
                    left: `${sceneLeft}%`,
                    width: `${sceneWidth}%`
                },
                onClick
            }}
        >
            <FilmstripCell
                {...{
                    isOdd,
                    isActivatedScene,
                    isSliderScene,
                    isSelectedScene,
                    isAfterCursor,
                    cursorWidth
                }}
            />
        </div>
    )
}

FilmstripScene.propTypes = {
    isOdd: PropTypes.bool.isRequired,
    isActivatedScene: PropTypes.bool.isRequired,
    isSliderScene: PropTypes.bool.isRequired,
    isSelectedScene: PropTypes.bool.isRequired,
    isAfterCursor: PropTypes.bool.isRequired,
    sceneIndex: PropTypes.number.isRequired,
    sceneLeft: PropTypes.number.isRequired,
    sceneWidth: PropTypes.number.isRequired,
    cursorWidth: PropTypes.number,
    dispatchSceneIndex: PropTypes.shape({
        current: PropTypes.func
    }).isRequired,
    stopPropagation: PropTypes.shape({
        current: PropTypes.func
    }).isRequired
}

export default memo(FilmstripScene)
