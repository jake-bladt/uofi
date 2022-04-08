# Day 15

## Encryption

* The AWS S3 encryption client - review
* Block-level volume encryption occurs below the OS level?
* To support more efficient querying of encrypted data, you can store a keyed-hash message authentication code (HMAC) of an encrypted field in your schema, and you can supply a key for the hash function. Subsequent queries of protected fields that contain the HMAC of the data being sought would not disclose the plaintext values in the query. This allows the database to perform a query against the encrypted data in your database without disclosing the plaintext values in the query. (Wut?)
* CloudHSM seems too inexpensive to be what I think it is (a dedicated HSM appliance for $8,760/year?)
