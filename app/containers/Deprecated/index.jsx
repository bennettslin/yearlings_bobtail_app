import React, { useEffect } from 'react'
import cx from 'classnames'
import { removeLoadingIndicator } from '../../utils/window'

const DeprecatedContainer = () => {
    useEffect(() => {
        logMount('DeprecatedContainer')
        removeLoadingIndicator()
    }, [])

    return (
        <div className={cx(
            'DeprecatedContainer',
            'Rancho',
            'abF',
            'flexCentreContainer'
        )}>
            Sorry, this browser is not supported.
        </div>
    )
}

export default DeprecatedContainer
