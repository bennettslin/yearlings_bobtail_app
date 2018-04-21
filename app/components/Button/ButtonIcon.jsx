/**
 * TODO: Placeholder for icon that will eventually be an actual svg. For now,
 * only styling is width, height, and background colour.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    showDisabled: PropTypes.bool,
    temporaryName: PropTypes.string,
    temporaryText: PropTypes.any
}

const ButtonIcon = ({

    showDisabled,
    temporaryName,
    temporaryText

}) => (
    <div className={cx(
        'ButtonIcon',

        !showDisabled &&
            `ButtonIcon__temporaryEnabledName__${temporaryName}`,

        { 'ButtonIcon__disabled': showDisabled },

        // Maybe temporary.
        'flexCentreContainer'
    )}>
        {temporaryText}
    </div>
)

ButtonIcon.propTypes = propTypes

export default ButtonIcon
