import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getDynamicStyleStringForIndex } from './styleHelper'

const propTypes = {
    parentPrefixes: PropTypes.array.isRequired,
    childPrefix: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
}

const DynamicStyling = ({

    parentPrefixes,
    childPrefix,
    style

}) => (
    <Fragment>

        {getDynamicStyleStringForIndex({
            parentPrefixes,
            childPrefix,
            style
        })}

    </Fragment>
)

DynamicStyling.propTypes = propTypes

export default DynamicStyling
