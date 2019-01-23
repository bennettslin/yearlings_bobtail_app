import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import BannerSceneSquare from './Square'

class BannerScene extends PureComponent {

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
        logEvent(BannerScene.name, e)

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
                        'BannerScene',
                        'abF'
                    ),
                    style: {
                        left: `${sceneLeft}%`,
                        width: `${sceneWidth}%`
                    },
                    onClick: this._handleSceneClick
                }}
            >
                <BannerSceneSquare
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

export default BannerScene
