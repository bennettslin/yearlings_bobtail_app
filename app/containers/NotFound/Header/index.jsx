import React from 'react'
import cx from 'classnames'
import RootButton from '../../Marketing/RootButton'
import './style'

const NotFoundHeader = () => (
    <div
        {...{
            className: cx(
                'NotFoundHeader',
            ),
        }}
    >
        <RootButton />
    </div>
)

export default NotFoundHeader
