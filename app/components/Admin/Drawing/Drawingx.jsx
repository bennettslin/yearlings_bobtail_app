import React from 'react'

import DrawingsSection from './drawings-section'

import { getDrawings } from 'helpers/dataHelper'

const Drawing = () => {

    const drawings = getDrawings()

    return (
        <div className="Admin__column">
            <div className="Admin__field drawing">
                <DrawingsSection {...drawings}
                />
            </div>
        </div>
    )
}

export default Drawing
