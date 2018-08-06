import React from 'react'
import cx from 'classnames'

import Style from '../Style/Style'
import StaticStyling from '../Style/StaticStyling'

import { STYLE_LOGIC_ACCESS_LETTERS } from 'constants/access'
import {
    PARENT_ACCESS_PREFIX,
    CHILD_ACCESS_PREFIX
} from 'constants/prefixes'

const AccessStyle = () => {

    return (
        <Style
            className={cx(
                'AccessStyle'
            )}
        >
            <StaticStyling
                {...{
                    indices: STYLE_LOGIC_ACCESS_LETTERS,
                    parentPrefix: PARENT_ACCESS_PREFIX,
                    childPrefix: CHILD_ACCESS_PREFIX,
                    style: {
                        transform: 'scale(0.9)'
                    }
                }}
            />
        </Style>
    )
}

export default AccessStyle
