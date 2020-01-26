import { Service } from 'moleculer'
import {
  action,
  service,
  param
} from 'moleculer-service-decorators'

@service()
class math extends Service {
  @action()
  add (@param({ type: 'number'}) a,
       @param({ type: 'number'}) b) {
    return a + b
  }
}
export default math
