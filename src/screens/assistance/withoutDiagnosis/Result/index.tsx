import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { Button } from '../../../../components/Button'
import { Dialog } from '../../../../components/Dialog/dialog'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'

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
  const [open, setOpen] = React.useState(true)

  const [risk, setRisk] = useState<Risk>(Risk.HIGH_RISK)

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
