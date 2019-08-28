// Container to outline of a key on a keyboard, shared by all access icons.

import React, { memo } from 'react'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'
import audioPlay from 'assets/svgs/app/audioPlay'

const AccessField = () => {

    return (
        <InlineSvg
            {...{
                svgClassName: cx(
                    'AccessField'
                )
            }}
        >
            {audioPlay}
        </InlineSvg>
    )
}

export default memo(AccessField)
