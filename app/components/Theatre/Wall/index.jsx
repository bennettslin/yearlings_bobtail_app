import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from '../../Svg'
import WallBalcony from './Balcony'

import { getArrayOfCoordinatesForFactoredLengths } from 'helpers/generalHelper'

import { BALCONY_WIDTH_TO_HEIGHT_RATIO } from '../constants'

const mapStateToProps = ({
    deviceStore: {
        windowHeight,
        windowWidth,
        stageLeft,
        stageWidth,
        stageHeight,
        ceilingHeight,
        floorHeight
    },
    renderStore: { canTheatreRender }
}) => ({
    windowHeight,
    windowWidth,
    stageLeft,
    stageWidth,
    stageHeight,
    ceilingHeight,
    floorHeight,
    canTheatreRender
})

class Wall extends Component {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        stageLeft: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,
        ceilingHeight: PropTypes.number.isRequired,
        floorHeight: PropTypes.number.isRequired,

        // From parent.
        isRight: PropTypes.bool
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    render() {

        const {
                isRight,
                windowWidth,
                windowHeight,
                stageLeft,
                stageWidth,
                stageHeight,
                ceilingHeight,
                floorHeight
            } = this.props,

            leftWidth = stageLeft,
            rightWidth = windowWidth - stageLeft - stageWidth,

            wallWidth = isRight ? rightWidth : leftWidth,
            wallHeight = windowHeight - ceilingHeight - floorHeight,

            // Arbitrary values for now.
            firstColumnBalconyHeight = stageHeight,
            firstColumnBalconyWidth =
                firstColumnBalconyHeight * BALCONY_WIDTH_TO_HEIGHT_RATIO,

            balconyColumnCoordinates = getArrayOfCoordinatesForFactoredLengths({
                minLength: wallWidth,
                firstLength: firstColumnBalconyWidth,
                multiplyFactor: 1.05, // Gets taller faster with larger value.
                overlapRatio: 0.05 // Less bunched up when closer to 0.
            })

        return (
            <div
                {...{
                    className: cx(
                        'Wall',
                        'Theatre__field',
                        { 'Wall__right': isRight }
                    ),
                    style: {
                        width: `${wallWidth}px`
                    }
                }}
            >
                <Svg
                    {...{
                        className: cx(
                            'Theatre__subfield'
                        ),
                        viewBoxWidth: wallWidth,
                        viewBoxHeight: windowHeight
                    }}
                >
                    {balconyColumnCoordinates.map((currentCoordinates, index) => {
                        const {
                                length: balconyWidth,
                                position: xPosition
                            } = currentCoordinates,

                            balconyHeight = balconyWidth /
                                BALCONY_WIDTH_TO_HEIGHT_RATIO,
                            balconyTop = ceilingHeight +
                                (wallHeight - balconyHeight) / 2,
                            balconyLeft = isRight ?
                                xPosition : wallWidth - balconyWidth - xPosition

                        return (
                            <WallBalcony
                                key={index}
                                {...{
                                    top: balconyTop,
                                    left: balconyLeft,
                                    width: balconyWidth,
                                    height: balconyHeight
                                }}
                            />
                        )
                    })}
                </Svg>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Wall)
