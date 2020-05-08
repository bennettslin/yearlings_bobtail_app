import React, { memo } from 'react'

import InlineSvg from '../../modules/InlineSvg'
import dramaMasks from '../../../assets/svgs/theatre/dramaMasks'

const Spinner = () => (
    <InlineSvg
        notAbsoluteFullContainer
        {...{
            className: 'Spinner',
            svgClassName: 'dramaMasks'
        }}
    >
        {dramaMasks}
    </InlineSvg>
)

export default memo(Spinner)
