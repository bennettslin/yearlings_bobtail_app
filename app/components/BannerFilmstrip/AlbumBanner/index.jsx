import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

const mapStateToProps = null

class AlbumBanner extends PureComponent {

    static propTypes = {}

    render() {
        return (
            <div
                {...{
                    className: cx(
                        'AlbumBanner',
                        'BannerFilmstrip__child',
                        'textShadow__light',
                        'ovH',
                        'Rancho'
                    )
                }}
            >
                Bobtail Yearlings - <i>{`Yearling's Bobtail`}</i>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AlbumBanner)
