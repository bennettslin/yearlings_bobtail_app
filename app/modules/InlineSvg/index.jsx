import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactInlineSvg from 'react-inlinesvg'

import { FRONT, REAR } from '../../constants/scene/wires'

const propTypes = {
    // From parent.
    notAbsoluteFullContainer: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    svgClassName: PropTypes.string,
    siblingPlacement: PropTypes.string,
    siblingComponent: PropTypes.node,
    children: PropTypes.node.isRequired
}

const InlineSvg = ({
    notAbsoluteFullContainer,
    className,
    style,
    svgClassName,
    children,
    siblingPlacement,
    siblingComponent,
    ...rest
}) => (
    <>
        {siblingPlacement === REAR && siblingComponent}
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
        {siblingPlacement === FRONT && siblingComponent}
    </>
)

InlineSvg.propTypes = propTypes

export default InlineSvg
