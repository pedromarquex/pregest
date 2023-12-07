/* eslint-disable @typescript-eslint/no-extraneous-class */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { type ResultState as WithResult } from '../screens/assistance/withDiagnosis/Result'
import { type ResultState as WithoutResult } from '../screens/assistance/withoutDiagnosis/Result'

export class StorageService {
  static async setItem (key: string, value: WithResult | WithoutResult): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
      console.log(e)
    }
  }
}
