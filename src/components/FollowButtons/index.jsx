import React from 'react'
import cx from 'classnames'
import FacebookButton from './FacebookButton'
import TwitterButton from './TwitterButton'
import './style'

const FollowButtons = () => (
    <div
        {...{
            className: cx(
                'FollowButtons',
            ),
        }}
    >
        <FacebookButton />
        <TwitterButton />
    </div>
)

export default FollowButtons
