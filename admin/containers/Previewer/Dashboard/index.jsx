import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PreviewerDescription from '../Kilobytes'
import { convertPresenceKeyToClassName } from '../../../../app/helpers/format'
import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from '../../../utils/svg'
import WHOLE_ACTORS_LIST from '../../../constants/actors'
import THINGS_LIST from '../../../constants/things'

const PreviewerDashboard = ({
    isActor,
    presenceType,
    presenceKey,
    kilobytes,
    hideKilobytesInMobile,
    selectPresence

}) => {
    const
        mapGetter = isActor ?
            getPreviewerSvgMapForActor :
            getPreviewerSvgMapForThing,
        svgMap = mapGetter(presenceType),
        typesList = isActor ?
            WHOLE_ACTORS_LIST :
            THINGS_LIST

    const selectPresenceType = ({ target: { value: type } }) => {
        selectPresence({ type })
    }

    const selectPresenceKey = ({ target: { value: key } }) => {
        selectPresence({ key })
    }

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
                    onChange: selectPresenceType
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
                    onChange: selectPresenceKey
                }}
            >
                {Object.keys(svgMap)
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
            <PreviewerDescription
                {...{
                    className: cx(
                        'PreviewerDashboard__child',
                        'fCC'
                    ),
                    kilobytes,
                    hideInMobile: hideKilobytesInMobile
                }}
            />
        </div>
    )
}

PreviewerDashboard.propTypes = {
    isActor: PropTypes.bool,
    presenceType: PropTypes.string,
    presenceKey: PropTypes.string,
    kilobytes: PropTypes.number,
    hideKilobytesInMobile: PropTypes.bool,
    selectPresence: PropTypes.func.isRequired
}

export default PreviewerDashboard
