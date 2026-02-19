import React from 'react'
import cx from 'classnames'
import './style'

const AboutCredits = () => (
    <div
        {...{
            className: cx(
                `AboutCredits`,
                `AboutGrandchild`,
            ),
        }}
    >
        <div>
            {'Album composed, written, and performed by Bennett Lin.'}
            <br />
            {'Website coded, illustrated, and annotated by Bennett Lin.'}
        </div>
        {'Oakland, Portland, New York, Seattle, Los Angeles / 2001–2026'}
    </div>
)

export default AboutCredits
