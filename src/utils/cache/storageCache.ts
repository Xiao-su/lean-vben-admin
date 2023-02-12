

import type { EncryptionParams } from '/@/utils/cipher';
import { cacheCipher } from '/@/settings/encryptionSetting';

export interface CreateStorageParams extends EncryptionParams {
    prefixKey: string;
    storage: Storage;
    hasEncrypt: boolean;
    timeout?: Nullable<number>;
  }

export const createStorage = (params) => {

  const { 
    prefixKey = '',
    storage = sessionStorage,
    key = cacheCipher.key,
    iv = cacheCipher.iv,
    timeout = null,
    hasEncrypt = true,
    }: Partial<CreateStorageParams> = {};

    if (hasEncrypt && [key.length, iv.length].some((item) => item !== 16)) {
      throw new Error('When hasEncrypt is true, the key or iv must be 16 bits!');
    }

}