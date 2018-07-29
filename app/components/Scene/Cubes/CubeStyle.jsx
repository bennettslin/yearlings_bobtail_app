/* eslint-disable */

import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from '../../Style/Style'

// import { STYLE_LOGIC_ACCESS_LETTERS } from '../../constants/access'
// import {
//     PARENT_ACCESS_PREFIX,
//     CHILD_ACCESS_PREFIX
// } from '../../constants/prefixes'

import { getCubeCornerPercentages } from '../sceneHelper'
import { getPolygonPoints } from './Face/helpers/polygonHelper'

import { CUBE_Z_AXIS_LENGTH } from '../../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool,
    slantDirection: PropTypes.string.isRequired,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
},

CubeStyle = () => {

    return null && (
        <Style
            className={cx(
                'CubeStyle'
            )}
            {...{
                // indices: STYLE_LOGIC_ACCESS_LETTERS,
                // parentPrefix: PARENT_ACCESS_PREFIX,
                // childPrefix: CHILD_ACCESS_PREFIX,
                style: {
                    transform: 'scale(0.9)'
                }
            }}
        />
    )
}

CubeStyle.propTypes = propTypes

export default CubeStyle
