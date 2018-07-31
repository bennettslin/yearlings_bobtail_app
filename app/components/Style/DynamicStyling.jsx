import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getDynamicStyleStringForIndex } from './styleHelper'

const propTypes = {
    parentPrefixes: PropTypes.array.isRequired,
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

DynamicStyling.propTypes = propTypes

export default DynamicStyling
