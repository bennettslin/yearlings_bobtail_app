// Section to show a single slice of the scene.

import React, { Component, Fragment as ___ } from 'react'
import cx from 'classnames'

import Cubes from '../../Cubes'
import PresencesConfig from '../../Presences'

import CubeZIndexStylesheet from './Stylesheets/CubeZIndex'
import PresenceZIndexStylesheet from './Stylesheets/PresenceZIndex'

import { CUBE_Y_INDICES } from '../../../constants/cubeIndex'

class Layers extends Component {

    render() {

        return (
            <div
                className={cx(
                    'Layers',
                    'abF'
                )}
            >
                <CubeZIndexStylesheet />
                <PresenceZIndexStylesheet />

                {CUBE_Y_INDICES.map(yIndex => {
                    const Presences = PresencesConfig[yIndex]

                    return (
                        <___
                            key={yIndex}
                        >
                            <Cubes {...{ yIndex }} />
                            <Presences />
                        </___>
                    )
                })}
            </div>
        )
    }
}

export default Layers
