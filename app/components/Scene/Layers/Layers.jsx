// Section to show a single slice of the scene.

import React, { Component } from 'react'
import cx from 'classnames'

import Layer from './Layer'
import CubesZIndexStyle from '../Cubes/CubesZIndexStyle'
import PresencesStyle from '../Presences/PresencesStyle'

import { CUBE_Y_INDICES } from '../Cubes/cubeIndexConstants'

class Layers extends Component {

    render() {

        return (
            <div
                className={cx(
                    'Layers',
                    'absoluteFullContainer'
                )}
            >
                <CubesZIndexStyle />
                <PresencesStyle />
                {CUBE_Y_INDICES.map(yIndex => (
                    <Layer
                        key={yIndex}
                        {...{
                            yIndex
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default Layers
