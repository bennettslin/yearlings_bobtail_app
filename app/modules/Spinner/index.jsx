import React from 'react'
import InlineSvg from '../../modules/InlineSvg'
import dramaMasks from '../../../assets/svgs/theatre/dramaMasks'
import './style'

const Spinner = () => (
    <InlineSvg
        notAbsoluteFullContainer
        {...{
            className: 'Spinner',
            svgClassName: 'dramaMasks',
        }}
    >
        {dramaMasks}
    </InlineSvg>
)

export default Spinner
