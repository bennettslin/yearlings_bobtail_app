import React from 'react';
import DotButton from './dot-button.jsx';

const ANCHOR_CODES = [
    'narrative',
    'music',
    'portal',
    'pun',
    'reference',
    'external'
];

const defaultProps = {
    codes: {}
}

class DotsBlock extends React.Component {

    render() {
        return (
            <span className="dots-block">
                {ANCHOR_CODES.filter(code => {
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