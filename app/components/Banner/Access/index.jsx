import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AccessLetters from '../../Access/Letters'

import {
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY
} from 'constants/access'

const mapStateToProps = ({
    lyricStore: { isLyricLogue }
}) => ({
    isLyricLogue
})

class BannerAccess extends PureComponent {

    static propTypes = {
        // From Redux.
        isLyricLogue: PropTypes.bool.isRequired
    }

    render() {
        const { isLyricLogue } = this.props

        return (
            <AccessLetters
                {...{
                    accessIconsName: 'banner',
                    showIfAccessOn: !isLyricLogue,
                    accessKeys: [
                        PREVIOUS_SCENE_KEY,
                        NEXT_SCENE_KEY
                    ]
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(BannerAccess)
