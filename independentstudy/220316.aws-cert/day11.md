# Day 11

## Lambda functions and DynamoDB
I finally finished the sixteen-hour Free Code Camp video course last night. As a reward, I'm jumping ahead to see if I can't pull together a Lambda function in C# that uses DynamoDB.

I've written Lambda functions in the past, but they've been very simple trigger-of-trigger things.

### Session 1

I've managed to handle the IAM policy/role problems that stopped me the last time I tried this and retrieve a single record by ID, but I'm running into a problem when I try to query just by the sort key. Breaking for lunch.

### Session 2

The trick is to create a new global index (yes, global) and give your policy/role permission to query that index. I've now created a function that retrieves steps data by user. This is the prototype for my GET /-user- endpoint.

## Chapter 2: Compute

* Worth repeating. EC2 instance metadata can be queried with ```curl http://169.254.169.254/latest/meta-data/``` and user data with ```curl http://169.254.169.254/latest/user-data/```.
* To properly hide pem files: ```chmod 400 mykey.pem```

Review: 22/22 (100%)
