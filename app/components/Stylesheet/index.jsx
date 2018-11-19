import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class Stylesheet extends Component {

    static propTypes = {
        className: PropTypes.any,
        children: PropTypes.any.isRequired
    }

    shouldComponentUpdate() {

        // This behaves like a stylesheet. It should never update!
        return false
    }

    render() {

        const {
            className,
            children
        } = this.props

        return (
            <style
                className={cx(
                    'Stylesheet',
                    className
                )}
            >
                {children}
            </style>
        )
    }
}

export default Stylesheet
