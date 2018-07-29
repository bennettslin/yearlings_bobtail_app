// Section to show a single slice of the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Layer from './Layer'

import { CUBE_Y_INDICES } from '../../../constants/stage'

const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

class Layers extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSceneRender && !prevProps.canSceneRender) {
            logger.warn('Layers rendered.')

            this.setState({
                hasMounted: true
            })
        }
    }

    render() {

        return (
            <div
                className={cx(
                    'Layers',
                    'absoluteFullContainer'
                )}
            >
                {CUBE_Y_INDICES.map(yIndex => {

                    return (
                        <Layer
                            key={yIndex}
                            {...{
                                yIndex
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Layers)
