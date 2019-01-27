import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from '../../../modules/Svg'

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

const Proscenium = ({
    prosceniumTop,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight
}) => (
    <Svg
        {...{
            className: cx(
                'Proscenium',
                'abF'
            ),
            style: {
                top: `${prosceniumTop}px`,
                left: `${prosceniumLeft}px`,
                width: `${prosceniumWidth}px`,
                height: `${prosceniumHeight}px`
            }
        }}
    >
        <rect
            {...{
                className: cx(
                    'Proscenium__rect'
                ),
                x: 0,
                y: 0,
                width: 100,
                height: 100
            }}
        />
    </Svg>
)

Proscenium.propTypes = {
    // Through Redux.
    prosceniumTop: PropTypes.number.isRequired,
    prosceniumLeft: PropTypes.number.isRequired,
    prosceniumWidth: PropTypes.number.isRequired,
    prosceniumHeight: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Proscenium)
