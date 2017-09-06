// TODO: Not presently used.

import React from 'react'

import TipsToggle from './tips-toggle'
import TextBlock from '../text/text-block'

const TipsSection = ({

...other }) => (

    <div className="section tips-section">
        <div className="tips-text">
            <div className="tips-toggle-section">
                <TipsToggle {...other} />
            </div>
            <TextBlock
                isLyric={false}
                text={"hello there"}
            />
        </div>
    </div>
)

export default TipsSection
