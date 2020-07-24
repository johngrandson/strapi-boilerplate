module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb://admin:admin@cluster0-shard-00-00.ewvri.mongodb.net:27017,cluster0-shard-00-01.ewvri.mongodb.net:27017,cluster0-shard-00-02.ewvri.mongodb.net:27017/dp_database?ssl=true&replicaSet=atlas-xlrwk3-shard-0&authSource=admin&retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
