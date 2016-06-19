import React from 'react';
import DotButton from './dot-button.jsx';
import Constants from '../constants/constants.js';

const defaultProps = {
    dotKeys: {}
}

class DotsBlock extends React.Component {

    render() {
        return (
            <span className="dots-block">
                {Constants.dotKeys.filter(dotKey => {
                    return this.props.dotKeys[dotKey];

                }).map((dotKey, index) => {
                    return (
                        <DotButton
                            key={index}
                            classValue={dotKey}
                        />
                    );
                })}
            </span>
        );
    }
}

DotsBlock.defaultProps = defaultProps;
export default DotsBlock;