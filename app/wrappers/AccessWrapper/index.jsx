import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import { PARENT_ACCESS_PREFIX } from '../../constants/prefixes'
import {
    mapIsAccessOn,
    mapAccessedKey
} from '../../redux/access/selector'

const AccessWrapper = ({ didMount, children }) => {
    const
        isAccessOn = useSelector(mapIsAccessOn),
        accessedKey = useSelector(mapAccessedKey)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'AccessWrapper',
                        isAccessOn ?
                            'AcW__accessOn' :
                            'AcW__accessOff',
                        accessedKey &&
                            `${PARENT_ACCESS_PREFIX}${accessedKey}`,
                        'abF'
                    )
                }
            }}
        >
            {children}
        </div>
    )
}

AccessWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}

export default memo(getDidMountHoc(AccessWrapper))
