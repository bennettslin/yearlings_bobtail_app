import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../../app/modules/InlineSvg'

import {
    capitaliseForClassName,
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames
} from 'helpers/format'
import { getArrangementForPresence } from '../../../../app/components/Presence/helper'
import { getMapForActorKey } from 'svg/actors'
import { getMapForPresenceType } from 'svg/things'

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
            <InlineSvg
                notAbsoluteFullContainer
                {...{
                    className: cx(
                        'Presence',
                        'Presence__visible',
                        capitaliseForClassName(presenceType),
                        getSharedClassNames(sharedStyle),
                        className
                    ),
                    svgClassName: convertPresenceKeyToClassName(presenceKey),
                    title: convertPresenceKeyToTitle(presenceKey),
                    preProcessor: this.processSvg
                }}
            >
                {presenceComponent}
            </InlineSvg>
        )
    }
}

export default PreviewerSvg
