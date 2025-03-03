# Kafka Node.js Microservice 🚀

A **scalable, event-driven microservice** using **Apache Kafka** and **Node.js** for real-time data streaming and message processing. This project demonstrates how to build a Kafka-based system with producers, consumers, and multiple brokers.

## Features ✨
✅ **Kafka Producers & Consumers** – Publish and process messages efficiently  
✅ **Multi-Broker Setup** – Supports a **3-node Kafka cluster** for high availability  
✅ **Real-Time Event Streaming** – Handles live data with **Apache Kafka**  
✅ **Message Persistence** – Uses **Kafka Topics** with partitions & replication  
✅ **Error Handling & Logging** – Implements **retry mechanisms** and structured logging  
✅ **Scalable & Resilient** – Designed for **microservices** and distributed environments  

## Tech Stack 🛠
- **Node.js** (with TypeScript support)
- **Apache Kafka** (multi-broker setup)
- **KafkaJS** (Kafka client for Node.js)

## Installation & Setup 🏗

### 1️⃣ Start Kafka Locally (using Homebrew)
```sh
brew services start zookeeper
brew services start kafka
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Kafka Producer & Consumer
- Start **Producer** (publishes messages):  
  ```sh
  node producer.js
  ```
- Start **Consumer** (reads messages):  
  ```sh
  node consumer.js
  ```

## Usage 🎯
- Configure topics and partitions in `config.js`
- Modify **message processing logic** in `consumer.js`
- Extend the project for **microservices architecture**

## Monitoring 📊
To monitor Kafka performance, you can use built-in tools like:
- **Kafka CLI tools** – Check topic status, consumer groups, and offsets
  ```sh
  kafka-consumer-groups --bootstrap-server localhost:9093 --describe --group my-group
  ```
- **Kafka logs** – View logs for troubleshooting:
  ```sh
  tail -f /usr/local/var/log/kafka.log
  ```
- **JMX Metrics** – Enable JMX monitoring for deeper insights
  ```sh
  JMX_PORT=9999 kafka-server-start /opt/homebrew/etc/kafka/server.properties
  ```

## Contributing 🤝
Contributions are welcome! Feel free to **fork** and submit a **PR**.

## License 📜
This project is licensed under the MIT License.
