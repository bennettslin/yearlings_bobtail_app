import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FilmstripCell from './Cell'

class FilmstripScene extends PureComponent {

    static propTypes = {
        // From parent.
        isOdd: PropTypes.bool.isRequired,
        isActivated: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isAfterSelected: PropTypes.bool.isRequired,
        sceneIndex: PropTypes.number.isRequired,
        sceneLeft: PropTypes.number.isRequired,
        sceneWidth: PropTypes.number.isRequired,
        dispatchScene: PropTypes.func.isRequired,
        dispatchStopPropagation: PropTypes.func.isRequired
    }

    _handleSceneClick = (e) => {
        const {
            isSelected,
            sceneIndex
        } = this.props

        if (isSelected) {
            return
        }

        logEvent({ e, componentName: 'FilmstripScene' })

        this.props.dispatchScene(sceneIndex)
        this.props.dispatchStopPropagation(e)
    }

    render() {
        const {
            isOdd,
            isActivated,
            isSelected,
            isAfterSelected,
            sceneLeft,
            sceneWidth
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'FilmstripScene',
                        isSelected ?
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
                        isActivated,
                        isSelected,
                        isAfterSelected
                    }}
                />
            </div>
        )
    }
}

export default FilmstripScene
