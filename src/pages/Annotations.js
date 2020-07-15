import Annotations from '../../admin/containers/Annotations'
import getPageComponent from '../../app/containers/Page'

export default IS_STAGING ?
    Annotations :
    getPageComponent(0)
