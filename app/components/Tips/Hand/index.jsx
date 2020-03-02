import React from 'react'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'
import tipsHand from 'assets/svgs/app/tips/tipsHand'

import { GHOST__SHARED } from '../../../scene/sharedStyles/wardrobe'

const TipsHand = () => (
    <InlineSvg
        {...{
            className: cx(
                'TipsHand',
                'abF'
            ),
            svgClassName: cx(
                'tipsHand',
                `${GHOST__SHARED}__shared`
            )
        }}
    >
        {tipsHand}
    </InlineSvg>
)

export default TipsHand
