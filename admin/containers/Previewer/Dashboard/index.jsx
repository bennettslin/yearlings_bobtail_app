import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

import { convertPresenceKeyToClassName } from 'helpers/format'
import { PRESENCE_TYPES } from '../helpers'

class PreviewerDashboard extends PureComponent {

    static propTypes = {
        selectedPresenceType: PropTypes.string,
        presenceKey: PropTypes.string,
        kilobytes: PropTypes.number,
        svgMap: PropTypes.object
    }

    render() {
        const {
            selectedPresenceType,
            presenceKey,
            kilobytes,
            svgMap
        } = this.props

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
                        value: selectedPresenceType,
                        onChange: this.selectPresenceType
                    }}
                >
                    <option {...{ value: '' }}>Pick a presence type</option>
                    {PRESENCE_TYPES.map(selectedPresenceType => (
                        <option
                            {...{
                                key: selectedPresenceType,
                                value: selectedPresenceType
                            }}
                        >
                            {selectedPresenceType}
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
                    <option {...{ value: '' }}>Pick a presence key</option>
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
                    {kilobytes} kiB
                </div>
            </div>
        )
    }
}

export default PreviewerDashboard
