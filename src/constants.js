export const constants = {
  apiBaseURL: 'https://test-usw2-acmapi.arnexa.com',
  apiVersion: 'v2',
  dbPath: 'binbox.db',
  defaultCryptoFormat: 'tink',
  defaultNamespace: 'axid:0',
  isDemo: true,
  logoImage: require('./assets/images/logo.png'),
  invitation_expires_in_seconds:15552000,
  exports_expires_in_seconds:86400,
  message_expires_in_seconds:7776000,
  addressComponentsSplitterString:"::",
  passphraseLength:16,
  passwordLength:12,
  AcmInvitationStatusTypes:{
    CREATED:0,
    ACCEPTED:1,
    REJECTED:2,
    COMPLETED:3,
  },
  privateLineSymmetricKeydec:4,
  page:0,
  size:200,
  numAddresses:4,
  arnexaPrivateLineIdString:"pl",
  AcmEnvelopeKeyEncryptionAlgorithmTypes:{
    SINGLE:0
  },
  topicsetlength:6,
  topicsetstartfrom:0,
  apkversion:"V1"

};
