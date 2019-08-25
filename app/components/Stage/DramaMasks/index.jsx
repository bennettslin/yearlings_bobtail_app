import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import InlineSvg from 'modules/InlineSvg'
import dramaMasks from 'assets/svgs/theatre/dramaMasks'

const mapStateToProps = ({
    viewportStore: {
        prosceniumStore: {
            prosceniumTop,
            prosceniumLeft,
            prosceniumWidth,
            prosceniumHeight
        }
    }
}) => ({
    prosceniumTop,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight
})

const DramaMasks = ({
    prosceniumTop,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight
}) => (
    <InlineSvg
        {...{
            className: cx(
                'DramaMasks',
                'abF'
            ),
            style: {
                top: `${prosceniumTop + prosceniumHeight * 0.0025}px`,
                left: `${prosceniumLeft + prosceniumWidth * 0.5}px`,
                width: `${prosceniumWidth * 0.125}px`,
                height: `${prosceniumHeight * 0.1}px`
            },
            svgClassName: cx(
                'dramaMasks',
                'fillTransition__dimTheatre'
            ),
            title: 'drama masks'
        }}
    >
        {dramaMasks}
    </InlineSvg>
)

DramaMasks.propTypes = {
    // Through Redux.
    prosceniumTop: PropTypes.number.isRequired,
    prosceniumLeft: PropTypes.number.isRequired,
    prosceniumWidth: PropTypes.number.isRequired,
    prosceniumHeight: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(DramaMasks)
