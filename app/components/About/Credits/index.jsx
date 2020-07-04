import React, { memo } from 'react'
import './style'

const AboutCredits = () => (
    <>
        <span {...{ className: 'AboutCredits__finePrint' }}>
            {`Album written, composed, and performed by Bennett Lin.`}
        </span>
        <br />
        <span {...{ className: 'AboutCredits__finePrint' }}>
            {'Website annotated, illustrated, and coded by Bennett Lin.'}
        </span>
    </>
)

export default memo(AboutCredits)
