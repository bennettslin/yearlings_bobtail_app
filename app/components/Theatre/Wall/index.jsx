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
        prosceniumStore: {
            prosceniumLeft,
            prosceniumWidth,
            prosceniumHeight
        },
        theatreStore: { ceilingHeight }
    }
}) => ({
    windowHeight,
    windowWidth,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight,
    ceilingHeight
})

class Wall extends PureComponent {

    static propTypes = {
        // Through Redux.
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        prosceniumLeft: PropTypes.number.isRequired,
        prosceniumWidth: PropTypes.number.isRequired,
        prosceniumHeight: PropTypes.number.isRequired,
        ceilingHeight: PropTypes.number.isRequired,

        // From parent.
        isRight: PropTypes.bool
    }

    render() {

        const {
                isRight,
                windowWidth,
                windowHeight,
                prosceniumLeft,
                prosceniumWidth,
                prosceniumHeight,
                ceilingHeight
            } = this.props,

            wallWidth = getWallWidth({
                isRight,
                prosceniumLeft,
                prosceniumWidth,
                windowWidth
            }),

            balconyColumnCoordinates = getBalconyColumnCoordinates({
                isRight,
                windowWidth,
                prosceniumLeft,
                prosceniumWidth,
                prosceniumHeight,
                ceilingHeight
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
