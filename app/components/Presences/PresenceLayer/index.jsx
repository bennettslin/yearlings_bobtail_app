import React, { Component } from 'react'
import PropTypes from 'prop-types'
import keys from 'lodash.keys'
import { connect } from 'react-redux'

import PresenceHoc from '../PresenceHoc'
import { getMapForPresenceType } from '../helper'
import { getPropsAreShallowEqual } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canSceneRender },
    sceneStore: { sceneCubesKey }
}) => ({
    canSceneRender,
    sceneCubesKey
})

class PresenceLayer extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        sceneCubesKey: PropTypes.string.isRequired,

        // From parent. Parent also passes presenceKeys.
        presenceType: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const
            {
                sceneCubesKey: cubesKey,
                presenceType
            } = this.props,

            presenceMap = getMapForPresenceType(presenceType)

        return (
            keys(presenceMap).map(presenceKey => {
                const { [presenceKey]: presenceValue } = this.props

                return (
                    <PresenceHoc
                        key={presenceKey}
                        {...{
                            cubesKey,
                            presenceType,
                            presenceKey,
                            presenceValue
                        }}
                    />
                )
            })
        )
    }
}

export default connect(mapStateToProps)(PresenceLayer)
