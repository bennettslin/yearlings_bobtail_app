import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const PreviewerDescription = ({
    kilobytes,
    presenceKey,
    scaleFactor,
    // sharedStyle,
    hideInMobile,
    className,

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
                    className,
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'PreviewerDescription__name',
                        'PreviewerDescription__child',
                    ),
                }}
            >
                {presenceKey}
            </div>
            {/* <div
                {...{
                    className: cx(
                        'PreviewerDescription__sharedStyles',
                        'PreviewerDescription__child',
                    ),
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
            </div> */}
            {Boolean(scaleFactor) && (
                <div
                    {...{
                        className: cx(
                            'PreviewerDescription__scaleFactor',
                            'PreviewerDescription__child',
                        ),
                    }}
                >
                    {`scaleFactor: ${scaleFactor}`}
                </div>
            )}
            <div
                {...{
                    className: cx(
                        'PreviewerDescription__data',
                        'PreviewerDescription__child',
                    ),
                }}
            >
                {kilobytes.toFixed(2)} kB
            </div>
        </div>
    )
}

PreviewerDescription.propTypes = {
    kilobytes: PropTypes.number,
    presenceKey: PropTypes.string,
    scaleFactor: PropTypes.number,
    sharedStyle: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
    hideInMobile: PropTypes.bool,
    className: PropTypes.string,
}

export default PreviewerDescription
