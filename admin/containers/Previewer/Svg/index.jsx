import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import findIndex from 'lodash/findindex'
import InlineSvg from 'modules/InlineSvg'

import PreviewerKilobytes from '../Kilobytes'

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

class PreviewerSvg extends PureComponent {
    static defaultProps = {
        handleProcessSvg: () => {}
    }

    static propTypes = {
        isActor: PropTypes.bool,
        showKilobytes: PropTypes.bool,
        presenceType: PropTypes.string,
        presenceKey: PropTypes.string,
        handleProcessSvg: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            kilobytes: 0
        }
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
            const kilobytes = svgString.length / 1024

            this.setState({
                kilobytes
            })

            this.props.handleProcessSvg({ svgString, kilobytes })
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
                showKilobytes,
                presenceType,
                presenceKey
            } = this.props,
            { kilobytes } = this.state,

            svgMap = isActor ?
                getPreviewerSvgMapForActor(presenceType) :
                getPreviewerSvgMapForThing(presenceType),

            svgContent = svgMap[presenceKey]

        if (!svgContent) {
            return null
        }

        const sharedStyle = this.getSharedStyle(),
            svgChild = (
                <InlineSvg
                    notAbsoluteFullContainer
                    {...{
                        className: cx(
                            'Presence',
                            'Presence__visible',
                            showKilobytes && 'Presence__kilobytes',
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

        return showKilobytes ? (
            <div
                {...{
                    className: cx(
                        'Previewer__scrollChild'
                    )
                }}
            >
                {svgChild}
                <PreviewerKilobytes {...{ kilobytes }} />
            </div>
        ) : svgChild
    }
}

export default PreviewerSvg
