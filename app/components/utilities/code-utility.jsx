import React from 'react';

const ANCHOR_CODES = ['narrative', 'music', 'pun', 'portal', 'reference', 'external'];

module.exports = {
    /**
     * Returns a block of coloured dots.
     */
    getDotsBlock(codesObject = {}) {
        return (
            <span className="dots-block">
                {ANCHOR_CODES.filter(code => {
                    return codesObject[code];
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