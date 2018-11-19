import React from 'react'
import cx from 'classnames'

import Stylesheet from '../../Stylesheet'
import StaticStylesheet from '../../Stylesheet/Static'

import { STYLE_LOGIC_ACCESS_LETTERS } from 'constants/access'
import {
    PARENT_ACCESS_PREFIX,
    CHILD_ACCESS_PREFIX
} from 'constants/prefixes'

const AccessStylesheet = () => {

    return (
        <Stylesheet
            className={cx(
                'AccessStylesheet'
            )}
        >
            <StaticStylesheet
                {...{
                    indices: STYLE_LOGIC_ACCESS_LETTERS,
                    parentPrefix: PARENT_ACCESS_PREFIX,
                    childPrefix: CHILD_ACCESS_PREFIX,
                    style: {
                        transform: 'scale(0.9)'
                    }
                }}
            />
        </Stylesheet>
    )
}

export default AccessStylesheet
