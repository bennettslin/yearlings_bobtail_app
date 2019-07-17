import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReactInlineSvg from 'react-inlinesvg'

import { getArrangementForPresence } from 'components/Presence/helper'

class PresenceSvg extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node
    }

    processSvg = (svgString) => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(this.handleProcessSvg, 0)
        return svgString
    }

    handleProcessSvg = () => {
        const { presenceKey } = this.props
        console.log(document.getElementsByClassName(presenceKey)[0])
    }

    render() {
        const {
                className,
                presenceType,
                actorKey,
                presenceKey,
                children
            } = this.props,

            { sharedStyle } = getArrangementForPresence({
                presenceType,
                presenceKey,
                actorKey
            })

        return Boolean(children) && (
            <ReactInlineSvg
                {...{
                    className: cx(
                        sharedStyle,
                        className
                    ),
                    processSVG: this.processSvg,
                    src: children
                }}
            />
        )
    }
}

export default PresenceSvg
