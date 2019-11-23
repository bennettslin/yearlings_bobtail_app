import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import isString from 'lodash/isstring'

import CSSTransition from 'react-transition-group/CSSTransition'
import ConfiguredPresenceSvg from 'modules/ConfiguredPresenceSvg'
import LegacyPresenceSvg from 'modules/LegacyPresenceSvg'

import { capitaliseForClassName } from 'helpers/format'
import { getMapForActorKey } from '../../svg/actors'
import { getMapForPresenceType } from '../../svg/things'

import { ACTOR } from 'constants/scene'
import { DEFAULT_STAGE_KEY } from 'constants/scene/scenes'

class Presence extends PureComponent {

    static defaultProps = {
        cubesKey: DEFAULT_STAGE_KEY
    }

    static propTypes = {
        // From parent.
        cubesKey: PropTypes.string.isRequired,
        presenceType: PropTypes.string.isRequired,
        actorKey: PropTypes.string,
        presenceKey: PropTypes.string.isRequired,
        existenceValue: PropTypes.bool.isRequired
    }

    state = {
        // This determines whether to transition in and out.
        isTransitionVisible: false,

        /**
         * This is a fallback, in case the transition class was added before
         * the svg was loaded and therefore present.
         */
        isSvgLoaded: false
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

        if (!existenceValue && prevValue) {
            this.setState({ isSvgLoaded: false })
        }
    }

    _setIsTransitionVisible() {
        const { existenceValue } = this.props

        this.setState({ isTransitionVisible: Boolean(existenceValue) })
    }

    getIsConfigured(presenceComponent) {
        return isString(presenceComponent)
    }

    showProcessedSvg = () => {
        // This handles the possibility that an svg might be loaded late.
        const { existenceValue } = this.props
        if (existenceValue) {
            this.setState({ isSvgLoaded: true })
        }
    }

    render() {
        const {
                cubesKey,
                presenceType,
                actorKey,
                presenceKey
            } = this.props,

            {
                isTransitionVisible,
                isSvgLoaded
            } = this.state,

            presencesMap = presenceType === ACTOR ?
                getMapForActorKey(actorKey) :
                getMapForPresenceType(presenceType),

            presenceComponent = presencesMap[presenceKey],

            isConfigured = this.getIsConfigured(presenceComponent),

            // TODO: Get rid of this conditional once they are all asset svgs.
            RenderComponent = isConfigured ?
                ConfiguredPresenceSvg :
                LegacyPresenceSvg,

            renderedComponent = (
                <RenderComponent
                    {...{
                        className: cx(
                            'Presence',
                            isSvgLoaded && 'Presence__loaded',
                            capitaliseForClassName(presenceType),
                            presenceKey
                        ),
                        cubesKey,
                        presenceType,
                        actorKey,
                        presenceKey,
                        ...isConfigured && {
                            showProcessedSvg: this.showProcessedSvg
                        }
                    }}
                >
                    {presenceComponent}
                </RenderComponent>
            )

        // TODO: Is CssTransition even necessary once all are configured?
        return (
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
