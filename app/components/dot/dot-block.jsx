// Container to show multiple dots in sequence.

// Component class not needed after all.
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ALL_DOT_KEYS } from '../../constants/dots'

const DotBlock = ({

    dotKeys

}) => (
    <span className="dots-block">
        {ALL_DOT_KEYS.map((dotKey, index) => {

            // Go through all dot keys in array to ensure correct order.
            return dotKeys[dotKey] && (
                <div
                    key={index}
                    className="dot"
                >
                    <div className={classnames(
                        'animated-background',
                        dotKey
                    )} />
                </div>
            )
        })}
    </span>
)

DotBlock.propTypes = {
    // From parent.
    dotKeys: PropTypes.object.isRequired
}

export default DotBlock
