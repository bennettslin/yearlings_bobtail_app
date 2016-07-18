import React from 'react';
import DotButton from './dot-button.jsx';
import { ALL_DOT_KEYS } from '../../constants/constants.js';

const defaultProps = {
    dotKeys: {},
    interactable: false
}

/*************
 * CONTAINER *
 *************/

const DotsBlock = (props) => (
    <DotsBlockView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const DotsBlockView = ({

    // From props.
    dotKeys,
    interactable

}) => (

    <span className="dots-block">
        {ALL_DOT_KEYS.filter(dotKey => {
            return dotKeys[dotKey];

        }).map((dotKey, index) => {
            // Return either an interactable dot button or a plain div.
            // FIXME: Right now, no difference between interactable and not.
            return interactable ? (
                    <div key={index}
                        className={'dot ' + dotKey}>
                    </div>
                ) : (
                    <div key={index}
                        className={'dot ' + dotKey}>
                    </div>
                );
        })}
    </span>
);

DotsBlock.defaultProps = defaultProps;
export default DotsBlock;