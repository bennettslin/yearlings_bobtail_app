import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { getStaticStyleStringForIndex } from './helper'

const propTypes = {
    indices: PropTypes.array.isRequired,
    parentPrefix: PropTypes.string.isRequired,
    childPrefix: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
}

const StaticStylesheet = ({

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

StaticStylesheet.propTypes = propTypes

export default StaticStylesheet
