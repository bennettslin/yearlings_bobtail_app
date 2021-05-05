// Section to show pitch to labels and press.
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import MarketingNav from './Nav'
import MarketingScroll from './Scroll'
import './style'

const Marketing = forwardRef(({ pagePitchIndex }, ref) => (
    <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
        <div
            {...{
                className: cx(
                    'Marketing',
                    'fCC',
                ),
            }}
        >
            <MarketingScroll {...{ ref }} />
        </div>
        <MarketingNav />
    </PagePitchIndexContext.Provider>
))

Marketing.propTypes = {
    pagePitchIndex: PropTypes.number,
}

export default Marketing
