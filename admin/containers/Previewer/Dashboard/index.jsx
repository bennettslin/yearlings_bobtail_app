import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

import PreviewerKilobytes from '../Kilobytes'

import { convertPresenceKeyToClassName } from 'helpers/format'

import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from '../../../utils/svg'

import WHOLE_ACTORS_LIST from '../../../constants/actors'
import THINGS_LIST from '../../../constants/things'

class PreviewerDashboard extends PureComponent {

    static propTypes = {
        isActor: PropTypes.bool,
        presenceType: PropTypes.string,
        presenceKey: PropTypes.string,
        kilobytes: PropTypes.number,
        hideKilobytesInMobile: PropTypes.bool,
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
                kilobytes,
                hideKilobytesInMobile
            } = this.props,
            mapGetter = isActor ?
                getPreviewerSvgMapForActor :
                getPreviewerSvgMapForThing,
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
                <PreviewerKilobytes
                    {...{
                        className: cx(
                            'PreviewerDashboard__child',
                            'flexCentreContainer'
                        ),
                        kilobytes,
                        hideInMobile: hideKilobytesInMobile
                    }}
                />
            </div>
        )
    }
}

export default PreviewerDashboard
