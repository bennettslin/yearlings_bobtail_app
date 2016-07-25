import React from 'react'
import DotButton from './dot-button.jsx'
import { ALL_DOT_KEYS } from '../../helpers/constants.js'

const defaultProps = {
    dotKeys: {},
    interactable: false
}

/*************
 * CONTAINER *
 *************/

const DotsBlock = (props) => (
    <DotsBlockView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const DotsBlockView = ({

    // From props.
    dotKeys,
    onDotClick

}) => (

    <span className="dots-block">
        {ALL_DOT_KEYS.filter(dotKey => {
            return dotKeys[dotKey]

        }).map((dotKey, index) => {
            return (
                <DotButton
                    key={index}
                    dotKey={dotKey}
                    onDotClick={onDotClick}
                />
            )
        })}
    </span>
)

DotsBlock.defaultProps = defaultProps
export default DotsBlock
