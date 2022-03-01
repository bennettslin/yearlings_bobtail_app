import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import { getEntryRichText } from './helper'
import './style'

const PromoViewEntry = ({ promoKeys }) => Boolean(promoKeys) && (
    promoKeys.map(promoKey => (
        <div
            {...{
                key: promoKey,
                className: cx(
                    'PromoViewEntry',
                    'fontSize__mediumTitle',
                ),
            }}
        >
            {getEntryRichText(promoKey).map((item, index) => (
                <div {...{ key: index }} >
                    <Texts {...{ text: item }} />
                </div>
            ))}
        </div>
    ))
)

PromoViewEntry.propTypes = {
    promoKeys: PropTypes.arrayOf(
        PropTypes.string.isRequired,
    ),
}

export default PromoViewEntry
