import { type StackScreenProps } from '@react-navigation/stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface AssistanceStackParamList {
  Assistance: undefined
  BasicInfo: undefined
}

export type AssistanceStackScreenProps<Screen extends keyof AssistanceStackParamList> =
  StackScreenProps<AssistanceStackParamList, Screen>
