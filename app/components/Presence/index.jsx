import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CSSTransition from 'react-transition-group/CSSTransition'
import PresenceSvg from 'modules/PresenceSvg'

import { capitaliseForClassName } from 'helpers/format'
import { getSvgMapForActor } from '../../svg/actors'
import { getSvgMapForThing } from '../../svg/things'

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
                getSvgMapForActor(actorKey) :
                getSvgMapForThing(presenceType),

            presenceComponent = presencesMap[presenceKey]

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
                <PresenceSvg
                    {...{
                        className: cx(
                            'Presence',
                            isSvgLoaded && 'Presence__loaded',
                            capitaliseForClassName(presenceType)
                        ),
                        cubesKey,
                        presenceType,
                        actorKey,
                        presenceKey,
                        showProcessedSvg: this.showProcessedSvg
                    }}
                >
                    {presenceComponent}
                </PresenceSvg>
            </CSSTransition>
        )
    }
}

export default Presence
