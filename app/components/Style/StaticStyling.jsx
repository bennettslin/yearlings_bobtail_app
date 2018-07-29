import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getStaticStyleStringForIndex } from './styleHelper'

const propTypes = {
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

            getStaticStyleStringForIndex({
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
