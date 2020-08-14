import { checkBucketName } from '../utils/checkBucketName';
/**
 * listBucketInventory
 * @param {String} bucketName - bucket name
 * @param {String} inventoryId
 * @param {Object} options
 */

export async function listBucketInventory(
  this: any,
  bucketName: string,
  options: any = {}
) {
  const { continuationToken } = options;
  const subres: any = Object.assign({ inventory: '' }, continuationToken && { continuationToken }, options.subres);
  checkBucketName(bucketName);

  const params = this._bucketRequestParams('GET', bucketName, subres, options);
  params.successStatuses = [200];

  params.xmlResponse = true;
  const result = await this.request(params);
  const { data, res, status } = result;
  return {
    isTruncated: data.IsTruncated === 'true',
    nextContinuationToken: data.NextContinuationToken,
    inventoryList: data,
    status,
    res,
  };
}
