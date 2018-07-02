// Section to show credits and anchor for band website.

import React from 'react'
import cx from 'classnames'

const Title = () => (
    <div className={cx(
        'Title',
        'fontSize__verse'
    )}>
        <p className="Title__paragraph">
            Album written, performed, and recorded by Bennett Lin.
        </p>
        <p className="Title__paragraph">
            Website designed, illustrated, and coded by Bennett Lin.
        </p>
        <p className="Title__paragraph">
            For Liz. In my sorry way, I loved you.
        </p>
    </div>
)

export default Title
