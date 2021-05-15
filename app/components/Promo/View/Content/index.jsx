import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const PromoViewContent = ({
    children,
    footnote,

}) => (
    <div
        {...{
            className: cx(
                'PromoViewContent',
            ),
        }}
    >
        <div
            {...{
                className: 'PromoContent__body',
            }}
        >
            {children}
        </div>
        {Boolean(footnote) && (
            <div
                {...{
                    className: 'PromoContent__footnote',
                }}
            >
                <Texts {...{ text: footnote }} />
            </div>
        )}
    </div>
)

PromoViewContent.propTypes = {
    children: PropTypes.node.isRequired,
    footnote: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
}

export default PromoViewContent
