/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'
import keys from 'lodash.keys'

import {
    setCanRenderPixels
} from '../../../redux/actions/render'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'
import Presence from './Presence'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

const mapStateToProps = ({
    canPresencesRender
}) => ({
    canPresencesRender
})

class Presences extends Component {

    static defaultProps = {
        presences: {}
    }

    static propTypes = {
        // Through Redux.
        canPresencesRender: PropTypes.bool.isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired,
        presences: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props)

        this._setCanRenderPixels = this._setCanRenderPixels.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        /**
         * Not anticipating presences to affect performance. So all yIndices
         * will render simultaneously, at least for now.
         */
        return nextProps.canPresencesRender
    }

    componentDidUpdate(prevProps) {
        const {
                canPresencesRender,
                yIndex
            } = this.props,
            {
                canPresencesRender: couldPresencesRender
            } = prevProps

        if (canPresencesRender && !couldPresencesRender) {

            // Only one component will make this call.
            if (yIndex === CUBE_Y_AXIS_LENGTH - 1) {
                setTimeout(
                    this._setCanRenderPixels,
                    0
                )
            }
        }
    }

    _setCanRenderPixels() {
        console.warn('Presences rendered.')
        this.props.setCanRenderPixels(true)
    }

    render() {

        const {
                /* eslint-disable no-unused-vars */
                canPresencesRender,
                setCanRenderPixels,
                dispatch,
                /* eslint-disable no-unused-vars */

                yIndex,
                presences,
                ...other
            } = this.props,

            presenceTypes = keys(presences)

        return (
            <DynamicSvg
                className={cx(
                    `Presences__y${yIndex}`,
                    'absoluteFullContainer'
                )}
                viewBoxWidth={100}
                viewBoxHeight={100}
            >
                {presenceTypes.map(presenceType => {
                    const presenceEntity = presences[presenceType],

                        /**
                         * This is either an array of presences, or a single
                         * presence. If it's a single presence, make it an
                         * array of one.
                         */
                        presenceArray = Array.isArray(presenceEntity) ?
                            presenceEntity :
                            [presenceEntity]

                        return presenceArray.map((presence, index) => (
                            <Presence
                                key={index}
                                type={presenceType}
                                {...presence}
                                {...other}
                                yIndex={yIndex}
                            />
                        ))
                })}
            </DynamicSvg>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanRenderPixels
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Presences)
