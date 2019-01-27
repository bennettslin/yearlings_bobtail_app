import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from 'modules/Svg'
import FloorSeat from './Seat'

import { getSeatingRowCoordinates } from './helper'

const mapStateToProps = ({
    viewportStore: {
        windowWidth,
        stageLeft,
        stageWidth,
        floorHeight
    }
}) => ({
    windowWidth,
    stageLeft,
    stageWidth,
    floorHeight
})

class Floor extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        stageLeft: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        floorHeight: PropTypes.number.isRequired
    }

    render() {
        const {
                windowWidth,
                stageLeft,
                stageWidth,
                floorHeight
            } = this.props,

            seatingRowCoordinates = getSeatingRowCoordinates({
                windowWidth,
                stageLeft,
                stageWidth,
                floorHeight
            })

        return (
            <div
                {...{
                    className: cx(
                        'Floor',
                        'Theatre__field'
                    ),
                    style: { height: `${floorHeight}px` }
                }}
            >
                <Svg
                    {...{
                        className: cx(
                            'Theatre__subfield'
                        ),
                        viewBoxWidth: windowWidth,
                        viewBoxHeight: floorHeight
                    }}
                >
                    {seatingRowCoordinates.map((seatsArray, rowIndex) => (
                        <g
                            key={rowIndex}
                            className={`FloorSeats__${rowIndex}`}
                        >
                            {seatsArray.map(({
                                chairIndex,
                                rowIndex,
                                top,
                                left,
                                width,
                                height
                            }) => (
                                <FloorSeat
                                    key={chairIndex}
                                    {...{
                                        chairIndex,
                                        rowIndex,
                                        top,
                                        left,
                                        width,
                                        height
                                    }}
                                />
                            ))}
                        </g>
                    ))}
                </Svg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Floor)
