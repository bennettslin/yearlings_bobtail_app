// Container to show multiple access icons in sequence.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AccessLetter from '../Letter'

const propTypes = {
    // From parent.
    accessIconsName: PropTypes.string,
    showIfAccessOn: PropTypes.bool,
    accessKeys: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    className: PropTypes.string
}

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
                key={accessKey}
                animateStandaloneOnKeyDown
                {...{
                    accessKey,
                    showIfAccessOn
                }}
            />
        ))}
    </div>
)

AccessLetters.propTypes = propTypes

export default memo(AccessLetters)
