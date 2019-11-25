import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

import { convertPresenceKeyToClassName } from 'helpers/format'

import {
    getSvgMapForWholeActor,
    getSvgMapForUnduplicatedThing
} from '../../../utils/svg'

import WHOLE_ACTORS_LIST from '../../../constants/actors'
import THINGS_LIST from '../../../constants/things'

import './style.scss'

class PreviewerDashboard extends PureComponent {

    static propTypes = {
        isActor: PropTypes.bool,
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
                isActor,
                presenceType,
                presenceKey,
                kilobytes
            } = this.props,
            mapGetter = isActor ?
                getSvgMapForWholeActor :
                getSvgMapForUnduplicatedThing,
            svgMap = mapGetter(presenceType),
            typesList = isActor ?
                WHOLE_ACTORS_LIST :
                THINGS_LIST

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
                    {typesList.map(presenceType => (
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
                            'PreviewerDashboard__kilobytes',
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
