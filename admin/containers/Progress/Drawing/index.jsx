import React from 'react'

import DrawingSection from './DrawingSection'

import { getDrawings } from './helpers'

const Drawing = () => {

    const drawings = getDrawings()

    return (
        <div className="Admin__column">
            <div className="Admin__field drawing">
                <DrawingSection {...drawings} />
            </div>
        </div>
    )
}

export default Drawing
