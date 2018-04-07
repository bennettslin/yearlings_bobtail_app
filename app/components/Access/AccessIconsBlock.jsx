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

AccessIconsBlock = ({

    accessIconKeys,
    accessKeysShown,
    className

}) => (
    <div className={cx(
        'AccessIconsBlock',
        { 'accessKeysShown': accessKeysShown },
        className
    )}>
        {accessIconKeys.map(accessIconKey => {

            return (
                <div
                    key={accessIconKey}
                    className="access-button-icon"
                >
                    {accessIconKey}
                </div>
            )
        })}
    </div>
)

AccessIconsBlock.propTypes = accessIconsBlockPropTypes

export default AccessIconsBlock
