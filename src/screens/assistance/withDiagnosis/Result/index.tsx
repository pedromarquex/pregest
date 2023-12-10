import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { Button } from '../../../../components/Button'
import { Dialog } from '../../../../components/Dialog/dialog'
import { Title } from '../../../../components/Title'
import { type AssistanceStackScreenProps } from '../../../../routes/assistance/assistanceStack.types'
import { type BasicInfoState } from '../BasicData'
import { type HistoryState } from '../History'
import { type MeasurementsInfoState } from '../Measurements'

export interface ResultState extends BasicInfoState, MeasurementsInfoState, HistoryState {}

enum Risk {
  WITH_RISK = 'WITH_RISK',
  WITHOUT_RISK = 'WITHOUT_RISK'
}

enum RiskMapper {
  WITH_RISK = 'COM SINAIS DE GRAVIDADE',
  WITHOUT_RISK = 'SEM SINAIS DE GRAVIDADE'
}

export function WithResult ({ navigation, route }: AssistanceStackScreenProps<'Result'>): JSX.Element {
  const data = route.params.data as unknown as ResultState
  // log data pretified
  // console.log(JSON.stringify(data, null, 2))

  const [open, setOpen] = React.useState(true)
  const [risk, setRisk] = React.useState<Risk>(Risk.WITH_RISK)

  /*
    Com diagnóstico

    Sem sinais
    - Pressão sistólica: 100 a 140
    - Diastólica até 85
    - Paciente clinicamente estável e feto sem alterações

    Com sinais
    - Pressão sistólica acima de 160
    - Diastólica acima de 110 confirmada após 15 min (suficiente)
    - Cefaléia
    - Alteração visual
    - Nauseas e vomitos
    - Dor abdominal

  */

  useEffect(() => {
    // WITH RISK
    if (
      Number(data.firstRightArmSystolic) >= 160 ||
      Number(data.firstRightArmDiastolic) >= 110 ||
      Number(data.firstLeftArmSystolic) >= 160 ||
      Number(data.firstLeftArmDiastolic) >= 110 ||
      Number(data.secondRightArmSystolic) >= 160 ||
      Number(data.secondRightArmDiastolic) >= 110 ||
      Number(data.secondLeftArmSystolic) >= 160 ||
      Number(data.secondLeftArmDiastolic) >= 110 ||
      data.hasHeadache ||
      data.hasVisualDisturbance ||
      data.hasNausea ||
      data.hasAbdominalPain
    ) {
      setRisk(Risk.WITH_RISK)
    } else {
      setRisk(Risk.WITHOUT_RISK)
    }
  }, [])

  const modalText = {
    WITHOUT_RISK: 'Manter consulta pré-natal semanalmente.',
    WITH_RISK: 'Encaminhar imediatamente para  à unidade de referência hospitalar.'
  }

  const title = 'Descrição das intervenções'

  const contentText = {
    WITHOUT_RISK: {
      HEADLINE: 'Escuta ativa da mulher e seus acompanhantes, esclarecendo dúvidas e informando o será realizado durante a consulta  e as condutas a serem adotas;',
      MOTHER: [
        'Controle rígido da pressão arterial (4/4h) e dos sintomas.',
        'Prescrever e administrar anti-hipertensivos se a pressão arterial atingir níveis ≥ 150 ou 100 mmHg, níveis ≥ 140 ou 90 mmHg persistentes ou ainda se a paciente se mostrar sintomática'
      ],
      FETUS: [
        'Verificar altura do fundo uterina',
        'Avaliar movimentação fetal',
        'Verificar batimentos cardiofetais',
        'Solicitar exames para vigilância do bem-estar e do crescimento fetal.'
      ]
    },
    WITH_RISK: {
      HEADLINE: 'Esclarecimento do grau de risco para paciente e responsável;\nSolicitar transporte;',
      MOTHER: [
        'Escuta ativa da mulher e seus acompanhantes, esclarecendo dúvidas e informando o será realizado durante a consulta  e as condutas a serem adotas;',
        'Anamnese e exame clínico-obstétrico;',
        'Verificar Pressão arterial e orientar a paciente a aferir a pressão arterial diariamente;',
        'Manter controle de peso;',
        'Monitorar semanalmente exames laboratoriais;',
        'Orientar e acompanhar quanto à dieta normossódica e hiperproteica;',
        'Orientar períodos de repouso diários em decúbito lateral;',
        'Orientar sobre a importância de entrar em contato (via telefone, telemedicina) ou de procurar hospital em caso de alteração em  quadro clínico;',
        'Orientar e monitorar sinais e sintomas de iminência de eclâmpsia;',
        'Não prescrever diuréticos;',
        'Registro em prontuário e cartão da gestante, inclusive registro de intercorrências/urgências que requeiram avaliação hospitalar em situações que não necessitem de internação;',
        'Encaminhar a gestante para unidade de referência hospitalar em casos de pré-eclâmpsia com sinais gravidade.'
      ],
      FETUS: [
        'Verificar altura do fundo uterina',
        'Avaliar movimentação fetal',
        'Verificar batimentos cardiofetais',
        'Solicitar exames para vigilância do bem-estar e do crescimento fetal.'
      ]
    }
  }

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title
          text={`PRÉ-ECLÂMPSIA ${RiskMapper[risk]}`}
          style={{ textAlign: 'center' }}
        />
        <Title text={title} />
        <BodyText text={contentText[risk].HEADLINE} withDivider />
        <Title
          text={risk === Risk.WITH_RISK ? 'Avaliação do bem-estar materno' : 'Estabilização clínica materna até chegada de transporte'}
        />
        <BodyText
          text={
            '- ' + contentText[risk].MOTHER.join('\n- ')
          }
        />
        <Title text="Avaliação do bem-estar fetal" />
        <BodyText
          text={
            '- ' + contentText[risk].FETUS.join('\n- ')
          }
        />
      </BodyContainer>

      <Dialog
        open={open}
        setOpen={setOpen}
      >
        <View>
          <Title
            text={`PRÉ-ECLÂMPSIA ${RiskMapper[risk]}`}
            style={{ textAlign: 'center' }}
          />
          <BodyText
            text={modalText[risk]}
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
