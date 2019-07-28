import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ReactInlineSvg from 'react-inlinesvg'

import {
    capitaliseForClassName,
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName
} from 'helpers/format'
import { getArrangementForPresence } from 'components/Presence/helper'
import { getMapForActorKey } from 'components/Presences/LayersActor/helper'
import { getMapForPresenceType } from 'components/Presences/LayersThing/helper'

import { ACTOR } from 'constants/scene'

class PreviewerSvg extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        presenceType: PropTypes.string,
        actorKey: PropTypes.string,
        presenceKey: PropTypes.string,
        handleProcessSvg: PropTypes.func.isRequired
    }

    processSvg = (svgString) => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(this.handleProcessSvg.bind(null, svgString), 0)
        return svgString
    }

    handleProcessSvg = (svgString) => {
        const { presenceKey } = this.props,
            element = document.getElementsByClassName(
                convertPresenceKeyToClassName(presenceKey)
            )[0]

        if (element) {
            console.log(element)
            this.props.handleProcessSvg(svgString)
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
            }) || {}

        return Boolean(presenceComponent) && (
            <div
                {...{
                    className: cx(
                        'Presence',
                        'Presence__visible',
                        capitaliseForClassName(presenceType),
                        sharedStyle,
                        className
                    )
                }}
            >
                <ReactInlineSvg
                    {...{
                        className: convertPresenceKeyToClassName(presenceKey),
                        xmlns: 'http://www.w3.org/2000/svg',
                        title: convertPresenceKeyToTitle(presenceKey),
                        preProcessor: this.processSvg,
                        src: presenceComponent
                    }}
                />
            </div>
        )
    }
}

export default PreviewerSvg
