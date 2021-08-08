import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getStyleString } from './helper'

const Stylesheet = ({
    className,
    indices,
    showHexIndices,
    parentPrefix,
    childPrefix,
    getStyle,

}) => (
    <style
        className={cx(
            'Stylesheet',
            className,
        )}
    >
        {getStyleString({
            indices,
            showHexIndices,
            parentPrefix,
            childPrefix,
            getStyle,
        })}
    </style>
)

Stylesheet.propTypes = {
    className: PropTypes.string.isRequired,
    indices: PropTypes.array.isRequired,
    showHexIndices: PropTypes.bool,
    parentPrefix: PropTypes.string,
    childPrefix: PropTypes.string.isRequired,
    getStyle: PropTypes.func.isRequired,
}

export default Stylesheet
