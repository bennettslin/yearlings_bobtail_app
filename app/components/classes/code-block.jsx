import React from 'react';

const ANCHOR_CODES = [
    'narrative', 'music', 'portal', 'pun', 'reference', 'external'
];

const defaultProps = {
    codes: {}
}

class CodeBlock extends React.Component {

    render() {
        return (
            <span className="dots-block">
                {ANCHOR_CODES.filter(code => {
                    return this.props.codes[code];

                }).map((code, index) => {
                    return (
                        <div key={index} className={'dot ' + code}>
                        </div>
                    );
                })}
            </span>
        );
    }
}

CodeBlock.defaultProps = defaultProps;
export default CodeBlock;