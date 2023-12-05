import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Header } from '../../components/Header'
import { Definition } from '../../screens/Definition'
import { Home } from '../../screens/Home'
import { AssistanceAndTransfer } from '../../screens/assistanceAndTransfer/AssistanceAndTransfer'
import { RecommendationsForTransfer } from '../../screens/assistanceAndTransfer/RecommendationsForTransfer'
import { AirwayAndHelp } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/AirwayAndHelp'
import { BreathingVentilation } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/BreathingVentilation'
import { Circulation } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/Circulation'
import { DamageDisabilities } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/DamageDisabilities'
import { ExamsE } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/ExamsE'
import { Fetus } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/Fetus'
import { RecommendationsForAssistancees } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/RecommendationsForAssistance'
import { TerminatePregnancy } from '../../screens/assistanceAndTransfer/recommendationsForAssistance/TerminatePregnancy'
import { Classification } from '../../screens/classification/Classification'
import { Exams } from '../../screens/exams/Exams'
import { BioProfile } from '../../screens/exams/images/BioProfile'
import { Cardiotocography } from '../../screens/exams/images/Cardiotocography'
import { Dopplervelocimetry } from '../../screens/exams/images/Dopplervelocimetry'
import { Images } from '../../screens/exams/images/Images'
import { Ultrasson } from '../../screens/exams/images/Ultrasson'
import { Bilirubin } from '../../screens/exams/laboratory/Bilirubin'
import { Creatinine } from '../../screens/exams/laboratory/Creatinine'
import { Desidrogenase } from '../../screens/exams/laboratory/Desidrogenase'
import { Hemogram } from '../../screens/exams/laboratory/Hemogram'
import { Laboratory } from '../../screens/exams/laboratory/Laboratory'
import { Proteinury } from '../../screens/exams/laboratory/Proteinury'
import { TransaminaseGlutamicoOxalacetica } from '../../screens/exams/laboratory/TransaminaseGlutamicoOxalacetica'
import { TransaminasePiruvica } from '../../screens/exams/laboratory/TransaminasePiruvica'
import { Urea } from '../../screens/exams/laboratory/Urea'
import { Diet } from '../../screens/nonPharmacologicalTreatment/Diet'
import { LaboratoryMonitoring } from '../../screens/nonPharmacologicalTreatment/LaboratoryMonitoring'
import { NonPharmacologicalTreatment } from '../../screens/nonPharmacologicalTreatment/NonPharmacologicalTreatment'
import { Rest } from '../../screens/nonPharmacologicalTreatment/Rest'
import { PharmacologicalTreatment } from '../../screens/pharmacologicalTreatment​/PharmacologicalTreatment'
import { AnticonvulsantTreatment } from '../../screens/pharmacologicalTreatment​/anticonvulsantTreatment/AnticonvulsantTreatment'
import { Pritchard } from '../../screens/pharmacologicalTreatment​/anticonvulsantTreatment/Pritchard'
import { Zuspan } from '../../screens/pharmacologicalTreatment​/anticonvulsantTreatment/Zuspan'
import { Amlodipine } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/Amlodipine'
import { AntihypertensiveTreatment } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/AntihypertensiveTreatment'
import { Carvedilol } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/Carvedilol'
import { Clonidine } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/Clonidine'
import { Hydralazine } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/Hydralazine'
import { Methyldopa } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/Methyldopa'
import { Metoprolol } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/Metoprolol'
import { NifedipineRetard } from '../../screens/pharmacologicalTreatment​/antihypertensiveTreatment/NifedipineRetard'
import { Betamethasone } from '../../screens/pharmacologicalTreatment​/corticosteroidTherapy/Betamethasone'
import { CorticosteroidTherapy } from '../../screens/pharmacologicalTreatment​/corticosteroidTherapy/CorticosteroidTherapy'
import { Dexamethasone } from '../../screens/pharmacologicalTreatment​/corticosteroidTherapy/Dexamethasone'
import { HydralazineAmpoule } from '../../screens/pharmacologicalTreatment​/treatmentOfHypertensiveCrisis/HydralazineAmpoule'
import { HydralazineIC } from '../../screens/pharmacologicalTreatment​/treatmentOfHypertensiveCrisis/HydralazineIC'
import { Nifedipine } from '../../screens/pharmacologicalTreatment​/treatmentOfHypertensiveCrisis/Nifedipine'
import { SodiumNitroprusside } from '../../screens/pharmacologicalTreatment​/treatmentOfHypertensiveCrisis/SodiumNitroprusside'
import { TreatmentOfHypertensiveCrisis } from '../../screens/pharmacologicalTreatment​/treatmentOfHypertensiveCrisis/TreatmentOfHypertensiveCrisis'
import { type RootStackParamList } from './homeStack.types'

const Stack = createStackNavigator<RootStackParamList>()

