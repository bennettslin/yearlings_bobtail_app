import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PreviewerDescription = ({
    kilobytes,
    presenceDisplayName,
    sharedStyle,
    hideInMobile,
    className

}) => {
    if (!kilobytes) {
        return null
    }

    return (
        <div
            {...{
                className: cx(
                    'PreviewerDescription',
                    hideInMobile && 'PreviewerDescription__hideInMobile',
                    'fCC',
                    className
                )
            }}
        >
            <div
                {...{
                    className: cx(
                        'PreviewerDescription__name',
                        'PreviewerDescription__child'
                    )
                }}
            >
                {presenceDisplayName}
            </div>
            <div
                {...{
                    className: cx(
                        'PreviewerDescription__sharedStyles',
                        'PreviewerDescription__child'
                    )
                }}
            >
                {!sharedStyle || typeof sharedStyle === 'string' ? (
                    sharedStyle || '(no shared style)'
                ) : (
                    sharedStyle.map((style, index) => (
                        <div key={index}>
                            {style}
                        </div>
                    ))
                )}
            </div>
            <div
                {...{
                    className: cx(
                        'PreviewerDescription__data',
                        'PreviewerDescription__child'
                    )
                }}
            >
                {kilobytes.toFixed(2)} kB
            </div>
        </div>
    )
}

PreviewerDescription.propTypes = {
    kilobytes: PropTypes.number,
    presenceDisplayName: PropTypes.string,
    sharedStyle: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]),
    hideInMobile: PropTypes.bool,
    className: PropTypes.string
}

export default PreviewerDescription
