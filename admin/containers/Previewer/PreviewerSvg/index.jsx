import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReactInlineSvg from 'react-inlinesvg'

import { capitaliseForClassName } from 'helpers/format'
import { getArrangementForPresence } from 'components/Presence/helper'
import { getMapForActorKey } from 'components/Presences/LayersActor/helper'
import { getMapForPresenceType } from 'components/Presences/LayersThing/helper'

import { ACTOR } from 'constants/scene'

class PreviewerSvg extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        presenceType: PropTypes.string,
        actorKey: PropTypes.string,
        presenceKey: PropTypes.string
    }

    processSvg = (svgString) => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(this.handleProcessSvg, 0)
        return svgString
    }

    handleProcessSvg = () => {
        const { presenceKey } = this.props,
            element = document.getElementsByClassName(presenceKey)[0]

        if (element) {
            console.log(element)
        }
    }

    render() {
        const {
                className,
                presenceType,
                actorKey,
                presenceKey
            } = this.props,

            presencesMap = presenceType === ACTOR ?
                getMapForActorKey(actorKey) :
                getMapForPresenceType(presenceType),

            presenceComponent = presencesMap[presenceKey],

            { sharedStyle } = getArrangementForPresence({
                presenceType,
                presenceKey,
                actorKey
            })

        return Boolean(presenceComponent) && (
            <ReactInlineSvg
                {...{
                    className: cx(
                        'Presence',
                        'Presence__visible',
                        capitaliseForClassName(presenceType),
                        sharedStyle,
                        className
                    ),
                    processSVG: this.processSvg,
                    src: presenceComponent
                }}
            />
        )
    }
}

export default PreviewerSvg
