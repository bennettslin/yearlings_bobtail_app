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
import { getSharedStyleForActor } from 'scene/styles/configs/actors'
import { getSharedStyleForThing } from 'scene/styles/configs/things'

import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from '../../../utils/svg'

import {
    getViewBoxSize,
    getSizeForPresence
} from 'modules/PresenceSvg/helper/size'
import { getCompoundActorStyleIfNeeded } from 'modules/PresenceSvg/helper/sharedStyle'

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
            adjustedHeight: 0,
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

            const {
                    viewBoxWidth,
                    viewBoxHeight
                } = getViewBoxSize(svgString),
                {
                    scaleFactor,
                    trimBottom
                } = this.getArrangement(),
                { adjustedHeight } = getSizeForPresence({
                    presenceType: ACTOR,
                    viewBoxWidth,
                    viewBoxHeight,
                    yIndex: 5,
                    scaleFactor,
                    trimBottom
                })

            this.setState({
                adjustedHeight,
                kilobytes
            })

            this.props.handleProcessSvg({ svgString, kilobytes })
        }
    }

    getCustomType() {
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

        return customType
    }

    getArrangement() {
        const customType = this.getCustomType(),
            {
                isActor,
                presenceType,
                presenceKey
            } = this.props

        return getArrangementForPresence({
            presenceType: isActor ? ACTOR : (customType || presenceType),
            presenceKey,
            ...isActor && { actorKey: customType }
        })
    }

    getSharedStyle() {
        const {
            isActor,
            presenceType,
            presenceKey
        } = this.props

        if (isActor) {
            return getCompoundActorStyleIfNeeded(
                this.getCustomType(),
                getSharedStyleForActor({
                    actorKey: this.getCustomType(),
                    presenceKey
                })
            )

        } else {
            return getSharedStyleForThing({
                presenceType: this.getCustomType() || presenceType,
                presenceKey
            })
        }
    }

    render() {
        const {
                isActor,
                showKilobytes,
                presenceType,
                presenceKey
            } = this.props,
            {
                adjustedHeight,
                kilobytes
            } = this.state,

            presenceDisplayName = convertPresenceKeyToClassName(presenceKey),

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
                            isActor && capitaliseForClassName(ACTOR),
                            capitaliseForClassName(presenceType)
                        ),
                        style: {
                            height: `${adjustedHeight.toFixed(2)}%`
                        },
                        svgClassName: cx(
                            presenceDisplayName,
                            getSharedClassNames(sharedStyle)
                        ),
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
                <PreviewerKilobytes
                    {...{
                        kilobytes,
                        presenceDisplayName
                    }}
                />
                {svgChild}
            </div>
        ) : svgChild
    }
}

export default PreviewerSvg
