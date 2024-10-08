import { Platform } from 'react-native';
import { encodeBinary } from './peripherals';

export const CACHE_STORAGE_PATH = encodeBinary('MOSQUITO_TRANSPORT_FREEZER'),
    DEFAULT_CACHE_PASSWORD = encodeBinary('MOSQUITO_TRANSPORT_CACHE_PASSWORD'),
    LOCAL_STORAGE_PATH = () => {
        const fs = require('react-native-fs');
        return `${Platform.OS === 'android' ? fs.ExternalCachesDirectoryPath : fs.CachesDirectoryPath}/${encodeBinary('MOSQUITO_TRANSPORT_STORAGE')}`;
    },
    DEFAULT_DB_NAME = 'DEFAULT_DB',
    DEFAULT_DB_URL = 'mongodb://127.0.0.1:27017',
    DEFAULT_ENCRYPT_IV = '****';

export const CACHE_PROTOCOL = {
    ASYNC_STORAGE: 'async-storage',
    REACT_NATIVE_FS: 'reat-native-fs',
    SQLITE: 'sqlite' // TODO:
};

export const RETRIEVAL = {
    STICKY: 'sticky',
    STICKY_NO_AWAIT: 'sticky-no-await',
    STICKY_RELOAD: 'sticky-reload',
    DEFAULT: 'default',
    CACHE_NO_AWAIT: 'cache-no-await',
    NO_CACHE_NO_AWAIT: 'no-cache-no-await'
};

export const DELIVERY = {
    DEFAULT: 'default',
    NO_CACHE: 'no-cache',
    NO_AWAIT: 'no-await',
    NO_AWAIT_NO_CACHE: 'no-await-no-cache',
    AWAIT_NO_CACHE: 'await-no-cache',
    CACHE_NO_AWAIT: 'cache-no-await'
};

export const WRITE_OPS = {
    $SET: '$set',
    $PUSH: '$push',
    $PULL: '$pull',
    $UNSET: '$unset',
    $INC: '$inc',
    $MAX: '$max',
    $MIN: '$min',
    $MUL: '$mul',
    $RENAME: '$rename',
    $SET_ON_INSERT: '$setOnInsert'
};
export const WRITE_OPS_LIST = Object.values(WRITE_OPS);

export const READ_OPS = {
    $IN: '$in',
    $ALL: '$all',
    $NIN: '$nin',
    $GT: '$gt',
    $GTE: '$gte',
    $LT: '$lt',
    $LTE: '$lte',
    $TEXT: '$text',
    // $EQ: '$eq',
    // $REGEX: '$regex',
    // $EXISTS: '$exists',
    $NEAR: '$near',
    $TYPE: '$type',
    $SIZE: '$size',
    // $NE: '$ne'
};
export const READ_OPS_LIST = Object.values(READ_OPS);

export const Regexs = {
    LINK: () => /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
};

export const AUTH_PROVIDER_ID = {
    GOOGLE: 'google.com',
    FACEBOOK: 'facebook.com',
    PASSWORD: 'password',
    TWITTER: 'x.com',
    GITHUB: 'github.com',
    APPLE: 'apple.com'
};