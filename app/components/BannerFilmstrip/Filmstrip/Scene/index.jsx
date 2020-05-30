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
    dispatchScene,
    stopPropagation

}) => {
    const _handleSceneClick = e => {
        stopPropagation(e)

        if (isSelectedScene) {
            return
        }

        logEvent({ e, componentName: 'FilmstripScene' })

        dispatchScene(sceneIndex)
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
                onClick: _handleSceneClick
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
    dispatchScene: PropTypes.func.isRequired,
    stopPropagation: PropTypes.func.isRequired
}

export default memo(FilmstripScene)
