import React from 'react'
import cx from 'classnames'
import RootButton from '../RootButton'
import './style'

const PromoHeader = () => (
    <div
        {...{
            className: cx(
                'PromoHeader',
            ),
        }}
    >
        <RootButton />
    </div>
)

export default PromoHeader
