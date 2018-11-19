// Section to show the stage proscenium.

import React, { Fragment } from 'react'
import cx from 'classnames'

const Proscenium = () => (
    <Fragment>
        {/* Layout is all handled in css. */}
        <div className={cx(
            'Proscenium__top',
            'Proscenium__horizontal',
            'Proscenium__child'
        )} />
        <div className={cx(
            'Proscenium__left',
            'Proscenium__vertical',
            'Proscenium__child'
        )} />
        <div className={cx(
            'Proscenium__right',
            'Proscenium__vertical',
            'Proscenium__child'
        )} />
        <div className={cx(
            'Proscenium__pit',
            'Proscenium__horizontal',
            'Proscenium__child'
        )} />
    </Fragment>
)

export default Proscenium
