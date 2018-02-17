const Storage = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = 'jhuhackathon';

// Creates a client
const storage = new Storage({
  projectId: projectId,
});

// The name for the new bucket
const bucketName = 'my-new-bucket';

// Creates the new bucket
storage
  .getBuckets()
  .then(results => {
    const buckets = results[0];

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
