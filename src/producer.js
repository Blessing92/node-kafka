const { Kafka } = require('kafkajs')
const Chance = require('chance')

const chance = new Chance()

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9093', 'localhost:9094', 'localhost:9095']
})

const producer = kafka.producer()
const topic = "animals"

const produceMessage = async () => {
  const value = chance.animal()

  try {
    await producer.send({
      topic,
      messages: [
        { value: value },
      ],
    })
  } catch (error) {
    console.error(error)
  }
}

const run = async () => {
  // Producing
  await producer.connect()
  setInterval(() => produceMessage(), 1000)
}

run().catch(console.error)
