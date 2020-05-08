// Container to outline of a key on a keyboard, shared by all access icons.

import React, { memo } from 'react'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'
import accessKey from '../../../../../assets/svgs/app/main/accessKey'

const AccessField = () => {

    return (
        <InlineSvg
            {...{
                svgClassName: cx(
                    'AccessField',
                    'dropShadow__small'
                )
            }}
        >
            {accessKey}
        </InlineSvg>
    )
}

export default memo(AccessField)
