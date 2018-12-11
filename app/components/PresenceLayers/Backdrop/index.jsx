import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import keys from 'lodash.keys'
import { connect } from 'react-redux'

import PresenceHoc from '../PresenceHoc'
import { getPropsAreShallowEqual } from 'helpers/general'
import presenceMap, { presencePropTypes } from './presenceMap'
import { BACKDROPS } from 'constants/scene'

const mapStateToProps = ({
    renderStore: { canSceneRender },
    sceneStore: { sceneCubesKey }
}) => ({
    canSceneRender,
    sceneCubesKey
})

class BackdropLayer extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneCubesKey: PropTypes.string.isRequired,

        // From parent.
        ...presencePropTypes
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        // Pass this from parent so individual presences don't need Redux.
        const { sceneCubesKey: cubesKey } = this.props

        return (
            <___>
                {keys(presenceMap).map(presenceKey => {
                    const { [presenceKey]: presenceValue } = this.props

                    return (
                        <PresenceHoc
                            key={presenceKey}
                            {...{
                                cubesKey,
                                presenceType: BACKDROPS,
                                presenceKey,
                                presenceValue
                            }}
                        />
                    )
                })}
            </___>
        )
    }
}

export default connect(mapStateToProps)(BackdropLayer)
