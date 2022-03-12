import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Texts from '../../../Texts'
import './style'

const PromoScrollTitle = ({ title }) => (
    <div
        {...{
            className: cx(
                'PromoScrollTitle',
                'fontColour__title',
                'fontSize__largerTitle',
                'font__heading',
            ),
        }}
    >
        <Texts {...{ text: title }} />
    </div>
)

PromoScrollTitle.propTypes = {
    title: PropTypes.any.isRequired,
}

export default PromoScrollTitle
