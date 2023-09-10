const LOCAL = 'LOCAL';
const DEV = 'DEV';
const STAGE = 'STAGE';
const PROD = 'PROD';

// const corsWhiteList = ['http://example.com:3001', 'http://example.com:3000'];

const _configValueSwitch = (_target, _env) => {
  let result;
  switch (_target) {
    case 'CORS':
      // if (_env === LOCAL) result = corsWhireListChecking;
      if (_env === LOCAL) result = '*';
      if (_env === DEV || _env === STAGE || _env === PROD) result = '*';
      break;
  }
  return result;
};

export default _configValueSwitch;
