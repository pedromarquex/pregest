import React from 'react'
import { Image, StyleSheet } from 'react-native'

import { Background } from '../../../../components/Background'
import { BodyContainer } from '../../../../components/BodyContainer'
import { BodyText } from '../../../../components/BodyText'
import { ButtonGhost } from '../../../../components/ButtonGhost'
import { Dialog } from '../../../../components/Dialog/dialog'
import { ReferenceText } from '../../../../components/ReferenceText'
import { Title } from '../../../../components/Title'

import InfusionTable from '../../../../assets/img/infusion-table.png'
import { Button } from '../../../../components/Button'

export function SodiumNitroprusside (): JSX.Element {
  const contentText = [
    'Vasodilatador Arterial e Venoso.',
    'Ampola 50 mg/2 mL.',
    'Bradiarritmias, taquiarritmias, cefaleia, tontura, sonolência, rubor facial e hipotensão.',
    'Diluir uma ampola (2mL) em 248mL de soro glicosado 5%, resultando na concentração de 200mcg/mL.',
    'Iniciar com a dose mínima e aumentar 1mL/h a cada 10 minutos;\nA dose máxima, quando necessária, não deve ser utilizada por mais do que 10 minutos, devendo-se reduzi-la, então, pela metade;\nA droga deixa de agir 3 minutos após a interrupção da infusão.'
  ]

  const titles = [
    'Classe do Agente:',
    'Apresentação:',
    'Principais efeitos adversos:',
    'Nota:',
    'Esquema de infusão recomendado:'
  ]

  const reference = 'PERAÇOLI et al., 2019; BRASIL, 2022).'

  const [open, setOpen] = React.useState(false)

  return (
    <Background style={styles.container}>
      <BodyContainer>
        <Title text="Nitroprussiato de Sódio" />
        <Title text={titles[0]} />
        <BodyText text={contentText[0]} withDivider />
        <Title text={titles[1]} />
        <BodyText text={contentText[1]} withDivider />
        <Title text={titles[2]} />
        <BodyText text={contentText[2]} withDivider />
        <Title text={titles[3]} />
        <BodyText text={contentText[3]} withDivider />
        <Title text={titles[4]} />
        <BodyText text={contentText[4]} />
        <ButtonGhost
          text="Ver Esquema de Infusão"
          onPress={() => { setOpen(true) }}
          style={{ justifyContent: 'flex-start' }}
        />
        <Dialog
          open={open}
          setOpen={setOpen}
          >
            <Image
              source={InfusionTable}
              width={300}
              height={300}
              style={{
                height: 300,
                width: 300
              }}
            />
            <Button
              text="Fechar"
              onPress={() => { setOpen(false) }}
              style={{
                width: 300,
                marginTop: 20
              }}
            />
          </Dialog>
        <ReferenceText text={reference} />
      </BodyContainer>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
