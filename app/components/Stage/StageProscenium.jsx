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
            <div className="proscenium-layer top" />
            <div className="proscenium-layer side left" />
            <div className="proscenium-layer side right" />
        </div>
    )
}

export default StageProscenium
