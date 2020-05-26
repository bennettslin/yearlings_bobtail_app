import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import InlineSvg from '../../../modules/InlineSvg'
import proscenium from '../../../../assets/svgs/theatre/proscenium'

const mapStateToProps = state => {
    const {
        prosceniumStore: {
            prosceniumTop,
            prosceniumLeft,
            prosceniumWidth,
            prosceniumHeight
        }
    } = state

    return {
        prosceniumTop,
        prosceniumLeft,
        prosceniumWidth,
        prosceniumHeight
    }
}

const Proscenium = ({
    prosceniumTop,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight
}) => (
    <InlineSvg
        {...{
            className: cx(
                'Proscenium'
            ),
            style: {
                top: `${prosceniumTop}px`,
                left: `${prosceniumLeft}px`,
                width: `${prosceniumWidth}px`,
                height: `${prosceniumHeight}px`
            },
            svgClassName: cx(
                'proscenium',
                'fillTransition__dimTheatre'
            )
        }}
    >
        {proscenium}
    </InlineSvg>
)

Proscenium.propTypes = {
    // Through Redux.
    prosceniumTop: PropTypes.number.isRequired,
    prosceniumLeft: PropTypes.number.isRequired,
    prosceniumWidth: PropTypes.number.isRequired,
    prosceniumHeight: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Proscenium)
