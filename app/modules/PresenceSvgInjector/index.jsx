import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReactInlineSvg from 'react-inlinesvg'

import { getAdjustedSize, getViewBoxSize } from './helper'

class PresenceSvgInjector extends Component {

    static defaultProps = {
        scaleFactor: 1
    }

    static propTypes = {
        className: PropTypes.string,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        scaleFactor: PropTypes.number,
        children: PropTypes.node
    }

    state = {
        viewBoxWidth: 0,
        viewBoxHeight: 0
    }

    processSvg = (svgString) => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(this.tryGetViewBoxSize.bind(null, svgString), 0)
        return svgString
    }

    tryGetViewBoxSize = (svgString) => {
        try {
            const
                {
                    viewBoxWidth,
                    viewBoxHeight
                } = getViewBoxSize(svgString),
                {
                    viewBoxWidth: prevViewBoxWidth,
                    viewBoxHeight: prevViewBoxHeight
                } = this.state

            if (
                viewBoxWidth !== prevViewBoxWidth ||
                viewBoxHeight !== prevViewBoxHeight
            ) {
                this.setState({
                    viewBoxWidth,
                    viewBoxHeight
                })
            }

        } catch (error) {
            logError('Error parsing viewBox!')
        }
    }

    render() {
        const {
                className,
                x,
                y,
                scaleFactor,
                children
            } = this.props,
            {
                viewBoxWidth,
                viewBoxHeight
            } = this.state,
            {
                adjustedWidth,
                adjustedHeight
            } = getAdjustedSize({
                viewBoxWidth,
                viewBoxHeight,
                scaleFactor
            })

        return (
            <ReactInlineSvg
                {...{
                    className: cx(
                        'PresenceSvgInjector',
                        className
                    ),
                    processSVG: this.processSvg,
                    src: children,
                    style: {
                        left: `${x.toFixed(2)}%`,
                        top: `${y.toFixed(2)}%`,
                        width: `${adjustedWidth.toFixed(2)}%`,
                        height: `${adjustedHeight.toFixed(2)}%`
                    },
                    wrapper: React.createFactory('div')
                }}
            />
        )
    }
}

export default PresenceSvgInjector
