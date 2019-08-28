import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactInlineSvg from 'react-inlinesvg'

const propTypes = {
    // From parent.
    inPreviewer: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    svgClassName: PropTypes.string,
    children: PropTypes.node.isRequired
}

const InlineSvg = ({
    inPreviewer,
    className,
    style,
    svgClassName,
    children,
    ...rest
}) => (
    <div
        {...{
            className: cx(
                className,

                // When not in previewer, make position absolute.
                !inPreviewer && 'abF'
            ),
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
