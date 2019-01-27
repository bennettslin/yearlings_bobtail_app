// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from 'modules/Svg'
import CeilingRafter from './Rafter'

import { getRaftersRowCoordinates } from './helper'

const mapStateToProps = ({
    viewportStore: {
        windowWidth,
        prosceniumStore: {
            prosceniumLeft,
            prosceniumWidth
        },
        theatreStore: { ceilingHeight }
    }
}) => ({
    windowWidth,
    prosceniumLeft,
    prosceniumWidth,
    ceilingHeight
})

class Ceiling extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        prosceniumLeft: PropTypes.number.isRequired,
        prosceniumWidth: PropTypes.number.isRequired,
        ceilingHeight: PropTypes.number.isRequired
    }

    render() {
        const {
                windowWidth,
                prosceniumLeft,
                prosceniumWidth,
                ceilingHeight
            } = this.props,

            raftersRowCoordinates = getRaftersRowCoordinates({
                prosceniumLeft,
                prosceniumWidth,
                ceilingHeight
            })

        return (
            <div
                {...{
                    className: cx(
                        'Ceiling',
                        'Theatre__field'
                    ),
                    style: { height: `${ceilingHeight}px` }
                }}
            >
                <Svg
                    {...{
                        className: cx(
                            'Theatre__subfield'
                        ),
                        viewBoxWidth: windowWidth,
                        viewBoxHeight: ceilingHeight
                    }}
                >
                    {raftersRowCoordinates.map(({
                        top,
                        left,
                        width,
                        height
                    }, index) => (
                        <CeilingRafter
                            key={index}
                            {...{
                                top,
                                left,
                                width,
                                height
                            }}
                        />
                    ))}
                </Svg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Ceiling)
