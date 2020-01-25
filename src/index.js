import { ServiceBroker } from 'moleculer'

function registerServices (broker) {
  const services = require('./services/*.service.js')
  for (const service in services) {
    const schema = services[service]
    broker.createService(schema.default || schema)
  }
}

var broker = new ServiceBroker({
  logger: console,
  transporter: null
})
registerServices(broker)
broker.start().then(() => broker.repl())
