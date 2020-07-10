// Container to show multiple access icons in sequence.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AccessLetter from '../Letter'
import './style'

const AccessLetters = ({
    accessIconsName,
    showIfAccessOn,
    accessKeys,
    className

}) => (
    <div className={cx(
        'AccessLetters',
        accessIconsName &&
            `AccessLetters__${accessIconsName}`,
        className
    )}>
        {accessKeys.map(accessKey => (
            <AccessLetter
                animateStandaloneOnKeyDown
                {...{
                    key: accessKey,
                    accessKey,
                    showIfAccessOn
                }}
            />
        ))}
    </div>
)

AccessLetters.propTypes = {
    accessIconsName: PropTypes.string,
    showIfAccessOn: PropTypes.bool,
    accessKeys: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    className: PropTypes.string
}

export default memo(AccessLetters)
