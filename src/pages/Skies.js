import Skies from '../../admin/containers/Skies'
import getPageComponent from '../../app/containers/Page'

export default IS_STAGING ?
    Skies :
    getPageComponent(0)
