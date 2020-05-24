import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FilmstripCell from './Cell'

class FilmstripScene extends PureComponent {

    static propTypes = {
        // From parent.
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
        dispatchStopPropagation: PropTypes.func.isRequired
    }

    _handleSceneClick = e => {
        const {
            isSelectedScene,
            sceneIndex
        } = this.props

        this.props.dispatchStopPropagation(e)

        if (isSelectedScene) {
            return
        }

        logEvent({ e, componentName: 'FilmstripScene' })

        this.props.dispatchScene(sceneIndex)
    }

    render() {
        const {
            isOdd,
            isActivatedScene,
            isSliderScene,
            isSelectedScene,
            isAfterCursor,
            sceneLeft,
            sceneWidth,
            cursorWidth
        } = this.props

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
                    onClick: this._handleSceneClick
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
}

export default FilmstripScene
