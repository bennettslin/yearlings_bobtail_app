// Section to show the stage proscenium.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

const mapStateToProps = ({
    loadStore: { appMounted },
    changeStore: { isSongSelectInFlux }
}) => ({
    appMounted,
    isSongSelectInFlux
})

class Curtains extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        isSongSelectInFlux: PropTypes.bool.isRequired
    }

    render() {
        const {
            appMounted,
            isSongSelectInFlux
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'Curtains',
                        {
                            'Curtains__parted':
                                !isSongSelectInFlux && appMounted
                        },
                        'abF'
                    )
                }}
            >
                <div className={cx(
                    'Curtains__left',
                    'Curtains__side',
                    'Curtains__child'
                )} />
                <div className={cx(
                    'Curtains__right',
                    'Curtains__side',
                    'Curtains__child'
                )} />
                <div className={cx(
                    'Curtains__top',
                    'Curtains__child'
                )} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Curtains)
