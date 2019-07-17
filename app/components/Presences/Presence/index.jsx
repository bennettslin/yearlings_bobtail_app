import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// import PresenceTransition from './Transition'
import CSSTransition from 'react-transition-group/CSSTransition'
import ConfiguredPresenceSvg from 'modules/ConfiguredPresenceSvg'

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
        // This one determines whether to transition in and out.
        dynamicPresenceValue: null,

        // This one prevents component from breaking while transitioning out.
        persistedPresenceValue: null
    }

    componentDidMount() {
        this.setState(this._getRenderedState(this.props))
    }

    componentDidUpdate(prevProps) {
        const
            { existenceValue } = this.props,
            { existenceValue: prevValue } = prevProps

        if (existenceValue !== prevValue) {
            this.setState(this._getRenderedState(this.props))
        }
    }

    _getRenderedState(props) {
        const { existenceValue } = props

        if (!existenceValue) {
            return { dynamicPresenceValue: null }
        }

        return {
            dynamicPresenceValue: existenceValue,
            persistedPresenceValue: existenceValue
        }
    }

    _resetRenderedState = () => {
        this.setState({
            persistedPresenceValue: null
        })
    }

    render() {
        const {
                cubesKey,
                presenceType,
                actorKey,
                presenceKey
            } = this.props,
            {
                dynamicPresenceValue,
                persistedPresenceValue
            } = this.state

        return (
            <CSSTransition
                unmountOnExit
                mountOnEnter
                {...{
                    in: Boolean(dynamicPresenceValue),
                    timeout: 200,
                    classNames: { enterDone: 'Presence__visible' },
                    onExited: this._resetRenderedState
                }}
            >
                <ConfiguredPresenceSvg
                    {...{
                        cubesKey,
                        presenceType,
                        actorKey,
                        presenceKey,
                        persistedPresenceValue
                    }}
                />
            </CSSTransition>
        )
    }
}

export default Presence
