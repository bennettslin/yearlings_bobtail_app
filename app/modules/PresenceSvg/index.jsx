import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isFinite from 'lodash/isfinite'

import ReactInlineSvg from 'react-inlinesvg'

class PresenceSvg extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        adjustedLeft: PropTypes.number,
        adjustedTop: PropTypes.number,
        adjustedWidth: PropTypes.number,
        adjustedHeight: PropTypes.number,
        transformStyle: PropTypes.string,
        handleProcessSvg: PropTypes.func,
        children: PropTypes.node
    }

    processSvg = (svgString) => {
        const { handleProcessSvg } = this.props

        if (handleProcessSvg) {
            // Set timeout to wait until next lifecycle before setting state.
            setTimeout(this.props.handleProcessSvg.bind(null, svgString), 0)
            return svgString
        }
    }

    render() {
        const {
            className,
            adjustedLeft,
            adjustedTop,
            transformStyle,
            adjustedWidth,
            adjustedHeight,
            children
        } = this.props

        return (
            <ReactInlineSvg
                {...{
                    className: cx(
                        'PresenceSvg',
                        className
                    ),
                    processSVG: this.processSvg,
                    src: children,
                    style: {
                        ...isFinite(adjustedLeft) && {
                            left: `${adjustedLeft.toFixed(2)}%`
                        },
                        ...isFinite(adjustedTop) && {
                            top: `${adjustedTop.toFixed(2)}%`
                        },
                        ...isFinite(adjustedWidth) && {
                            width: `${adjustedWidth.toFixed(2)}%`
                        },
                        ...isFinite(adjustedHeight) && {
                            height: `${adjustedHeight.toFixed(2)}%`
                        },
                        ...transformStyle && {
                            transform: transformStyle
                        }
                    },
                    wrapper: React.createFactory('div')
                }}
            />
        )
    }
}

export default PresenceSvg
