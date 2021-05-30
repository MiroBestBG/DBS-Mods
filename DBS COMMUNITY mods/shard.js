const { ShardingManager } = require('discord.js');


const manager = new ShardingManager('./bot.js', {

    // 'auto' handles shard count automatically
    totalShards: 'auto', 

    // your bot token
    token: 'token'
});

// Spawn your shards
manager.spawn();

// The shardCreate event is emitted when a shard is created.
// You can use it for something like logging shard launches.
manager.on('shardCreate', (shard) => console.log(`Shard ${shard.id} launched`));
