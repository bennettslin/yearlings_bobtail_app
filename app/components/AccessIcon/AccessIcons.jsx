// Container to show multiple access icons in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const accessIconsBlockPropTypes = {
    // From parent.
    accessIconKeys: PropTypes.array.isRequired,
    accessKeysShown: PropTypes.bool,
    className: PropTypes.string
},

AccessIcons = ({

    accessIconKeys,
    accessKeysShown,
    className

}) => (
    <div className={cx(
        'AccessIcons',

        // eslint-disable-next-line object-shorthand
        { 'accessKeysShown': accessKeysShown },
        className
    )}>
        {accessIconKeys.map(accessIconKey => {

            return (
                <div
                    key={accessIconKey}
                    className="AccessIcon"
                >
                    {accessIconKey}
                </div>
            )
        })}
    </div>
)

AccessIcons.propTypes = accessIconsBlockPropTypes

export default AccessIcons
