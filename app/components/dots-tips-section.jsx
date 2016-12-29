import React from 'react'
import { TIPS_OPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const DotsTipsSection = (props) => (
    <DotsTipsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DotsTipsSectionView = ({

    // From props.
    selectedTipsIndex,
    selectedDotsIndex,
    onTipsClick,
    onDotsExpandClick

}) => {

    return (
        <div className="section dots-tips-section">
            <a
                className="dots-tips-button dots-button enabled"
                onClick={e => onDotsExpandClick(e)}
            >
                <div className="large button-icon dots-icon">
                    {selectedDotsIndex}
                </div>
            </a>
            <a
                className="dots-tips-button tips-button enabled"
                onClick={e => onTipsClick(e)}
            >
                <div className="large button-icon tips-icon">
                    {TIPS_OPTIONS[selectedTipsIndex]}
                </div>
            </a>
        </div>
    )
}

export default DotsTipsSection
