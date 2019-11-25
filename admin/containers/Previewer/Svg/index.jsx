import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import findIndex from 'lodash/findindex'

import InlineSvg from 'modules/InlineSvg'

import {
    capitaliseForClassName,
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames
} from 'helpers/format'
import { getArrangementForPresence } from 'components/Presence/helper'

import { getSvgMapForWholeActor } from '../../../utils/svg'
import { getSvgMapForThing } from 'svg/things'

import { WHOLE_ACTOR_INSTANCES } from '../../../constants/actors'

import { ACTOR } from 'constants/scene'

class PreviewerSvg extends PureComponent {

    static propTypes = {
        isActor: PropTypes.bool,
        presenceType: PropTypes.string,
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
            this.props.handleProcessSvg(svgString)
        }
    }

    render() {
        const {
                isActor,
                presenceType,
                presenceKey
            } = this.props,

            svgMap = isActor ?
                getSvgMapForWholeActor(presenceType) :
                getSvgMapForThing(presenceType),

            svgContent = svgMap[presenceKey]

        let actorKey

        if (isActor) {
            // Find the actor key for compound instances.
            actorKey = WHOLE_ACTOR_INSTANCES[presenceType][
                findIndex(
                    WHOLE_ACTOR_INSTANCES[presenceType],
                    object => object.instance === presenceKey
                )
            ].actor
        }

        const { sharedStyle } = getArrangementForPresence({
            presenceType: isActor ? ACTOR : presenceType,
            ...isActor && { actorKey },
            presenceKey
        }) || {}

        return Boolean(svgContent) && (
            <InlineSvg
                notAbsoluteFullContainer
                {...{
                    className: cx(
                        'Presence',
                        'Presence__visible',
                        capitaliseForClassName(presenceType),
                        getSharedClassNames(sharedStyle)
                    ),
                    svgClassName: convertPresenceKeyToClassName(presenceKey),
                    title: convertPresenceKeyToTitle(presenceKey),
                    preProcessor: this.processSvg
                }}
            >
                {svgContent}
            </InlineSvg>
        )
    }
}

export default PreviewerSvg
