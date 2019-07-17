import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import PresenceSvg from 'modules/PresenceSvg'

import { getArrangementForPresence } from 'components/Presence/helper'
import { capitaliseForClassName } from 'helpers/format'
import { getXYForPresence } from './helper/position'
import { getSizeForPresence, getViewBoxSize } from './helper/size'
import { getTransformStyleForPresence } from './helper/transform'

const propTypes = {
    // From parent.
    cubesKey: PropTypes.string.isRequired,
    presenceType: PropTypes.string.isRequired,
    actorKey: PropTypes.string,
    presenceKey: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

class ConfiguredPresenceSvg extends PureComponent {

    state = {
        adjustedWidth: 0,
        adjustedHeight: 0
    }

    getArrangement() {
        const {
            presenceType,
            actorKey,
            presenceKey
        } = this.props

        return getArrangementForPresence({
            presenceType,
            presenceKey,
            actorKey
        })
    }

    getSize({
        viewBoxWidth,
        viewBoxHeight
    }) {
        const {
            yIndex,
            scaleFactor
        } = this.getArrangement()

        return getSizeForPresence({
            viewBoxWidth,
            viewBoxHeight,
            yIndex,
            scaleFactor
        })
    }

    getXY() {
        const
            { cubesKey } = this.props,
            {
                yIndex,
                xPosition,
                zOffset
            } = this.getArrangement()

        return getXYForPresence({
            cubesKey,
            yIndex,
            xPosition,
            zOffset
        })
    }

    getTransformStyle() {
        const {
            alignLeft,
            alignRight,
            flipHorizontal,
            rotate
        } = this.getArrangement()

        return getTransformStyleForPresence({
            alignLeft,
            alignRight,
            flipHorizontal,
            rotate
        })
    }

    handleProcessSvg = (svgString) => {
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
                const
                    {
                        adjustedWidth,
                        adjustedHeight
                    } = this.getSize({
                        viewBoxWidth,
                        viewBoxHeight
                    })

                this.setState({
                    adjustedWidth,
                    adjustedHeight
                })
            }

        } catch (error) {
            logError('Error parsing viewBox!')
        }
    }

    render() {
        const {
                presenceType,
                presenceKey,
                children
            } = this.props,
            {
                noShadow,
                style
            } = this.getArrangement(),
            { x: adjustedLeft, y: adjustedTop } = this.getXY(),
            { adjustedWidth, adjustedHeight } = this.state,
            transformStyle = this.getTransformStyle()

        return (
            <PresenceSvg
                {...{
                    className: cx(
                        'Presence',
                        capitaliseForClassName(presenceType),
                        capitaliseForClassName(presenceKey),
                        capitaliseForClassName(style),
                        noShadow && 'Presence__noShadow',
                        'abF'
                    ),
                    adjustedLeft,
                    adjustedTop,
                    adjustedWidth,
                    adjustedHeight,
                    transformStyle,
                    handleProcessSvg: this.handleProcessSvg
                }}
            >
                {children}
            </PresenceSvg>
        )
    }
}

ConfiguredPresenceSvg.propTypes = propTypes

export default ConfiguredPresenceSvg
