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

  PharmacologicalTreatment: undefined
  AntihypertensiveTreatment: undefined
  Methyldopa: undefined
  Clonidine: undefined
  NifedipineRetard: undefined
  Amlodipine: undefined
  Hydralazine: undefined
  Metoprolol: undefined
  Carvedilol: undefined

  TreatmentOfHypertensiveCrisis: undefined
  HydralazineAmpoule: undefined
  HydralazineIC: undefined
  Nifedipine: undefined
  SodiumNitroprusside: undefined

  AnticonvulsantTreatment: undefined
  Pritchard: undefined
  Zuspan: undefined

  CorticosteroidTherapy: undefined
  Betamethasone: undefined
  Dexamethasone: undefined

  NonPharmacologicalTreatment: undefined
  Diet: undefined
  Rest: undefined
  LaboratoryMonitoring: undefined

  AssistanceAndTransfer: undefined
  RecommendationsForAssistance: undefined
  AirwayAndHelp: undefined
  BreathingVentilation: undefined
  Circulation: undefined
  DamageDisabilities: undefined
  ExamsE: undefined
  Fetus: undefined
  TerminatePregnancy: undefined

}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>
