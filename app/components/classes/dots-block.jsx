import React from 'react';
import DotButton from './dot-button.jsx';
import Constants from '../constants/constants.js';

const defaultProps = {
    codes: {}
}

class DotsBlock extends React.Component {

    render() {
        return (
            <span className="dots-block">
                {Constants.dotCodes.filter(code => {
                    return this.props.codes[code];

                }).map((code, index) => {
                    return (
                        <DotButton
                            key={index}
                            classValue={code}
                        />
                    );
                })}
            </span>
        );
    }
}

DotsBlock.defaultProps = defaultProps;
export default DotsBlock;