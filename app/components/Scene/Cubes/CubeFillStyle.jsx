import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Stylesheet from '../../Stylesheet'
import DynamicStylesheet from '../../Stylesheet/Dynamic'

import {
    getParentClassNameForSceneLogic
} from '../sceneHelper'

import {
    getChildClassNameForCubeLogic
} from './cubeHelper'

import {
    HSLA_MAP
} from 'scene/hsla'

import {
    HSLA_KEYS
} from 'scene/hslaKeys'

import {
    LEVELS,
    HSLA_MATRIX_NAME
} from 'constants/scene'

const propTypes = {
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
},

CubeFillStyle = ({

    xIndex,
    yIndex

}) => {

    // This component never updates because its parent never updates.
    return (
        <Stylesheet
            className={cx(
                'CubeFillStyle',
                `CubeFillStyle__${
                    xIndex
                }${
                    yIndex
                }`
            )}
        >
            {LEVELS.map(level => {

            return HSLA_KEYS.map(hslaKey => {

                const
                    parentPrefix = getParentClassNameForSceneLogic({
                        matrixName: HSLA_MATRIX_NAME,
                        level,
                        xIndex,
                        yIndex,
                        value: hslaKey
                    }),

                    childPrefix = getChildClassNameForCubeLogic({
                        level,
                        xIndex,
                        yIndex
                    }),

                    {
                        h,
                        s,
                        l
                    } = HSLA_MAP[hslaKey]

                    return (
                        <DynamicStylesheet
                            key={hslaKey}
                            {...{
                                parentPrefixes: [
                                    parentPrefix
                                ],
                                childPrefixes: [
                                    childPrefix
                                ],
                                style: {
                                    fill: `hsla(${h}, ${s}%, ${l}%, 0.8)`
                                }
                            }}
                        />
                    )
                })
            })}
        </Stylesheet>
    )
}

CubeFillStyle.propTypes = propTypes

export default CubeFillStyle
