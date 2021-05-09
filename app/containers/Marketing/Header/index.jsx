import React from 'react'
import cx from 'classnames'
import RootButton from '../RootButton'
import './style'

const MarketingHeader = () => (
    <div
        {...{
            className: cx(
                'MarketingHeader',
            ),
        }}
    >
        <RootButton />
    </div>
)

export default MarketingHeader
