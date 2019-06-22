import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FilmstripCell from './Cell'

class FilmstripScene extends PureComponent {

    static propTypes = {
        // From parent.
        isOdd: PropTypes.bool.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
        isAfterSelected: PropTypes.bool.isRequired,
        sceneIndex: PropTypes.number.isRequired,
        sceneLeft: PropTypes.number.isRequired,
        sceneWidth: PropTypes.number.isRequired,
        dispatchScene: PropTypes.func.isRequired
    }

    _handleSceneClick = (e) => {
        logEvent(FilmstripScene.name, e)

        const { sceneIndex } = this.props
        this.props.dispatchScene(sceneIndex)
    }

    render() {
        const {
            isOdd,
            isInteractivated,
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
                        isInteractivated,
                        isSelected,
                        isAfterSelected
                    }}
                />
            </div>
        )
    }
}

export default FilmstripScene
