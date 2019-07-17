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
        console.log(`Processed ${svgString}.`)
        return svgString
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

        return (
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
