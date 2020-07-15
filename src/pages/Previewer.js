import Previewer from '../../admin/containers/LegacyPreviewer'
import getPageComponent from '../../app/containers/Page'

export default IS_STAGING ?
    Previewer :
    getPageComponent(0)
