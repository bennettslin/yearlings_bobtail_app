import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const PromoViewList = ({ list }) => (
    <div
        {...{
            className: cx(
                'PromoViewList',
                'fontSize__mediumTitle',
            ),
        }}
    >
        {list.map((item, index) => (
            <div
                {...{
                    key: index,
                    className: cx(
                        'PromoViewListItem',
                    ),
                }}
            >
                <Texts {...{ text: item }} />
            </div>
        ))}
    </div>
)

PromoViewList.propTypes = {
    list: PropTypes.array,
}

export default PromoViewList
