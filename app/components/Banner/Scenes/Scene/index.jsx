import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

const mapStateToProps = null

class BannerScene extends PureComponent {

    static propTypes = {
        // From parent.
        isOdd: PropTypes.bool.isRequired,
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
                            'BannerScene__odd'
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
