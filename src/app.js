import { ServiceBroker } from 'moleculer'
import { test } from './test'

function registerServices (broker) {
  const services = {
    ...require('./services/*.service.js'),
    ...require('./services/*.service/index.js'),
    ...require('./services/*.service.ts'),
    ...require('./services/*.service/index.ts'),
  }
  for (const service in services) {
    const schema = services[service]
    broker.createService(schema.default || schema)
  }
  test()
}

export default async function initApp () {
  var broker = new ServiceBroker({
    logger: console,
    transporter: null
  })
  registerServices(broker)
  await broker.start()
  broker.repl()
}
