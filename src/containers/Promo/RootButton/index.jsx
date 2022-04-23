import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../../components/Button'
import { reloadRootPage } from '../../../helpers/navigate'
import { ABOUT_ALBUM_TOGGLE_KEY } from '../../../constants/access'
import { ROOT_HOME_BUTTON_KEY } from '../../../constants/buttons'
import { getTitleForAlbum } from '../../../endpoint/album/title'
import './style'

const RootButton = ({ hasTitleShadowLight }) => (
    <Button
        isCustomSize
        {...{
            className: cx(
                'dramaMasks',
            ),
            buttonName: ROOT_HOME_BUTTON_KEY,
            accessKey: ABOUT_ALBUM_TOGGLE_KEY,
            handleButtonClick: reloadRootPage,
            hasTitleShadowLight,
            buttonTitle: (
                <>
                    {'\u00a0back to\u00a0'}
                    <i>{getTitleForAlbum()}</i>
                    {'\u00a0album'}
                </>
            ),
        }}
    />
)

RootButton.propTypes = {
    hasTitleShadowLight: PropTypes.bool,
}

export default RootButton
