import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import FloorSeat from './Seat'
import { getSeatingRowCoordinates } from './helper'
import { FLOOR_HEIGHT_SELECTOR } from '../../../redux/theatre/selectors'
import { WINDOW_WIDTH_SELECTOR } from '../../../redux/viewport/selectors'
import './style'

const mapStateToProps = state => {
    const {
            prosceniumStore: {
                prosceniumLeft,
                prosceniumWidth
            }
        } = state,
        floorHeight = FLOOR_HEIGHT_SELECTOR(state),
        windowWidth = WINDOW_WIDTH_SELECTOR(state)

    return {
        windowWidth,
        prosceniumLeft,
        prosceniumWidth,
        floorHeight
    }
}

class Floor extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowWidth: PropTypes.number.isRequired,
        prosceniumLeft: PropTypes.number.isRequired,
        prosceniumWidth: PropTypes.number.isRequired,
        floorHeight: PropTypes.number.isRequired
    }

    render() {
        const {
                windowWidth,
                prosceniumLeft,
                prosceniumWidth,
                floorHeight
            } = this.props,

            seatingRowCoordinates = getSeatingRowCoordinates({
                windowWidth,
                prosceniumLeft,
                prosceniumWidth,
                floorHeight
            })

        return (
            <div
                {...{
                    className: cx(
                        'Floor',
                        'Theatre__field'
                    ),
                    style: {
                        width: `${windowWidth}px`,
                        height: `${floorHeight}px`
                    }
                }}
            >
                {seatingRowCoordinates.map((seatsArray, rowIndex) => (
                    <div
                        {...{
                            key: rowIndex,
                            className: `FloorSeats__${rowIndex}`
                        }}
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
                                {...{
                                    key: chairIndex,
                                    chairIndex,
                                    rowIndex,
                                    top,
                                    left,
                                    width,
                                    height
                                }}
                            />
                        ))}
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Floor)
