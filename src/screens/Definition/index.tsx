import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../../@theme/colors'
import { fonts } from '../../@theme/fonts'
import { Background } from '../../components/Background'
import { BodyContainer } from '../../components/BodyContainer'
import { BodyTextWithChild } from '../../components/BodyTextWithChild'
import { Button } from '../../components/Button'
import { Dialog } from '../../components/Dialog/dialog'
import { Title } from '../../components/Title'

function Definition (): JSX.Element {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')

  function content (): JSX.Element {
    if (title === 'proteinury') {
      return (
        <>
          <Title text='Proteinúria'
            style={{ textAlign: 'left', width: '100%' }}
          />

          <BodyTextWithChild>
            <Text>
              ≥ a 300 mg em urina de 24 horas ou relação proteína/creatinina {'>'} 0,3 mg/dL ou 1+ em fita reativa.
            </Text>
          </BodyTextWithChild>
          <Button
            text='Fechar'
            onPress={() => { closeDialog() }}
            style={{ width: 300 }}
          />
        </>
      )
    } else if (title === 'disfunction') {
      return (
        <>
          <Title text='Disfunção de órgãos-alvo'
            style={{ textAlign: 'left', width: '100%' }}
          />

          <BodyTextWithChild>
            <Text>
              Trombocitopenia, disfunção hepática, insuficiência renal, edema pulmonar, iminência de eclâmpsia ou eclâmpsia.
            </Text>
          </BodyTextWithChild>
          <Button
            text='Fechar'
            onPress={() => { closeDialog() }}
            style={{ width: 300 }}
          />
        </>
      )
    } else if (title === 'insuficiency') {
      return (
          <>
            <Title text='Insuficiência placentária'
              style={{ textAlign: 'left', width: '100%' }}
            />

            <BodyTextWithChild>
              <Text>
                Restrição de crescimento fetal e/ou alterações dopplervelocimétricas fetais
              </Text>
            </BodyTextWithChild>
            <Button
              text='Fechar'
              onPress={() => { closeDialog() }}
              style={{ width: 300 }}
            />
          </>
      )
    }
    return (
      <></>
    )
  }

  function openDialog (title: string): void {
    setTitle(title)
    setOpen(true)
  }

  function closeDialog (): void {
    setOpen(false)
    setTitle('')
  }

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <BodyTextWithChild >
          <Text>
            A Pré-eclâmpsia é definida como uma doença multifatorial e multissistêmica caracterizada pela
            manifestação de hipertensão arterial, após a 20ª semana de gestação, em gestantes previamente
            normotensas, associada à
            <Text style={styles.buttonText} onPress={() => { openDialog('proteinury') }}> proteinúria</Text>
            {' '}significativa ou <Text style={styles.buttonText} onPress={() => { openDialog('disfunction') }}>disfunção de órgãos-alvo.</Text>
            {' '}Além disso a associação da hipertensão arterial após a 20ª semana de gestação com sinais de
            <Text style={styles.buttonText} onPress={() => { openDialog('insuficiency') }}> insuficiência placentária</Text>
            {' '}deve ser considerada para o diagnóstico, mesmo na ausência de proteinúria
          </Text>
        </BodyTextWithChild>
      </BodyContainer>
      <Dialog open={open} setOpen={setOpen} >
        {content()}
      </Dialog>
    </Background>
  )
}

export { Definition }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: colors.mainPurple,
    fontFamily: fonts.bold
  }
})
