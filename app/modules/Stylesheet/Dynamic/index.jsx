import React, { Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import { getDynamicStyleStringForIndex } from './helper'

const defaultProps = {
    parentPrefixes: []
}

const propTypes = {
    parentPrefixes: PropTypes.array,
    childPrefixes: PropTypes.array.isRequired,
    style: PropTypes.object.isRequired
}

const DynamicStylesheet = ({

    parentPrefixes,
    childPrefixes,
    style

}) => (
    <___>

        {getDynamicStyleStringForIndex({
            parentPrefixes,
            childPrefixes,
            style
        })}

    </___>
)

DynamicStylesheet.defaultProps = defaultProps
DynamicStylesheet.propTypes = propTypes

export default DynamicStylesheet
