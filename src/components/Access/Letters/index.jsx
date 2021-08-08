// Container to show multiple access icons in sequence.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import AccessLetter from '../Letter'
import './style'

const AccessLetters = ({
    didMount,
    accessIconsName,
    showIfAccessOn,
    accessKeys,
    className,

}) => didMount && (
    <div className={cx(
        'AccessLetters',
        accessIconsName &&
            `AccessLetters__${accessIconsName}`,
        className,
    )}>
        {accessKeys.map(accessKey => (
            <AccessLetter
                animateStandaloneOnKeyDown
                {...{
                    key: accessKey,
                    accessKey,
                    showIfAccessOn,
                }}
            />
        ))}
    </div>
)

AccessLetters.propTypes = {
    didMount: PropTypes.bool.isRequired,
    accessIconsName: PropTypes.string,
    showIfAccessOn: PropTypes.bool,
    accessKeys: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ).isRequired,
    className: PropTypes.string,
}

export default memo(getDidMountHoc(AccessLetters))
