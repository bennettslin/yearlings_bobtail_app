// Stage elements that change based on the scene.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Layers from './Layers'
import Sky from './Sky'
import Wood from './Wood'

const mapStateToProps = ({
    loadStore: { appMounted }
}) => ({
    appMounted
})

class Scene extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired
    }

    componentDidMount() {
        logMount('Scene')
    }

    render() {
        const { appMounted } = this.props

        return (
            <div className={cx(
                'Scene'
            )}>
                <Sky />
                <Wood />
                {appMounted && (
                    <Layers />
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Scene)