export function HomeStack (): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Definition"
        component={Definition}
        options={{
          header: () => <Header title="Conceito e Diagnóstico" />
        }}
      />
      <Stack.Screen
        name="Classification"
        component={Classification}
        options={{
          header: () => <Header title="Classificação da Pressão Arterial​" />
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="Exams"
          component={Exams}
          options={{
            header: () => <Header title="Exames" />
          }}
        />
        <Stack.Group
          screenOptions={{
            header: () => <Header title="Exames Laboratoriais" />
          }}
        >
          <Stack.Screen
            name="Laboratory"
            component={Laboratory}
          />
          <Stack.Screen
            name="Hemogram"
            component={Hemogram}
          />
          <Stack.Screen
            name="Creatinine"
            component={Creatinine}
          />
          <Stack.Screen
            name="Desidrogenase"
            component={Desidrogenase}
          />
          <Stack.Screen
            name="Bilirubin"
            component={Bilirubin}
          />
          <Stack.Screen
            name="Urea"
            component={Urea}
          />
          <Stack.Screen
            name="TransaminaseGlutamicoOxalacetica"
            component={TransaminaseGlutamicoOxalacetica}
          />
          <Stack.Screen
            name="TransaminasePiruvica"
            component={TransaminasePiruvica}
          />
          <Stack.Screen
            name="Proteinury"
            component={Proteinury}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            header: () => <Header title="Exames de Imagem" />
          }}
        >
          <Stack.Screen
            name="Images"
            component={Images}
          />
          <Stack.Screen
            name="Ultrasson"
            component={Ultrasson}
          />
          <Stack.Screen
            name="Dopplervelocimetry"
            component={Dopplervelocimetry}
          />
          <Stack.Screen
            name="BioProfile"
            component={BioProfile}
          />
          <Stack.Screen
            name="Cardiotocography"
            component={Cardiotocography}
          />
        </Stack.Group>
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          header: () => <Header title="Tratamento Farmacológico" />
        }}
      >
        <Stack.Screen
          name="PharmacologicalTreatment"
          component={PharmacologicalTreatment}
        />
        <Stack.Group
        screenOptions={{
          header: () => <Header title="Tratamento anti-hipertensivo" />
        }}
        >
        <Stack.Screen
          name="AntihypertensiveTreatment"
          component={AntihypertensiveTreatment}
        />
        <Stack.Screen
          name="Methyldopa"
          component={Methyldopa}
        />
        <Stack.Screen
          name="Clonidine"
          component={Clonidine}
        />
        <Stack.Screen
          name="NifedipineRetard"
          component={NifedipineRetard}
        />
        <Stack.Screen
          name="Amlodipine"
          component={Amlodipine}
        />
        <Stack.Screen
          name="Hydralazine"
          component={Hydralazine}
        />
        <Stack.Screen
          name="Metoprolol"
          component={Metoprolol}
        />
        <Stack.Screen
          name="Carvedilol"
          component={Carvedilol}
        />
        </Stack.Group>
        <Stack.Group
        screenOptions={{
          header: () => <Header title="Tratamento da crise hipertensiva" />
        }}
        >
        <Stack.Screen
          name="TreatmentOfHypertensiveCrisis"
          component={TreatmentOfHypertensiveCrisis}
        />
        <Stack.Screen
          name="HydralazineAmpoule"
          component={HydralazineAmpoule}
        />
        <Stack.Screen
          name="HydralazineIC"
          component={HydralazineIC}
        />
        <Stack.Screen
          name="Nifedipine"
          component={Nifedipine}
        />
        <Stack.Screen
          name="SodiumNitroprusside"
          component={SodiumNitroprusside}
        />
        </Stack.Group>
        <Stack.Group
        screenOptions={{
          header: () => <Header title="Tratamento anticonvulsivo" />
        }}
        >
        <Stack.Screen
          name="AnticonvulsantTreatment"
          component={AnticonvulsantTreatment}
        />
        <Stack.Screen
          name="Pritchard"
          component={Pritchard}
        />
        <Stack.Screen
          name="Zuspan"
          component={Zuspan}
        />
        </Stack.Group>
        <Stack.Group
        screenOptions={{
          header: () => <Header title="Corticoterapia" />
        }}
        >
        <Stack.Screen
          name="CorticosteroidTherapy"
          component={CorticosteroidTherapy}
        />
        <Stack.Screen
          name="Betamethasone"
          component={Betamethasone}
        />
        <Stack.Screen
          name="Dexamethasone"
          component={Dexamethasone}
        />
        </Stack.Group>
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          header: () => <Header title="Tratamento não Farmacológico" />
        }}
      >
        <Stack.Screen
          name="NonPharmacologicalTreatment"
          component={NonPharmacologicalTreatment}
        />
        <Stack.Screen
          name="Diet"
          component={Diet}
        />
        <Stack.Screen
          name="Rest"
          component={Rest}
        />
        <Stack.Screen
          name="LaboratoryMonitoring"
          component={LaboratoryMonitoring}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          header: () => <Header title="Assistência e Transferência para Unidade de Referência Hospitalar​" />
        }}
      >
        <Stack.Screen
          name="AssistanceAndTransfer"
          component={AssistanceAndTransfer}
        />
        <Stack.Group
        screenOptions={{
          header: () => <Header title="Recomendações para assistência da paciente" />
        }}
        >
          <Stack.Screen
            name="RecommendationsForAssistance"
            component={RecommendationsForAssistancees}
          />
          <Stack.Screen
            name="AirwayAndHelp"
            component={AirwayAndHelp}
          />
          <Stack.Screen
            name="BreathingVentilation"
            component={BreathingVentilation}
          />
          <Stack.Screen
            name="Circulation"
            component={Circulation}
          />
          <Stack.Screen
            name="DamageDisabilities"
            component={DamageDisabilities}
          />
          <Stack.Screen
            name="ExamsE"
            component={ExamsE}
          />
          <Stack.Screen
            name="Fetus"
            component={Fetus}
          />
          <Stack.Screen
            name="TerminatePregnancy"
            component={TerminatePregnancy}
          />
        </Stack.Group>
        <Stack.Group
        screenOptions={{
          header: () => <Header title="Recomendações para transferência da paciente" />
        }}
        >
          <Stack.Screen
            name="RecommendationsForTransfer"
            component={RecommendationsForTransfer}
          />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  )
}
