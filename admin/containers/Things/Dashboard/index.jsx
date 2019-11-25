import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

import { convertPresenceKeyToClassName } from 'helpers/format'
import THINGS_LIST from '../../../constants/things'

import { getSvgMapForUnduplicatedThing } from '../../../utils/svg'

class ThingsDashboard extends PureComponent {

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
            svgMap = getSvgMapForUnduplicatedThing(presenceType)

        return (
            <div
                {...{
                    className: cx(
                        'ThingsDashboard'
                    )
                }}
            >
                <select
                    {...{
                        className: 'ThingsDashboard__child',
                        value: presenceType,
                        onChange: this.selectPresenceType
                    }}
                >
                    {THINGS_LIST.map(presenceType => (
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
                        className: 'ThingsDashboard__child',
                        value: presenceKey,
                        onChange: this.selectPresenceKey
                    }}
                >
                    {keys(svgMap)
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
                            'ThingsDashboard__child',
                            'Things__kilobytes',
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

export default ThingsDashboard
