// Container to outline of a key on a keyboard, shared by all access icons.

import React, { memo } from 'react'
import cx from 'classnames'

import Svg from '../../../Svg'

const AccessField = memo(() => {

    return (
        <Svg
            className={cx(
                'absoluteFullContainer'
            )}
        >
            <rect
                className={cx(
                    'AccessField'
                )}
                {...{
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                }}
            />
        </Svg>
    )
})

export default AccessField
