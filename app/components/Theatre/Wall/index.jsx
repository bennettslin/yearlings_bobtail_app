import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from 'modules/Svg'
import WallBalcony from './Balcony'

import {
    getBalconyColumnCoordinates,
    getWallWidth
} from './helper'

const mapStateToProps = ({
    viewportStore: {
        windowHeight,
        windowWidth,
        stageStore: {
            stageLeft,
            stageWidth,
            stageHeight
        },
        theatreStore: {
            ceilingHeight,
            floorHeight
        }
    }
}) => ({
    windowHeight,
    windowWidth,
    stageLeft,
    stageWidth,
    stageHeight,
    ceilingHeight,
    floorHeight
})

class Wall extends PureComponent {

    static propTypes = {
        // Through Redux.
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

            wallWidth = getWallWidth({
                isRight,
                stageLeft,
                stageWidth,
                windowWidth
            }),

            balconyColumnCoordinates = getBalconyColumnCoordinates({
                isRight,
                windowWidth,
                windowHeight,
                stageLeft,
                stageWidth,
                stageHeight,
                ceilingHeight,
                floorHeight
            })

        return (
            <div
                {...{
                    className: cx(
                        'Wall',
                        'Theatre__field',
                        { 'Wall__right': isRight }
                    ),
                    style: { width: `${wallWidth}px` }
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
                    {balconyColumnCoordinates.map(({
                        top,
                        left,
                        width,
                        height
                    }, index) => (
                        <WallBalcony
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

export default connect(mapStateToProps)(Wall)
