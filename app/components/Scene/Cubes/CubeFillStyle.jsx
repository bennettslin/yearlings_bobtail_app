import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from '../../Style/Style'
import DynamicStyling from '../../Style/DynamicStyling'

import {
    getParentClassNameForSceneLogic
} from '../sceneHelper'

import {
    getChildClassNameForCubeLogic
} from './cubeHelper'

import {
    HSLA_MAP
} from '../../../constants/hsla'

import {
    HSLA_KEYS
} from '../../../constants/hslaKeys'

import {
    LEVELS,
    HSLA_MATRIX_NAME
} from '../sceneConstants'

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
        <Style
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
                        l,
                        a
                    } = HSLA_MAP[hslaKey]

                    return (
                        <DynamicStyling
                            key={hslaKey}
                            {...{
                                parentPrefixes: [
                                    parentPrefix
                                ],
                                childPrefixes: [
                                    childPrefix
                                ],
                                style: {
                                    fill: `hsla(${h}, ${s}%, ${l}%, ${a})`
                                }
                            }}
                        />
                    )
                })
            })}
        </Style>
    )
}

CubeFillStyle.propTypes = propTypes

export default CubeFillStyle
