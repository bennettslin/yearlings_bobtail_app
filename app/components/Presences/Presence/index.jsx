import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import PresenceTransition from './Transition'

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
            <PresenceTransition
                {...{
                    cubesKey,
                    presenceType,
                    actorKey,
                    presenceKey,
                    dynamicPresenceValue,
                    persistedPresenceValue,
                    resetRenderedState: this._resetRenderedState
                }}
            />
        )
    }
}

export default Presence
