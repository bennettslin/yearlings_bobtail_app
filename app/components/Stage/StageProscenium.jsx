// Section to show the stage proscenium.

import React from 'react'
import cx from 'classnames'

const StageProscenium = () => {

    return (
        <div
            className={cx(
                'StageProscenium',
                'absoluteFullContainer'
            )}
        >
            {/* Layout is all handled in css. */}
            <div className={cx(
                'StageProscenium__top',
                'StageProscenium__child'
            )} />
            <div className={cx(
                'StageProscenium__left',
                'StageProscenium__side',
                'StageProscenium__child'
            )} />
            <div className={cx(
                'StageProscenium__right',
                'StageProscenium__side',
                'StageProscenium__child'
            )} />
        </div>
    )
}

export default StageProscenium
