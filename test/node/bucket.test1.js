
const assert = require('assert');
const utils = require('./utils');
const OSS = require('../../lib/node');
const config = require('../config').oss;
const ms = require('humanize-ms');
const { metaSyncTime } = require('../config');

// only run on travis ci

// if (!process.env.CI) {
//   return;
// }

describe('test/bucket.test.js', () => {
  const { prefix, includesConf } = utils;
  let store;
  const bucket = 'wzc1';
  let bucketRegion;
  const defaultRegion = config.region;
  before(async () => {
    config.bucket = 'wzc1';
    store = new OSS(config);
  });

  describe('putBucketInventory()', () => {
    // it('should', async () => {
    //   try {
    //     const inventory = {
    //       id: 'test',
    //       isEnabled: false,
    //       prefix: 'ttt',
    //       OSSBucketDestination: {
    //         format: 'CSV',
    //         accountId: '1817184078010220',
    //         rolename: 'test',
    //         bukcet: 'wzc1',
    //         prefix: 'test',
    //       },
    //       frequency: 'Daily',
    //       includedObjectVersions: 'All',
    //       optionalFields: {
    //         Field: ['Size', 'LastModifiedDate']
    //       }
    //     };
    //     const result = await store.putBucketInventory(bucket, inventory);
    //     console.log(result);
    //   } catch (err) {
    //     assert(false);
    //   }
    // });
    it('should1', async () => {
      try {
        const result = await store.listBucketInventory(bucket);
        console.log(result);
      } catch (err) {
        assert(false);
      }
    });
  });
});
