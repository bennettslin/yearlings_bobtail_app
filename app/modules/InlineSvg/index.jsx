import React from 'react'
import PropTypes from 'prop-types'
import ReactInlineSvg from 'react-inlinesvg'

const propTypes = {
    // From parent.
    children: PropTypes.node.isRequired
}

const InlineSvg = ({
    children,
    ...rest
}) => (
    <ReactInlineSvg
        {...{
            xmlns: 'http://www.w3.org/2000/svg',
            src: children,
            ...rest
        }}
    />
)

InlineSvg.propTypes = propTypes

export default InlineSvg
