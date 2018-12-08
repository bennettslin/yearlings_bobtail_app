// Section to show the stage illustrations.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from '../../Svg'
import CeilingRafter from './Rafter'

import { getArrayOfCoordinatesForFactoredLengths } from 'helpers/general'

import { RAFTER_HEIGHT_TO_WIDTH_RATIO } from '../constants'

const mapStateToProps = ({
    deviceStore: {
        windowWidth,
        stageLeft,
        stageWidth,
        ceilingHeight
    }
}) => ({
    windowWidth,
    stageLeft,
    stageWidth,
    ceilingHeight
})

class Ceiling extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        stageLeft: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        ceilingHeight: PropTypes.number.isRequired
    }

    render() {
        const {
                windowWidth,
                stageLeft,
                stageWidth,
                ceilingHeight
            } = this.props,

            stageCentreFromLeft = stageLeft + (stageWidth / 2),

            // Arbitrary values for now.
            firstRowRafterWidth = stageWidth * 1.1,
            firstRowRafterHeight = firstRowRafterWidth * RAFTER_HEIGHT_TO_WIDTH_RATIO,

            raftersRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
                minLength: ceilingHeight,
                firstLength: firstRowRafterHeight,
                multiplyFactor: 1.2, // Gets wider faster with larger value.
                overlapRatio: 0.3 // Less bunched up when closer to 0.
            })

        return (
            <div
                {...{
                    className: cx(
                        'Ceiling',
                        'Theatre__field'
                    ),
                    style: {
                        height: `${ceilingHeight}px`
                    }
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
                    {raftersRowCoordinates.map((currentCoordinates, index) => {
                        const {
                                length: rafterHeight,
                                position: rafterBottom
                            } = currentCoordinates,

                            rafterWidth = rafterHeight /
                                RAFTER_HEIGHT_TO_WIDTH_RATIO,

                            rafterTop =
                                ceilingHeight
                                - rafterHeight
                                - rafterBottom,
                            rafterLeft =
                                stageCentreFromLeft
                                - rafterWidth / 2

                        return (
                            <CeilingRafter
                                key={index}
                                {...{
                                    top: rafterTop,
                                    left: rafterLeft,
                                    width: rafterWidth,
                                    height: rafterHeight
                                }}
                            />
                        )
                    })}
                </Svg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Ceiling)
