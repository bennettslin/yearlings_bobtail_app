// Container to outline of a key on a keyboard, shared by all access icons.
import React from 'react'
import cx from 'classnames'
import InlineSvg from '../../../../modules/InlineSvg'
import accessKey from '../../../../../assets/svgs/app/main/accessKey'
import './style'

const AccessField = () => (
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

export default AccessField
