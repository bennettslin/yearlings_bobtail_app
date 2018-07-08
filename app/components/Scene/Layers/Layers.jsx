// Section to show a single slice of the scene.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Layer from './Layer'

import { DEFAULT_STAGE_KEY } from '../../../assets/scene/cubes/cubesKeys'

import { Y_INDICES_ARRAY } from '../constants'

const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

class Layers extends Component {

    static defaultProps = {
        cubesKey: DEFAULT_STAGE_KEY
    }

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,

        // From parent.
        cubesKey: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSceneRender && !prevProps.canSceneRender) {
            console.warn('Layers rendered.')

            this.setState({
                hasMounted: true
            })
        }
    }

    render() {

        const {
                // eslint-disable-next-line no-unused-vars
                canSceneRender,

                cubesKey: sceneCubesKey,
                ...other
            } = this.props,

            {
                hasMounted
            } = this.state,

            // Until the component is mounted, use the default stage cubesKey.
            cubesKey = hasMounted ?
                sceneCubesKey :
                DEFAULT_STAGE_KEY

        return (
            <div
                className={cx(
                    'Layers',
                    'absoluteFullContainer'
                )}
            >
                {Y_INDICES_ARRAY.map(yIndex => {

                    return (
                        <Layer {...other}
                            key={yIndex}
                            {...{
                                yIndex,
                                cubesKey
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Layers)
