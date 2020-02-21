// Container to outline of a key on a keyboard, shared by all access icons.

import React, { memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const AboutChild = ({
    className,
    header,
    children
}) => {

    return (
        <div
            {...{
                className: cx(
                    'AboutChild',
                    className
                )
            }}
        >
            {Boolean(header) && (
                <div
                    {...{
                        className: cx(
                            'AboutChild__header',
                            'About__stylisedText',
                            'Rancho'
                        )
                    }}
                >
                    {header}
                </div>
            )}
            {children}
        </div>
    )
}

AboutChild.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    children: PropTypes.any.isRequired
}

export default memo(AboutChild)
