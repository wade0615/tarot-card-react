import { join } from 'path';
import _configValueSwitch from './config.value';

let NOW_ENV = 'LOCAL';
if (process.env.ENV) {
  NOW_ENV = process.env.ENV;
}

const _valueSwitch = (value) => {
  return _configValueSwitch(value, NOW_ENV);
};

export default {
  PORT: 3000,
  root: join(__dirname, '..'),
  ShadowRoot: join(__dirname, '..'),
  IS_BUILD_CLIENT_STATIC: _valueSwitch('IS_BUILD_CLIENT_STATIC'),
  CORS: {
    origin: _configValueSwitch('CORS', NOW_ENV),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true, // http request need add credentials = 'include'
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
  },
  FIREBASE: {
    FIREBASE_PROJECT_ID: 'test-1-82e30',
    FIREBASE_PRIVATE_KEY:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCRMIk+Y+FfgZwQ\nDeXGxE8uM+JEtTYr1tZETCeZOfLV1PCbtCcJY7HSJbuHEhJO5w6JYTq7NM3Y82kh\n+r9GRiloOmWhb4tzN75ElBt3naMYFvKBHG6mtvPNRzaZsmpW9oITOJ9zrDTFuphu\n0YCg4Zq3xk9peRcK4A9lvD+TkAhUGWqCezdCyYfFmpPFzoYA+Ykd1AsT5wpqlTqn\nLVXCyvkT/rpJYmqZlu/+3sKFK3jVCRLaYq77ORWgvDx8ZtYsPTYGq98qPkfWWfzk\n4HBXlV19YIu97SYg74YMSBa4unmxDmViYVnc6pW3wHHM8YQysQCbbRsnAjGqmwWU\neYBpXWO1AgMBAAECggEAD9GCLnA64okwO+aLuYlzWAUSmqpEneeg/h1u9giEfswd\nr9UjqKf6PHtccFWldX/Ci3CysalJ4SB5/JgBZXJo+gBcyMcqohG5cubRDEn6Njpv\nzuXOX28Q5nVjC0FPSSy/1MDHTJa/RCi1iWNdeInD7dBXIBZvjoGFY+/r3FOluKXH\nNT29E5y+WyyejGDijmxkz8fm29L7YcfpLl34CxKoQBePA/QYhOwTptqE+GL5ao+u\n2y6KzMhiYBN0AS0663A02xmKXqZ+4L53fYLy7NA42vUIjWrRsLT5PdDKoGl67cXN\nXuBL/4pmeOm/0S0sAHRtJErXpZ85xPkLuVyyPgwIWQKBgQDIGAFbx8JUDL5ILW7j\nKaZlL9cADunxa8gO9C5HeMYHWShuwT+4jwgxqZ4vbi4uLjSmeoSgPalIFs7FQRoS\n56ibQ81Grkih+fmmcCVv2FolqtCqG0aDB15qb+vG+vpTsYz4pzjhpOcHowBCBn0K\neSHW72AnCHB0D5e2ErSm6+5yDQKBgQC5wW49D2K8cRxEY4mYc1moPTvqVxteQQna\neRjfjZqqA8Tku0jxVtcul25Pvj79kPb9Ga3/RrF0TUd/uWMBkxOIJsTWF0VgC9nz\nsw3lhGFC10WRChUtYmDqCJT6t5/1Q8CqGKFKQIPD4qNaPKUjwOlkf8gU/S+Isnn3\n4FWVsSjWSQKBgQCMzHeIQdR4mE79MxsoNhKkeTltDRGJlDI+c4xtNosCeLZ+2PUh\nxWQariRlc76DOHhL/UJ+D2WjGIl/PARA8Uovl1JHPjRV5jTJ7Xgqb69fegdC69Z+\nNR03AHKEne6wHev4vJLGFOeM9CImU7KBQCOTvvWGAeY/hQlYUWlVXAd5sQKBgQCQ\nZYYNXyVwuTixDPNMF/cNKjSmMPpsZYCEXXhxZ4FgQjfPWqsUOF5jsIGm6YvLzuHA\n1DKG62xMrTo0VmdZNPyM7R48ErDyPaQ6pejajvKQZAmG+uCFfCE8LFmrIAzvOrDN\nSQIwV0BWiJpVLiltRqvnXNGrRzmpOJxJjRDaoXHOSQKBgDwI6QXcLkHl7cbm8NSJ\nEMp0WpoiaAlRvallxuW+VcbY66EBa4muLhnUqJur1y7gzQJ958iAnfLoamBPHXug\nYqES7BGyIP/CxvXoJsdsMaavkvsve3UQ7E/OwkAmhUuXbOjHXmptHdIJcZvOnlXm\nuG7B+qfWjw5+TDd2fLBsNK6y\n-----END PRIVATE KEY-----\n',
    FIREBASE_CLIENT_EMAIL:
      'firebase-adminsdk-eucw9@test-1-82e30.iam.gserviceaccount.com',
  },
};
