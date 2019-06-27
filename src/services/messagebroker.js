import NATS from 'nats';

const MessageBroker = () => {
   const broker = NATS.connect();
   console.log("MessageBroker");
}

export default MessageBroker;
