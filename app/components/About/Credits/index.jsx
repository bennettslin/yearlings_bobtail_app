import React, { memo } from 'react'
import './style'

const AboutCredits = () => (
    <div
        {...{
            className: 'AboutCredits'
        }}
    >
        <span>
            {`Album written, composed, and performed by Bennett Lin.`}
        </span>
        <br />
        <span>
            {'Website annotated, illustrated, and coded by Bennett Lin.'}
        </span>
    </div>
)

export default memo(AboutCredits)
