import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isString from 'lodash/isstring'

import CSSTransition from 'react-transition-group/CSSTransition'
import ConfiguredPresenceSvg from 'modules/ConfiguredPresenceSvg'
import LegacyPresenceSvg from 'modules/LegacyPresenceSvg'
import PresenceSvg from 'modules/PresenceSvg'

import { capitaliseForClassName } from 'helpers/format'
import { getMapForActorKey } from '../Presences/LayersActor/helper'
import { getMapForPresenceType } from '../Presences/LayersThing/helper'

import { ACTOR } from 'constants/scene'
import { DEFAULT_STAGE_KEY } from 'constants/scene/scenes'

class Presence extends PureComponent {

    static defaultProps = {
        cubesKey: DEFAULT_STAGE_KEY
    }

    static propTypes = {
        // From parent.
        inPreviewer: PropTypes.bool,
        cubesKey: PropTypes.string.isRequired,
        presenceType: PropTypes.string.isRequired,
        actorKey: PropTypes.string,
        presenceKey: PropTypes.string.isRequired,
        existenceValue: PropTypes.bool.isRequired
    }

    state = {
        // This determines whether to transition in and out.
        isTransitionVisible: false
    }

    componentDidMount() {
        this._setIsTransitionVisible()
    }

    componentDidUpdate(prevProps) {
        const
            { existenceValue } = this.props,
            { existenceValue: prevValue } = prevProps

        if (existenceValue !== prevValue) {
            this._setIsTransitionVisible()
        }
    }

    _setIsTransitionVisible() {
        const { existenceValue } = this.props

        this.setState({
            isTransitionVisible: Boolean(existenceValue)
        })
    }

    getRenderComponent(presenceComponent) {
        const { inPreviewer } = this.props

        if (inPreviewer) {
            return PresenceSvg
        }

        return isString(presenceComponent) ?
            ConfiguredPresenceSvg :
            LegacyPresenceSvg
    }

    render() {
        const {
                inPreviewer,
                cubesKey,
                presenceType,
                actorKey,
                presenceKey
            } = this.props,

            { isTransitionVisible } = this.state,

            presencesMap = presenceType === ACTOR ?
                getMapForActorKey(actorKey) :
                getMapForPresenceType(presenceType),

            presenceComponent = presencesMap[presenceKey],

            // TODO: Get rid of this conditional once they are all asset svgs.
            RenderComponent = this.getRenderComponent(presenceComponent),
            renderedComponent = (
                <RenderComponent
                    {...{
                        className: cx(
                            'Presence',
                            inPreviewer && 'Presence__visible',
                            capitaliseForClassName(presenceType)
                        ),
                        cubesKey,
                        presenceType,
                        actorKey,
                        presenceKey
                    }}
                >
                    {presenceComponent}
                </RenderComponent>
            )

        return inPreviewer ? (
            <___>
                {renderedComponent}
            </___>
        ) : (
            <CSSTransition
                unmountOnExit
                mountOnEnter
                {...{
                    in: isTransitionVisible,
                    timeout: 200,
                    classNames: { enterDone: 'Presence__visible' }
                }}
            >
                {renderedComponent}
            </CSSTransition>
        )
    }
}

export default Presence
