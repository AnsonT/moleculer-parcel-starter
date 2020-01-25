import { ServiceBroker } from 'moleculer'

function registerServices (broker) {
  const services = {
    ...require('./services/*.service.js'),
    ...require('./services/*.service/index.js')
  }
  for (const service in services) {
    const schema = services[service]
    broker.createService(schema.default || schema)
  }
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
