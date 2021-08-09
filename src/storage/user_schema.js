const SCHEMA_NAME = 'USER';

const SCHEMA = {
  name: SCHEMA_NAME,
  primaryKey: 'login_id',
  properties: {
    token: 'string',
    tokenExpiresAt: 'int',
    namespace: 'string',
    verified: 'int',
    name: 'string',
    user_address: 'string',
    type: 'string',
    login_id: 'string',
    password: 'string',
    passphrase: 'string',
    public_key: 'string',
    key_format: 'string',
    key_data_json: 'string',
    private_key: 'string',
    sign_public_key: 'string',
    sign_key_format: 'string',
    sign_key_data_json: 'string',
    sign_private_key: 'string',
    canonical_id: 'string',
    quota_per_day: 'int',
    reputation: 'int',
  },
};

export default {
  SCHEMA,
  SCHEMA_NAME,
};
