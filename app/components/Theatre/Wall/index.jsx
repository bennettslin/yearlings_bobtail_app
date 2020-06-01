import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import WallBalcony from './Balcony'
import {
    getBalconyColumnCoordinates,
    getWallWidth
} from './helper'
import { mapCeilingHeight } from '../../../redux/theatre/selectors'
import {
    mapWindowWidth,
    mapWindowHeight
} from '../../../redux/viewport/selectors'
import './style'

const mapStateToProps = state => {
    const {
            prosceniumStore: {
                prosceniumLeft,
                prosceniumWidth,
                prosceniumHeight
            }
        } = state,
        ceilingHeight = mapCeilingHeight(state),
        windowWidth = mapWindowWidth(state),
        windowHeight = mapWindowHeight(state)

    return {
        windowHeight,
        windowWidth,
        prosceniumLeft,
        prosceniumWidth,
        prosceniumHeight,
        ceilingHeight
    }
}

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
                        'Theatre__field'
                    ),
                    style: {
                        width: `${wallWidth}px`,
                        height: `${windowHeight}`,

                        ...isRight && {
                            left: 'auto',
                            right: 0
                        }
                    }
                }}
            >
                {balconyColumnCoordinates.map(({
                    top,
                    left,
                    width,
                    height
                }, index) => (
                    <WallBalcony
                        {...{
                            key: index,
                            top,
                            left,
                            width,
                            height,
                            isLeft: !isRight
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Wall)
