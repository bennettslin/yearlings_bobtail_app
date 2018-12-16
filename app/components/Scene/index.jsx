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
    loadStore: { appMounted },
    renderStore: { didSceneRender }
}) => ({
    appMounted,
    didSceneRender
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        didSceneRender: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('Scene')
    }

    render() {
        const {
            appMounted,
            didSceneRender
        } = this.props

        return appMounted && (
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
