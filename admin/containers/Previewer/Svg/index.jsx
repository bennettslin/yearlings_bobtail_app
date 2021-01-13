import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import InlineSvg from '../../../../app/modules/InlineSvg'

import PreviewerDescription from '../Description'

import {
    capitaliseForClassName,
    convertPresenceKeyToTitle,
    convertPresenceKeyToClassName,
    getSharedClassNames,
} from '../../../../app/helpers/format'
import { getDocument } from '../../../../app/utils/browser'
import { getArrangementForPresence } from '../../../../app/api/scene/presences'
import {
    getSharedStyleForActor,
    getSharedStyleForThing,
} from '../../../../app/api/scene/sharedStyles'

import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing,
} from '../../../utils/svg'

import {
    getViewBoxSize,
    getDimensionsForPresence,
} from '../../../../app/components/Presence/Svg/helpers/size'
import { getCompoundActorStyleIfNeeded } from '../../../../app/components/Presence/Svg/helpers/sharedStyle'

import { ACTOR } from '../../../../app/constants/scene'
import { WHOLE_ACTOR_INSTANCES } from '../../../constants/actors'
import { CUSTOM_THING_INSTANCES } from '../../../constants/things'

class PreviewerSvg extends PureComponent {
    static defaultProps = {
        handleProcessSvg() {},
    }

    static propTypes = {
        isActor: PropTypes.bool,
        showKilobytes: PropTypes.bool,
        presenceType: PropTypes.string,
        presenceKey: PropTypes.string,
        handleProcessSvg: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            previewerHeight: 0,
            kilobytes: 0,
            didLoad: false,
        }
    }

    setDidLoad = () => {
        // Hacky way to show full width of presence.
        setTimeout(() => this.setState({ didLoad: true }), 250)
    }

    processSvg = svgString => {
        // Set timeout to wait until next lifecycle before setting state.
        setTimeout(() => this.handleProcessSvg(svgString), 0)
        return svgString
    }

    handleProcessSvg = svgString => {
        const { presenceType, presenceKey } = this.props,

            element = getDocument().getElementsByClassName(
                presenceKey
            )[0]

        if (element) {
            const kilobytes = svgString.length / 1024

            const {
                    viewBoxWidth,
                    viewBoxHeight,
                } = getViewBoxSize(svgString),
                {
                    scaleFactor = 1,
                    trimBottom,
                } = this.getArrangement(),
                { adjustedHeight } = getDimensionsForPresence({
                    actorKey: presenceType,
                    viewBoxWidth,
                    viewBoxHeight,
                    yIndex: 5,
                    scaleFactor,
                    trimBottom,
                })

            this.setState({
                previewerHeight: adjustedHeight,
                kilobytes,
            })

            this.props.handleProcessSvg({ svgString, kilobytes })
        }
    }

    getCustomType() {
        let customType

        const {
                isActor,
                presenceType,
                presenceKey,
            } = this.props,
            instanceList =
                isActor ? WHOLE_ACTOR_INSTANCES : CUSTOM_THING_INSTANCES

        // Actors and custom lists may include difference presence types.
        if (isActor || instanceList[presenceType]) {
            customType = instanceList[presenceType][
                instanceList[presenceType].findIndex(
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
                presenceKey,
            } = this.props

        return getArrangementForPresence({
            presenceType: isActor ? ACTOR : (customType || presenceType),
            presenceKey,
            ...isActor && { actorKey: customType },
        })
    }

    getSharedStyle() {
        const {
            isActor,
            presenceType,
            presenceKey,
        } = this.props

        if (isActor) {
            return getCompoundActorStyleIfNeeded(
                this.getCustomType(),
                getSharedStyleForActor({
                    actorKey: this.getCustomType(),
                    presenceKey,
                })
            )

        } else {
            return getSharedStyleForThing({
                presenceType: this.getCustomType() || presenceType,
                presenceKey,
            })
        }
    }

    render() {
        const {
                isActor,
                showKilobytes,
                presenceType,
                presenceKey,
            } = this.props,
            {
                previewerHeight,
                kilobytes,
                didLoad,
            } = this.state,

            svgMap = isActor ?
                getPreviewerSvgMapForActor(presenceType) :
                getPreviewerSvgMapForThing(presenceType),

            svgContent = svgMap[presenceKey]

        if (!svgContent) {
            return null
        }

        const
            sharedStyle = this.getSharedStyle(),
            { scaleFactor } = this.getArrangement(),
            svgChild = (
                <InlineSvg
                    notAbsoluteFullContainer
                    {...{
                        className: cx(
                            'Presence',
                            didLoad && 'Presence__loaded',
                            showKilobytes && 'Presence__kilobytes',
                            isActor && capitaliseForClassName(ACTOR),
                            capitaliseForClassName(presenceType)
                        ),
                        style: {
                            height: `${previewerHeight.toFixed(2)}%`,
                        },
                        svgClassName: cx(
                            presenceKey,
                            convertPresenceKeyToClassName(presenceKey),
                            getSharedClassNames(sharedStyle)
                        ),
                        title: convertPresenceKeyToTitle(presenceKey),
                        preProcessor: this.processSvg,
                        onLoad: this.setDidLoad,
                    }}
                >
                    {svgContent}
                </InlineSvg>
            )

        return showKilobytes ? (
            <div
                {...{
                    className: cx(
                        'Previewer__scrollChild',
                        'PresenceContainer__shown'
                    ),
                }}
            >
                <PreviewerDescription
                    {...{
                        kilobytes,
                        presenceKey,
                        scaleFactor,
                        sharedStyle,
                    }}
                />
                {svgChild}
            </div>
        ) : svgChild
    }
}

export default PreviewerSvg
