import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import TogetherSketchbook from './Bubbles/TogetherSketchbook'
import ApartSketchbook from './Bubbles/ApartSketchbook'
import DogsSketchbook from './Bubbles/DogsSketchbook'
import EscapePodSketchbook from './Bubbles/EscapePodSketchbook'
import CinemaThoughts from './Bubbles/CinemaThoughts'
import TarpitThought from './Bubbles/TarpitThought'
import SiblingThought from './Bubbles/SiblingThought'

import {
    TOGETHER_SKETCHBOOK,
    APART_SKETCHBOOK,
    DOGS_SKETCHBOOK,
    ESCAPE_POD_SKETCHBOOK,
    CINEMA_THOUGHTS,
    TARPIT_THOUGHT,
    SIBLING_THOUGHT
} from 'scene/bubbleKeys'

const BUBBLES_MAP = {
    [TOGETHER_SKETCHBOOK]: TogetherSketchbook,
    [APART_SKETCHBOOK]: ApartSketchbook,
    [DOGS_SKETCHBOOK]: DogsSketchbook,
    [ESCAPE_POD_SKETCHBOOK]: EscapePodSketchbook,
    [CINEMA_THOUGHTS]: CinemaThoughts,
    [TARPIT_THOUGHT]: TarpitThought,
    [SIBLING_THOUGHT]: SiblingThought
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Bubble = ({

    className,
    nameKey,

...other }) => {

    const BubbleComponent =
        BUBBLES_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <BubbleComponent {...other}
            className={cx(
                'Bubble',
                className
            )}
        />
    )
}

Bubble.propTypes = propTypes;

export default Bubble
