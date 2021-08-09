const SCHEMA_NAME = 'Profile';

const SCHEMA = {
  name: SCHEMA_NAME,
  primaryKey: 'login_id',
  properties: {
    canonical_user_id:'string',
    country: 'string',
    gender:'int',
    highest_education_level:'int',
    home_owner:'int',
    household_income:'int',
    household_size:'int',
    invite_code:'string',
    login_id:'string',
    marital_status:'int',
    number_of_autos:'int',
    phone:'string',
    policy:'string',
    profile_visibility:'int',
    retirement_age:'int',
    yob:'int',   
  },
};

export default {
  SCHEMA,
  SCHEMA_NAME,
};