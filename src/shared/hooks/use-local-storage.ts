import AsyncStorage from '@react-native-async-storage/async-storage'

type LocalStorageKeyType = 'ONBOARD' | 'FAVORITES' | 'WATCHLATER'

const useLocalStorage = () => {
  const SaveToStorage = async (key: LocalStorageKeyType, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      console.warn(`value cannot saved: ${e}`)
    }
  }

  const GetFromStorage = async <T>(key: LocalStorageKeyType): Promise<T | undefined> => {
    try {
      const val = await AsyncStorage.getItem(key)
      return val as T
    } catch (e) {
      console.warn(`value cannot saved: ${e}`)
      return undefined
    }
  }

  const SaveToStorageJSON = async (key: LocalStorageKeyType, value: unknown) => {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  }

  const GetFromStorageJSON = async <T>(key: LocalStorageKeyType): Promise<T | undefined> => {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : undefined
  }

  const RemoveFromStorage = async (key: LocalStorageKeyType): Promise<boolean> => {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (e) {
      console.warn('Error when removed value from storage:', e)
      return false
    }
  }

  return { SaveToStorage, GetFromStorage, SaveToStorageJSON, GetFromStorageJSON, RemoveFromStorage }
}

export default useLocalStorage
