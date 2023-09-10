import { HttpStatus, Injectable } from '@nestjs/common';

import { TestDao } from 'src/Dao/test.dao';

import configError from 'src/Config/error.message.config';
import { CustomerException } from 'src/Global/global.exception.handle.filter';

@Injectable()
export class TestService {
  constructor(private readonly testDao: TestDao) {}

  /**
   * test
   * @param req
   * @returns
   */
  async getFireBase() {
    try {
      const testResult = await this.testDao.getFireBase();

      return testResult;
    } catch (error) {
      throw new CustomerException(configError._100001, HttpStatus.OK);
    }
  }
}
