import Things from '../../admin/containers/Things'
import getPageComponent from '../../app/containers/Page'

export default IS_STAGING ?
    Things :
    getPageComponent(0)
