import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

import { convertPresenceKeyToClassName } from 'helpers/format'
import ACTOR_TYPES from '../../../constants/actors'

import { getSvgMapForThingType } from '../../../utils/svg'

class ActorsDashboard extends PureComponent {

    static propTypes = {
        presenceType: PropTypes.string,
        presenceKey: PropTypes.string,
        kilobytes: PropTypes.number,
        selectPresence: PropTypes.func.isRequired
    }

    selectPresenceType = ({ target: { value: type } }) => {
        this.props.selectPresence({ type })
    }

    selectPresenceKey = ({ target: { value: key } }) => {
        this.props.selectPresence({ key })
    }

    render() {
        const {
                presenceType,
                presenceKey,
                kilobytes
            } = this.props,
            svgMap = getSvgMapForThingType(presenceType)

        return (
            <div
                {...{
                    className: cx(
                        'ActorsDashboard'
                    )
                }}
            >
                <select
                    {...{
                        className: 'ActorsDashboard__child',
                        value: presenceType,
                        onChange: this.selectPresenceType
                    }}
                >
                    {ACTOR_TYPES.map(presenceType => (
                        <option
                            {...{
                                key: presenceType,
                                value: presenceType
                            }}
                        >
                            {presenceType}
                        </option>
                    ))}
                </select>
                <select
                    {...{
                        className: 'ActorsDashboard__child',
                        value: presenceKey,
                        onChange: this.selectPresenceKey
                    }}
                >
                    {keys(svgMap)
                        .filter(presenceKey => (
                            Boolean(svgMap[presenceKey])
                        ))
                        .map(presenceKey => (
                            <option
                                {...{
                                    key: presenceKey,
                                    value: presenceKey
                                }}
                            >
                                {convertPresenceKeyToClassName(presenceKey)}
                            </option>
                        ))}
                </select>
                <div
                    {...{
                        className: cx(
                            'ActorsDashboard__child',
                            'Actors__kilobytes',
                            'flexCentreContainer'
                        )
                    }}
                >
                    {kilobytes.toFixed(2)} kiB
                </div>
            </div>
        )
    }
}

export default ActorsDashboard
