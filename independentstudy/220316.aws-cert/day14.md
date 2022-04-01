# Day 14 & 15

## Databases

* Storage volume backups / snapshots can be performed with no downtime/latency, but database backups can take a few seconds to initialize and can cause latency.
* Document store no-SQL databases aren't great for complex queries, cross-table queries, or data in which every field needs to be queryable. Every query you write must be on the primary key, primary + sort, or have an index behind it.
* For tables that need sometimes-burst writes, enable DynamoDB Autoscaling. (Also see "burst capacity.")
* DynamoDB Local for development
* On RedShift, coordinating snapshots and data dumps - tooling? (Frozen file system?)
* Write-through caching with DynamoDB streams versus streamless databases.
* Memcached does not have disk persistence built in (Redis does.)
* DAX = DynamoDB with built-in smart caching. Ideally, you don't have to refactor your application to make use of DAX.

* Read more on LeadingKeys policies for DynamoDB.
* Research star schema, snowflake schema
