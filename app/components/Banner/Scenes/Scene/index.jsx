import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

const mapStateToProps = null

class BannerScene extends PureComponent {

    static propTypes = {
        // From parent.
        isOdd: PropTypes.bool.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        isSelected: PropTypes.bool.isRequired,
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
            sceneLeft,
            sceneWidth
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'BannerScene',
                        isOdd ?
                            'BannerScene__even' :
                            'BannerScene__odd',
                        isInteractivated &&
                            'BannerScene__interactivated',
                        isSelected &&
                            'BannerScene__selected'
                    ),
                    style: {
                        left: `${sceneLeft}%`,
                        width: `${sceneWidth}%`
                    },
                    onClick: this._handleSceneClick
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(BannerScene)
