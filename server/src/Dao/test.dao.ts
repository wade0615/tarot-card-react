import { HttpStatus, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

import configError from 'src/Config/error.message.config';
import { CustomerException } from 'src/Global/global.exception.handle.filter';

@Injectable()
export class TestDao {
  // constructor(private readonly configDao: ConfigDao) {}

  /**
   * 測試取得 firebase
   * @returns
   */
  async getFireBase() {
    try {
      const firestore = new admin.firestore.Firestore();

      const fireResult = await firestore
        .collection('tarot-card-db')
        .doc('cards')
        .get();

      const testResp = fireResult.data();

      return testResp;
    } catch (error) {
      throw new CustomerException(configError._100001, HttpStatus.OK);
    }
  }
}
