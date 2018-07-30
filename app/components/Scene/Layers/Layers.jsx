// Section to show a single slice of the scene.

import React, { Component } from 'react'
import cx from 'classnames'

import Layer from './Layer'

import { CUBE_Y_INDICES } from '../../../constants/stage'

class Layers extends Component {

    shouldComponentUpdate() {
        return false
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

export default Layers
