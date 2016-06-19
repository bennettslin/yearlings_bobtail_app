import React from 'react';
import DotButton from './dot-button.jsx';
import Constants from '../constants/constants.js';

const defaultProps = {
    dotKeys: {},
    interactable: false
}

class DotsBlock extends React.Component {

    render() {
        const props = this.props;

        return (
            <span className="dots-block">
                {Constants.allDotKeys.filter(dotKey => {
                    return props.dotKeys[dotKey];

                }).map((dotKey, index) => {
                    // Return either an interactable dot button or a plain div.
                    return props.interactable ? (
                            <DotButton
                                key={index}
                                classValue={dotKey}
                            />
                        ) : (
                            <div key={index}
                                className={'dot ' + dotKey}>
                            </div>
                        );
                })}
            </span>
        );
    }
}

DotsBlock.defaultProps = defaultProps;
export default DotsBlock;