import { type StackScreenProps } from '@react-navigation/stack'

interface DataType {
  data: Record<string, unknown>
}

export interface AssistanceStackParamList {
  Assistance: undefined
  BasicInfo: undefined
  History: DataType
  FirstMeasurement: DataType
  SecondMeasurement: DataType
  Result: DataType

  WithBasicInfo: undefined
  WithHistory: DataType
  WithMeasurements: DataType
  WithResult: DataType
}

export type AssistanceStackScreenProps<Screen extends keyof AssistanceStackParamList> =
  StackScreenProps<AssistanceStackParamList, Screen>
