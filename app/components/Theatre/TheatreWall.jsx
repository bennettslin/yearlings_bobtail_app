import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import DynamicSvg from '../DynamicSvg/DynamicSvg'
import TheatreWallBalcony from './TheatreWallBalcony'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/generalHelper'

import { BALCONY_WIDTH_TO_HEIGHT_RATIO } from '../../constants/stage'

const mapStateToProps = ({
    canTheatreRender,
    windowHeight
}) => ({
    canTheatreRender,
    windowHeight
})

class TheatreWall extends Component {

    static propTypes = {
        canTheatreRender: PropTypes.bool.isRequired,
        windowHeight: PropTypes.number.isRequired,

        isRight: PropTypes.bool,
        wallFieldCoordinates: PropTypes.shape({
            ceilingHeight: PropTypes.number.isRequired,
            wallHeight: PropTypes.number.isRequired,
            stageHeight: PropTypes.number.isRequired,
            leftWidth: PropTypes.number.isRequired,
            rightWidth: PropTypes.number.isRequired
        })
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    render() {

        const {
                isRight,
                windowHeight,
                wallFieldCoordinates
            } = this.props,

            { ceilingHeight,
                wallHeight,
                stageHeight,
                leftWidth,
                rightWidth
            } = wallFieldCoordinates,

            wallWidth = isRight ? rightWidth : leftWidth,

            wallFieldStyle = {
                width: `${wallWidth}px`
            },

            // Arbitrary values for now.
            firstColumnBalconyHeight = stageHeight,
            firstColumnBalconyWidth =
                firstColumnBalconyHeight * BALCONY_WIDTH_TO_HEIGHT_RATIO,

            balconyColumnCoordinates = getArrayOfCoordinatesForFactoredLengths({
                minLength: wallWidth,
                firstLength: firstColumnBalconyWidth,
                multiplyFactor: 1.05, // Gets taller faster with larger value.
                overlapRatio: 0.2 // Less bunched up when closer to 0.
            })

        return (
            <div
                className={cx(
                    'TheatreWall',
                    'Theatre__field',
                    { 'TheatreWall__right': isRight }
                )}
                style={wallFieldStyle}
            >
                <DynamicSvg
                    className={cx(
                        'Theatre__subfield'
                    )}
                    viewBoxWidth={wallWidth}
                    viewBoxHeight={windowHeight}
                >
                    {balconyColumnCoordinates.map((currentCoordinates, index) => {
                        const { length: balconyWidth,
                                position: xPosition } = currentCoordinates,

                            balconyHeight = balconyWidth /
                                BALCONY_WIDTH_TO_HEIGHT_RATIO,
                            balconyTop = ceilingHeight +
                                (wallHeight - balconyHeight) / 2,
                            balconyLeft = isRight ?
                                xPosition : wallWidth - balconyWidth - xPosition

                        return (
                            <TheatreWallBalcony
                                key={index}
                                top={balconyTop}
                                left={balconyLeft}
                                width={balconyWidth}
                                height={balconyHeight}
                            />
                        )
                    })}
                </DynamicSvg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TheatreWall)
