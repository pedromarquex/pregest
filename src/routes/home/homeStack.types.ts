import { type StackScreenProps } from '@react-navigation/stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface RootStackParamList {
  Home: undefined
  Definition: undefined
  Classification: undefined
  Exams: undefined

  Laboratory: undefined
  Hemogram: undefined
  Creatinine: undefined
  Desidrogenase: undefined
  Bilirubin: undefined
  Urea: undefined
  TransaminaseGlutamicoOxalacetica: undefined
  TransaminasePiruvica: undefined
  Proteinury: undefined

  Images: undefined
  Ultrasson: undefined
  Dopplervelocimetry: undefined
  BioProfile: undefined
  Cardiotocography: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>
