import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

import { convertPresenceKeyToClassName } from 'helpers/format'
import THING_TYPES from '../../../constants/things'

import { getSvgMapForThingType } from '../../../utils/svg'

class PreviewerDashboard extends PureComponent {

    static propTypes = {
        presenceType: PropTypes.string,
        presenceKey: PropTypes.string,
        kilobytes: PropTypes.number,
        selectPresenceType: PropTypes.func.isRequired,
        selectPresenceKey: PropTypes.func.isRequired
    }

    selectPresenceType = ({ target: { value: presenceType } }) => {
        this.props.selectPresenceType(presenceType)
    }

    selectPresenceKey = ({ target: { value: presenceKey } }) => {
        this.props.selectPresenceKey(presenceKey)
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
                        'PreviewerDashboard'
                    )
                }}
            >
                <select
                    {...{
                        className: 'PreviewerDashboard__child',
                        value: presenceType,
                        onChange: this.selectPresenceType
                    }}
                >
                    {THING_TYPES.map(presenceType => (
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
                        className: 'PreviewerDashboard__child',
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
                            'PreviewerDashboard__child',
                            'Previewer__kilobytes',
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

export default PreviewerDashboard
