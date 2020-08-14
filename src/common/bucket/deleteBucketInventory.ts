import { checkBucketName } from '../utils/checkBucketName';
/**
 * deleteBucketInventory
 * @param {String} bucketName - bucket name
 * @param {String} inventoryId
 * @param {Object} options
 */

export async function deleteBucketInventory(this: any, bucketName: string, inventoryId: string, options: any = {}) {
  const subres: any = Object.assign({ encryption: '', inventoryId }, options.subres);
  checkBucketName(bucketName);

  const params = this._bucketRequestParams('DELETE', bucketName, subres, options);
  params.successStatuses = [200];

  const result = await this.request(params);
  return {
    status: result.status,
    res: result.res,
  };
}
