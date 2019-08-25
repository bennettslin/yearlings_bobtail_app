import React from 'react'
import PropTypes from 'prop-types'
import ReactInlineSvg from 'react-inlinesvg'

const propTypes = {
    // From parent.
    className: PropTypes.string,
    style: PropTypes.object,
    svgClassName: PropTypes.string,
    children: PropTypes.node.isRequired
}

const InlineSvg = ({
    className,
    style,
    svgClassName,
    children,
    ...rest
}) => (
    <div
        {...{
            className,
            style
        }}
    >
        <ReactInlineSvg
            {...{
                className: svgClassName,
                xmlns: 'http://www.w3.org/2000/svg',
                src: children,
                ...rest
            }}
        />
    </div>
)

InlineSvg.propTypes = propTypes

export default InlineSvg
