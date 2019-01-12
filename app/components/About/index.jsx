// Section to show credits and anchor for band website.

import React, { memo } from 'react'
import cx from 'classnames'

const About = memo(() => (
    <div className={cx(
        'About',
        'fontSize__verse'
    )}>
        <p className="About__paragraph">
            Album written, performed, and recorded by Bennett Lin.
        </p>
        <p className="About__paragraph">
            Website designed, illustrated, and coded by Bennett Lin.
        </p>
        <p className="About__paragraph">
            For Liz. In my sorry way, I loved you.
        </p>
    </div>
))

export default About
