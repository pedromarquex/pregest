import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { Button } from '../../../../components/Button'
import { Dialog } from '../../../../components/Dialog/dialog'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'
import { type BasicInfoState } from '../BasicData'
import { type MeasurementsInfoState } from '../FirstMeasurement'
import { type HistoryState } from '../History'

import dayjs from 'dayjs'
import { ButtonGhost } from '../../../../components/ButtonGhost'

export interface ResultState extends BasicInfoState, MeasurementsInfoState, HistoryState {}

enum Risk {
  HIGH_RISK = 'HIGH_RISK',
  MODERATE_RISK = 'MODERATE_RISK',
  LOW_RISK = 'LOW_RISK'
}

enum RiskMapper {
  HIGH_RISK = 'ALTO RISCO',
  MODERATE_RISK = 'RISCO MODERADO',
  LOW_RISK = 'BAIXO RISCO'
}

export function Result ({ navigation, route }: AssistanceStackScreenProps<'Result'>): JSX.Element {
  // receive data from route.params.data and cast it to Result type
  const data = route.params?.data as unknown as ResultState

  // console.log(JSON.stringify(data, null, 2))

  const [open, setOpen] = React.useState(true)

  const [risk, setRisk] = useState<Risk>(Risk.HIGH_RISK)

  const bmi = Number(data.weight) / (Number(data.height) / 100 * Number(data.height) / 100)

  const riskCount = useMemo(() => {
    // HIGH RISK
    /*
      data.hasFamilyPreEclampsia ||
      data.lastPregnancy === '' ||
      (dayjs().diff(dayjs(
        data.birthDate.split('/').reverse().join('-')
      ), 'year') >= 35) ||
      (data.race === 'Preto' || data.race === 'Pardo') ||
      data.abortionHistory
    */
    let count = 0
    if (data.hasFamilyPreEclampsia) count++
    if (data.lastPregnancy === '') count++
    if (
      dayjs().diff(dayjs(
        data.birthDate.split('/').reverse().join('-')
      ), 'year') >= 35
    ) count++
    if (data.race === 'Preto' || data.race === 'Pardo') count++
    if (data.abortionHistory) count++
    // 10 years from last pregnancy year
    if (data.lastPregnancy !== '' && dayjs().diff(dayjs(
      data.lastPregnancy.split('/').reverse().join('-')
    ), 'year') >= 10) count++
    return count
  }, [data])

  useEffect(() => {
    // HIGH RISK
    if (
      data.hasAnteriorPreEclampsia ||
      data.hasAutoimmuneDisease ||
      data.hasDiabetes ||
      data.hasHypertension ||
      bmi > 30
    ) {
      setRisk(Risk.HIGH_RISK)
    } else if ( // MODERATE RISK
      riskCount >= 2
    ) {
      setRisk(Risk.MODERATE_RISK)
    } else { // LOW RISK
      setRisk(Risk.LOW_RISK)
    }
  }, [])

  const contentText = {
    HIGH_RISK: 'Prescrever suplementação de cálcio (carbonato de cálcio)- 1,0 a 2,0g/dia, por via oral, preferencialmente antes do almoço e jantar, para mulheres com dieta pobre em cálcio.',
    MODERATE_RISK: 'Prescrever suplementação de cálcio  (carbonato de cálcio)- 1,0 a 2,0g/dia, por via oral, preferencialmente antes do almoço e jantar, para mulheres com dieta pobre em cálcio.',
    LOW_RISK: 'Prescrever suplementação de cálcio de 1,0 a 2,0g /dia, por via oral, preferencialmente antes do almoço e jantar, para mulheres com dieta pobre em cálcio.'
  }

  const title = 'Intervenções'

  const finalText = {
    HIGH_RISK: 'Prescrever aspirina em baixa dose (50-150 mg/dia), por via oral, a noite, antes de dormir- Iniciar entre 12 e 16 semanas de gestação e suspender após 36ª semana de gestação;',
    MODERATE_RISK: 'Prescrever aspirina em baixa dose (50-150 mg/dia), por via oral, a noite, antes de dormir- Iniciar entre 12 e 16 semanas de gestação e suspender após 36ª semana de gestação;',
    LOW_RISK: 'Não há necessidade em prescrever Aspirina.'
  }

  return (
    <Background style={styles.container} contentContainerStyle={{ paddingBottom: 150 }}>
      <BodyContainer>
        <Title
          text={RiskMapper[risk]}
          style={{ textAlign: 'center' }}
        />
        <Title text={title} style={{ textAlign: 'center' }} />
        <BodyText
          text={contentText[risk]}
          withDivider />
        <BodyText text={finalText[risk]} />
      </BodyContainer>
      <Button
        text='Finalizar'
        onPress={() => { navigation.navigate('Assistance') }}
      />
      <ButtonGhost
        text='Realizar novamente'
        onPress={() => { navigation.navigate('BasicInfo') }}
      />
      <Dialog
        open={open}
        setOpen={setOpen}
      >
        <View>
          <Title
            text={RiskMapper[risk]}
            style={{ textAlign: 'center' }}
          />
          <BodyText
            text={`PACIENTE DE ${RiskMapper[risk] + '\n'}Fique atento às intervenções recomendadas`}
            style={{ textAlign: 'center' }}
          />
        </View>
        <Button
          text="Ver intervenções"
          onPress={() => {
            setOpen(false)
          }}
          style={{ width: 300 }}
        />
      </Dialog>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
