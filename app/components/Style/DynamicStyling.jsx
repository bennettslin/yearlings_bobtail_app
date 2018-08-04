import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getDynamicStyleStringForIndex } from './styleHelper'

const defaultProps = {
    parentPrefixes: []
}

const propTypes = {
    parentPrefixes: PropTypes.array,
    childPrefixes: PropTypes.array.isRequired,
    style: PropTypes.object.isRequired
}

const DynamicStyling = ({

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

DynamicStyling.defaultProps = defaultProps
DynamicStyling.propTypes = propTypes

export default DynamicStyling
