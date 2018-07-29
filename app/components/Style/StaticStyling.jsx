import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getStyleStringForIndex } from './styleHelper'

const propTypes = {
    className: PropTypes.any,
    indices: PropTypes.array.isRequired,
    parentPrefix: PropTypes.string.isRequired,
    childPrefix: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
}

const StaticStyling = ({

    indices,
    parentPrefix,
    childPrefix,
    style

}) => (
    <Fragment>

        {indices.map(index => (

            getStyleStringForIndex({
                index,
                parentPrefix,
                childPrefix,
                style
            })
        ))}

    </Fragment>
)

StaticStyling.propTypes = propTypes

export default StaticStyling
