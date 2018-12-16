import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { CSSTransition } from 'react-transition-group'

import {
    getClassNameForPresenceType,
    getMapForPresenceType,
    getArrangementForPresenceType
} from '../helper'

import { getPresenceXYWidthAndHeight } from './helper'

import { ACTORS } from 'constants/scene'

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
        persistedPresenceValue: null,

        xYWidthAndHeight: null
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
        const {
            cubesKey,
            presenceType,
            presenceKey,
            presenceValue
        } = props

        if (!presenceValue) {
            return { dynamicPresenceValue: null }
        }

        const arrangement = getArrangementForPresenceType({
                presenceType,
                presenceKey,
                presenceValue
            }),
            {
                yIndex,
                arrangement: {
                    xFloat,
                    zOffset,
                    xWidth,
                    zHeight
                }
            } = arrangement,
            xYWidthAndHeight = getPresenceXYWidthAndHeight({
                cubesKey,
                yIndex,
                xFloat,
                zOffset,
                xWidth,
                zHeight
            })

        return {
            dynamicPresenceValue: presenceValue,
            persistedPresenceValue: presenceValue,
            xYWidthAndHeight
        }
    }

    _resetRenderedState = () => {
        this.setState({
            persistedPresenceValue: null,
            xYWidthAndHeight: null
        })
    }

    render() {
        const {
                presenceType,
                presenceKey
            } = this.props,
            {
                dynamicPresenceValue,
                persistedPresenceValue,
                xYWidthAndHeight
            } = this.state

        const
            presencesMap = getMapForPresenceType(presenceType),
            PresenceComponent = presencesMap[presenceKey]

        return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                {...{
                    in: Boolean(dynamicPresenceValue),
                    timeout: {
                        enter: 0,
                        exit: 200
                    },
                    classNames: {
                        enterDone: 'Presence__visible'
                    },
                    onExited: this._resetRenderedState
                }}
            >
                <PresenceComponent
                    {...{
                        className: cx(
                            'Presence',
                            getClassNameForPresenceType(presenceType),
                            'abF'
                        ),
                        ...presenceType === ACTORS && {
                            instanceKey: persistedPresenceValue || ''
                        },
                        ...xYWidthAndHeight
                    }}
                />
            </CSSTransition>
        )
    }
}

export default PresenceHoc
