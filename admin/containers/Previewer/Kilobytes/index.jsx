import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PreviewerKilobytes = ({
    kilobytes,
    presenceDisplayName,
    hideInMobile,
    className

}) => Boolean(kilobytes) && (
    <div
        {...{
            className: cx(
                'PreviewerKilobytes',
                hideInMobile && 'PreviewerKilobytes__hideInMobile',
                'fCC',
                className
            )
        }}
    >
        <div
            {...{
                className: cx(
                    'PreviewerKilobytes__instance',
                    'PreviewerKilobytes__child'
                )
            }}
        >
            {presenceDisplayName}
        </div>
        <div
            {...{
                className: cx(
                    'PreviewerKilobytes__data',
                    'PreviewerKilobytes__child'
                )
            }}
        >
            {kilobytes.toFixed(2)} kB
        </div>
    </div>
)

PreviewerKilobytes.propTypes = {
    kilobytes: PropTypes.number,
    presenceDisplayName: PropTypes.string,
    hideInMobile: PropTypes.bool,
    className: PropTypes.string
}

export default PreviewerKilobytes
