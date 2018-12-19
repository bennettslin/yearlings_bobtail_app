import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import PresenceHocTransition from './Transition'

class PresenceHoc extends PureComponent {

    static propTypes = {
        // From parent.
        cubesKey: PropTypes.string.isRequired,
        presenceType: PropTypes.string.isRequired,
        presenceKey: PropTypes.string.isRequired,
        presenceValue: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ])
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
            { presenceValue } = this.props,
            { presenceValue: prevValue } = prevProps

        if (presenceValue !== prevValue) {
            this.setState(this._getRenderedState(this.props))
        }
    }

    _getRenderedState(props) {
        const { presenceValue } = props

        if (!presenceValue) {
            return { dynamicPresenceValue: null }
        }

        return {
            dynamicPresenceValue: presenceValue,
            persistedPresenceValue: presenceValue
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
                presenceKey
            } = this.props,
            {
                dynamicPresenceValue,
                persistedPresenceValue
            } = this.state

        return (
            <PresenceHocTransition
                {...{
                    cubesKey,
                    presenceType,
                    presenceKey,
                    dynamicPresenceValue,
                    persistedPresenceValue,
                    resetRenderedState: this._resetRenderedState
                }}
            />
        )
    }
}

export default PresenceHoc
