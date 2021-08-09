
const SCHEMA_NAME = 'account';

const SCHEMA = {
  name: SCHEMA_NAME,
  primaryKey: 'login_id',
  properties: {
    credHash:'string',
    keyDataJson: 'string',
    key_format: 'string',
    loginId: 'string',
    name: 'string',
    namespace: 'string',
    passphrase: 'string',
    password: 'string',
    phone: 'string',
    private_key: 'string',
    public_key: 'string',
    quotaPerDay: 'int',
    reputation: 'int',
    sign_key_format: 'string',
    sign_private_key: 'string',
    sign_public_key: 'string',
    token: 'string',
    tokenExpiresAt: 'string',
    userAddress: 'string',
    userAddressTypeId: 'string',




    
  },
};

export default {
  SCHEMA,
  SCHEMA_NAME,
};