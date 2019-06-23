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
        logEvent(FilmstripScene.name, e)

        const { sceneIndex } = this.props
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
