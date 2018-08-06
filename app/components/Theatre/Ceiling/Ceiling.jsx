// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from 'components/Svg/Svg'
import CeilingRafter from './CeilingRafter'

import { getArrayOfCoordinatesForFactoredLengths } from 'helpers/generalHelper'

import { RAFTER_HEIGHT_TO_WIDTH_RATIO } from '../theatreConstants'

const mapStateToProps = ({
    canTheatreRender,
    deviceStore
}) => ({
    canTheatreRender,
    windowWidth: deviceStore.windowWidth
})

class Ceiling extends Component {

    static propTypes = {
        canTheatreRender: PropTypes.bool.isRequired,
        windowWidth: PropTypes.number.isRequired,

        ceilingFieldCoordinates: PropTypes.shape({
            ceilingHeight: PropTypes.number.isRequired,
            stageWidth: PropTypes.number.isRequired,
            stageCentreFromLeft: PropTypes.number.isRequired
        })
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.canTheatreRender && !prevProps.canTheatreRender) {
    //         logger.warn('Ceiling rendered.')
    //     }
    // }

    render() {
        const {
                windowWidth,
                ceilingFieldCoordinates
            } = this.props,

            {
                ceilingHeight,
                stageWidth,
                stageCentreFromLeft
            } = ceilingFieldCoordinates,

            ceilingFieldStyle = {
                height: `${ceilingHeight}px`
            },

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
                className={cx(
                    'Ceiling',
                    'Theatre__field'
                )}
                style={ceilingFieldStyle}
            >
                <Svg
                    className={cx(
                        'Theatre__subfield'
                    )}
                    viewBoxWidth={windowWidth}
                    viewBoxHeight={ceilingHeight}
                >
                    {raftersRowCoordinates.map((currentCoordinates, index) => {
                        const { length: rafterHeight,
                                position: rafterBottom } = currentCoordinates,

                            rafterWidth = rafterHeight /
                                RAFTER_HEIGHT_TO_WIDTH_RATIO,

                            rafterTop = ceilingHeight - rafterHeight - rafterBottom,
                            rafterLeft = stageCentreFromLeft - rafterWidth / 2

                        return (
                            <CeilingRafter
                                key={index}
                                top={rafterTop}
                                left={rafterLeft}
                                width={rafterWidth}
                                height={rafterHeight}
                            />
                        )
                    })}
                </Svg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Ceiling)
