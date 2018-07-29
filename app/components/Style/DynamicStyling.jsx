import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getDynamicStyleStringForIndex } from './styleHelper'

const propTypes = {
    parentPrefix: PropTypes.string.isRequired,
    childPrefix: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
}

const DynamicStyling = ({

    parentPrefix,
    childPrefix,
    style

}) => (
    <Fragment>

        {getDynamicStyleStringForIndex({
            parentPrefix,
            childPrefix,
            style
        })}

    </Fragment>
)

DynamicStyling.propTypes = propTypes

export default DynamicStyling
