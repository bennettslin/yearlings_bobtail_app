import React, { Fragment } from 'react'
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
    <Fragment>

        {getDynamicStyleStringForIndex({
            parentPrefixes,
            childPrefixes,
            style
        })}

    </Fragment>
)

DynamicStylesheet.defaultProps = defaultProps
DynamicStylesheet.propTypes = propTypes

export default DynamicStylesheet
