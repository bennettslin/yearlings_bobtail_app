import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../DidMountHoc'
import './style'

const AboutChild = ({
    didMount,
    className,
    header,
    children,

}) => (
    <div
        {...{
            ...didMount && {
                className: cx(
                    'AboutChild',
                    'fontSize__verse',
                    className
                ),
            },
        }}
    >
        {Boolean(header) && (
            <div
                {...{
                    ...didMount && {
                        className: cx(
                            'AboutChild__header',
                            'fontColour__title',
                            'Rancho'
                        ),
                    },
                }}
            >
                {header}
            </div>
        )}
        {children}
    </div>
)

AboutChild.propTypes = {
    didMount: PropTypes.bool.isRequired,
    className: PropTypes.string,
    header: PropTypes.string,
    children: PropTypes.any.isRequired,
}

export default getDidMountHoc(AboutChild)
