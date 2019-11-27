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

import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from '../../../utils/svg'

import { getGlobalActorStyle } from 'modules/PresenceSvg/helper/sharedStyle'

import { ACTOR } from 'constants/scene'
import { WHOLE_ACTOR_INSTANCES } from '../../../constants/actors'
import { CUSTOM_THING_INSTANCES } from '../../../constants/things'

import './style.scss'

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

    getSharedStyle() {
        let customType

        const {
                isActor,
                presenceType,
                presenceKey
            } = this.props,
            instanceList =
                isActor ? WHOLE_ACTOR_INSTANCES : CUSTOM_THING_INSTANCES

        // Actors and custom lists may include difference presence types.
        if (isActor || instanceList[presenceType]) {
            customType = instanceList[presenceType][
                findIndex(
                    instanceList[presenceType],
                    object => object.instance === presenceKey
                )
            ].type
        }

        const { sharedStyle } = getArrangementForPresence({
            presenceType: isActor ? ACTOR : (customType || presenceType),
            presenceKey,
            ...isActor && { actorKey: customType }
        })

        if (isActor) {
            return getGlobalActorStyle(customType, sharedStyle)
        } else {
            return sharedStyle
        }
    }

    render() {
        const {
                isActor,
                presenceType,
                presenceKey
            } = this.props,

            svgMap = isActor ?
                getPreviewerSvgMapForActor(presenceType) :
                getPreviewerSvgMapForThing(presenceType),

            svgContent = svgMap[presenceKey],
            sharedStyle = this.getSharedStyle()

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
