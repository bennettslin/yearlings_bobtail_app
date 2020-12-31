import React, { memo } from 'react'
import Stylesheet from '../../../modules/Stylesheet'

import { STYLE_LOGIC_ACCESS_LETTERS } from '../../../constants/access'
import {
    PARENT_ACCESS_PREFIX,
    CHILD_ACCESS_PREFIX,
} from '../../../constants/prefixes'

const AccessStylesheet = () => (
    <Stylesheet
        {...{
            className: 'AccessStylesheet',
            indices: STYLE_LOGIC_ACCESS_LETTERS,
            parentPrefix: PARENT_ACCESS_PREFIX,
            childPrefix: CHILD_ACCESS_PREFIX,
            getStyle: () => ({ transform: 'scale(0.9)' }),
        }}
    />
)

export default memo(AccessStylesheet)
