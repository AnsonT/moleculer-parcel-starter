import { Service } from 'moleculer'
import {
  action,
  service,
  param
} from 'moleculer-service-decorators'

@service()
class string extends Service {
  @action()
  concat (@param({ type: 'string' })a, @param({ type: 'string' })b) {
    return a + b
  }
}
export default string
