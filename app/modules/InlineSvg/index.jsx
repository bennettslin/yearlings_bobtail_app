import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactInlineSvg from 'react-inlinesvg'

const propTypes = {
    // From parent.
    notAbsoluteFullContainer: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    svgClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
    siblingComponent: PropTypes.node
}

const InlineSvg = ({
    notAbsoluteFullContainer,
    className,
    style,
    svgClassName,
    children,
    siblingComponent,
    ...rest
}) => (
    <>
        <div
            {...{
                className: cx(
                    className,

                    // When not in previewer, make position absolute.
                    !notAbsoluteFullContainer && 'abF'
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
        {/* TODO: Put this behind child. */}
        {siblingComponent}
    </>

)

InlineSvg.propTypes = propTypes

export default InlineSvg
