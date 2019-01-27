// Section to show the stage proscenium.

import React, { Fragment as ___ } from 'react'
import cx from 'classnames'

const Proscenium = () => (
    <___>
        {/* Layout is all handled in css. */}
        <div className={cx(
            'Proscenium__pit',
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
            'Proscenium__top',
            'Proscenium__horizontal',
            'Proscenium__child'
        )} />
    </___>
)

export default Proscenium
