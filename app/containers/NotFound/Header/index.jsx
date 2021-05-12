import React from 'react'
import cx from 'classnames'
import RootButton from '../../Promo/RootButton'
import './style'

const NotFoundHeader = () => (
    <div
        {...{
            className: cx(
                'NotFoundHeader',
            ),
        }}
    >
        <RootButton hasTitleShadowLight />
    </div>
)

export default NotFoundHeader
