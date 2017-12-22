// Section to show the stage proscenium.

import React from 'react'
// import classnames from 'classnames'

const StageProscenium = () => {

    return (
        <div
            className="stage-proscenium"
        >
            {/* Layout is all handled in css. */}
            <div className="proscenium-layer top" />
            <div className="proscenium-layer side left" />
            <div className="proscenium-layer side right" />
            {/* <div className="proscenium-layer bottom" /> */}
        </div>
    )
}

export default StageProscenium
