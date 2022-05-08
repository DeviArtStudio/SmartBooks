import { STORAGE_PROPS } from '../constants/storage'
import { Dictionary } from '../types'

class LocalDataStorage {
  private data: Dictionary
  private static instance: LocalDataStorage

  constructor() {
    this.data = this.loadUserData()
  }

  public static getInstance(): LocalDataStorage {
    if (!LocalDataStorage.instance)
      LocalDataStorage.instance = new LocalDataStorage()

    return LocalDataStorage.instance
  }

  private loadUserData() {
    return {
      [STORAGE_PROPS.theme]: 'dark',
    }
  }

  public getValue<T>(propName: string): T {
    return this.data[propName] as T
  }
}

export default LocalDataStorage
