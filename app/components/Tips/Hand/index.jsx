import React from 'react'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'
import tipsHand from 'assets/svgs/app/tips/tipsHand'

const TipsHand = () => (
    <InlineSvg
        {...{
            className: cx(
                'TipsHand',
                'abF'
            ),
            svgClassName: cx(
                'tipsHand'
            )
        }}
    >
        {tipsHand}
    </InlineSvg>
)

export default TipsHand
