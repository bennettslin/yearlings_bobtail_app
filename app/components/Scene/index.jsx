// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import SceneWrapper from './Wrapper'
import Layers from './Layers'
import Sky from './Sky'
import Wood from '../Stage/Wood'

const mapStateToProps = ({
    renderStore: { didSceneRender }
}) => ({
    didSceneRender
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        didSceneRender: PropTypes.bool.isRequired
    }

    render() {
        const { didSceneRender } = this.props

        return (
            <div className={cx(
                'Scene',
                { 'Scene__shown': didSceneRender }
            )}>
                <SceneWrapper>
                    <Sky />
                    <Wood />
                    <Layers />
                </SceneWrapper>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Scene)
