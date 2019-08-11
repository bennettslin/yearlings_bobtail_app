import React from 'react'
import cx from 'classnames'

import InlineSvg from 'modules/InlineSvg'
import dramaMasks from 'assets/svgs/theatre/dramaMasks'

const DramaMasks = () => (
    <div
        {...{
            className: cx(
                'DramaMasks',
                'abF'
            )
        }}
    >
        <InlineSvg
            {...{
                className: cx(
                    'dramaMasks',
                    'fillTransition__dimTheatre'
                ),
                title: 'drama masks'
            }}
        >
            {dramaMasks}
        </InlineSvg>
    </div>
)

export default DramaMasks
