import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { getStyleString } from './styleHelper'

const propTypes = {
    className: PropTypes.any,
    indices: PropTypes.array.isRequired,
    rootPrefix: PropTypes.string.isRequired,
    childPrefix: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired
}

class Style extends Component {

    shouldComponentUpdate() {
        // This behaves like a stylesheet. It should never update!
        return false
    }

    render() {

        const {
            className,
            indices,
            rootPrefix,
            childPrefix,
            style
        } = this.props,

        styleString = getStyleString({
            indices,
            rootPrefix,
            childPrefix,
            style
        })

        return (
            <style
                className={cx(
                    'Style',
                    className
                )}
            >
                {styleString}
            </style>
        )
    }
}

Style.propTypes = propTypes

export default Style
