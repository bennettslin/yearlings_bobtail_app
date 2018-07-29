import React from 'react'
import cx from 'classnames'

import Style from '../Style/Style'

import { STYLE_LOGIC_ACCESS_LETTERS } from '../../constants/access'
import {
    ROOT_ACCESS_PREFIX,
    CHILD_ACCESS_PREFIX
} from '../../constants/prefixes'

const AccessField = () => {

    return (
        <Style
            className={cx(
                'AccessStyle'
            )}
            {...{
                indices: STYLE_LOGIC_ACCESS_LETTERS,
                rootPrefix: ROOT_ACCESS_PREFIX,
                childPrefix: CHILD_ACCESS_PREFIX,
                style: {
                    transform: 'scale(0.9)'
                }
            }}
        />
    )
}

export default AccessField
