import { Service } from 'moleculer'
import {
  action,
  service,
  param
} from 'moleculer-service-decorators'

function aa () {
  console.log('aa')
  return param(({ ...args }) => {
    console.dir(args)
    return (a) => a
  })
}

@service()
class string extends Service {
  @action({
    params: {
      a: 'string',
      b: 'string'
    }
  })
  concat ({ params: { a, b } }) {
    return a + b
  }
}
export default string
