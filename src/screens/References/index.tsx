import React from 'react'
import { StyleSheet } from 'react-native'
import { Background } from '../../components/Background'
import { BodyContainer } from '../../components/BodyContainer'
import { BodyText } from '../../components/BodyText'

export function References (): JSX.Element {
  const contentText = [
    'ACOG. American College of Obstetricians and Gynecologists. Gestational hypertension and preeclampsia: ACOG Practice Bulletin, nº. 222. Obstet Gynecol, v. 135, n. 6, p.e237-e260, 2020.',
    'BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas Estratégicas. Manual de Gestação de Alto Risco [recurso eletrônico] / Ministério da Saúde, Secretaria de Atenção Primária à Saúde. Departamento de Ações Programáticas Estratégicas - Brasília: Ministério da Saúde, 2022.',
    'BRASIL. Agência Nacional de Vigilâcia Sanitária - ANVISA. Medicamentos. Disponível em: https://www.gov.br/anvisa/pt-br/assuntos/medicamentos&gt; Acesso em: 06 jan. 2023.',
    'COUTINHO, Tadeu; COUTINHO, Conrado Milani; COUTINHO, Larissa Milani. Sulfato de magnésio: principais utilizações na obstetrícia contemporânea. Rev. méd. Minas Gerais, p. 30211-30211, 2021.',
    'FEBRASGO. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Pré-eclâmpsia nos seus diversos aspectos. Série Orientações e Recomendações FEBRASGO, n. 8. São Paulo: FEBRASGO, 2017.',
    'FEBRASGO. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Pré-eclâmpsia. Femina, v. 4, n.5, 2019.',
    'FEBRASGO. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Atendimento inicial à eclampsia. FEBRASGO, 2018a. Disponível em: https://www.febrasgo.org.br/pt/noticias/item/329-atendimento-inicial-a-eclampsia#:~:text=Na%20presen%C3%A7a%20de%20hipertens%C3%A3o%20arterial,a%20hipofluxo%20materno%20e%20placent%C3%A1rio&gt; Acesso em: 03 jan. 2023.',
    'GUIDA, José Paulo de Siqueira; SURITA, Fernanda Garanhani; PARPINELLI, Mary Angela; COSTA, Maria Laura. Preterm preeclampsia and timing of delivery: a systematic literature review. Revista Brasileira de Ginecologia e Obstetrícia, v. 39, p. 622-631, 2017.',
    'HUAI, Jing; LIN, Li; JUAN, Juan; CHEN, Jiahui; LI, Boya; ZHU, Yuchun; YU, Mengting; YANG, Huixia. Preventive effect of aspirin on preeclampsia in high-risk pregnant women with stage 1 hypertension. The Journal of Clinical Hypertension, v. 23, n. 5, p. 1060-1067, 2021.',
    'LIABSUETRAKUL, Tippawan; YOSHIKO, Yamamoto; KONGKAMOL, Chanon; OTA, Érika; MORI, Rintaro; NOMA, Hisashi. Medications for preventing hypertensive disorders in high-risk pregnant women: A systematic review and network meta-analysis. Systematic Reviews, v. 11, n. 1, p. 1-17, 2022.',
    'MOURA, Nádya Santos; GOMES, Maria Luziene Sousa; RODRIGUES, Ivana Rios; ROLNIK, Daniel Lorber; COSTA, Fabrício Silva; ORIÁ, Mônica Oliveira Batista. Clinical procedures for the prevention of preeclampsia in pregnant women: a systematic review. Revista Brasileira de Ginecologia e Obstetrícia, v. 42, p. 659-668, 2020.',
    'PEDROSO, Marianna Amaral; PALMER, Kirsten Rebecca; HODGES, Ryan James; COSTA, Fabricio da Silva; ROLNIK, Daniel Lorber. Uterine artery Doppler in screening for preeclampsia and fetal growth restriction. Revista brasileira de ginecologia e obstetricia, v. 40, p. 287-293, 2018.',
    'PERAÇOLI, José Carlos; BORGES, Vera Therezinha Medeiros; RAMOS, José Geraldo Lopes; CAVALLI, Ricardo de Carvalho; COSTA, Sérgio Hofmeister de Almeida Martins; DE OLIVEIRA, Leandro Gustavo; DE SOUZA, Francisco Lazaro Pereira; KORKES, Henri Augusto; BRUM, Ione Rodrigues; COSTA, Maria Laura;' +
    'CORRÊA JUNIOR, Mário Dias; SASS, Nelson; DINIZ, Angélica Lemos Debs; PRADO, Caio Antonio de Campos; FILHO, Edson Viera da Cunha. Pré-eclâmpsia/ eclâmpsia.Federação Brasileira das Associações de Ginecologia e Obstetrícia- Febrasgo.' +
    '(Protocolo Febrasgo - Obstetrícia, nº 8/Comissão Nacional Especializada em Hipertensão na Gestação), 2018.',
    'PERAÇOLI, José Carlos; RAMOS, José Geraldo Lopes; SASS, Nelson; MARTINS-COSTA, Sérgio Hofmeister de Almeida; DE OLIVEIRA, Leandro Gustavo; COSTA, Maria Laura; FILHO, Edson Viera da Cunha; KORKES, Henri Augusto; DE SOUSA, Francisco Lázaro Pereira; MESQUITA, Maria Rita de Souza; BORGES, Vera' +
    'Therezinha Medeiros; CORRÊA JÚNIOR, Mario Dias; ARAÚJO, Ana Cristina Pinheiro Fernandes de; ZACONETA, Alberto Carlos Moreno; FREIRE, Carlos Henrique Esteves; POLI-DE-FIGUEIREDO, Carlos Eduardo; ROCHA FILHO, Edilberto Alves Pereira da Rocha; CAVALLI, Ricardo Carvalho. Pré-eclâmpsia/eclâmpsia - Protocolo nº. 01 - Rede Brasileira de Estudos sobre Hipertensão e Gravidez (RBEHG), 2020.',
    'QUINTERO-ORTÍZ, María Andrea; GRILLO-ARDILA, Carlos Fernando; AMAYA-GUIO, Jairo. Expectant Versus Interventionist Care in the Management of Severe Preeclampsia Remote from Term: A Systematic Review. Revista Brasileira de Ginecologia e Obstetricia/RBGO-Gynecology and Obstetrics, v. 43, n. 08, p. 627-637, 2021.',
    'ROBERGE, Stephanie; NICOLAIDES, Kypros; DEMERS, Suzanne; HYETT, Jon; CHAILLET, Nils; BUJOLD, Emmanuel. The role of aspirin dose on the prevention of preeclampsia and fetal growth restriction: systematic review and meta-analysis. American journal of obstetrics and gynecology, v. 216, n. 2, p. 110-120, 2017.',
    'SOUZA, Dilma do Socorro Moraes de; AQUINO, Francisco Cézar; LUZ, Alan Souza da; ALVES, João Victor Moura. Biomarcadores laboratoriais como preditores de pré-eclâmpsia. Rev Bras Hipertens, v. 28, n. 3, p. 238-42, 2021.',
    'WHO. World Health Organization. WHO recommendations for prevention and treatment of pre-eclampsia and eclampsia. Geneva: World Health Organization, 02 Nov. 2011. Disponível em: https://www.who.int/publications/i/item/9789241548335&gt; Acesso em: 03 jan. 2023.'
  ]

  return (
    <Background style={styles.container}>
      <BodyContainer>
        {contentText.map((text, index) => (
          <BodyText key={index} text={text} withDivider={index != contentText.length - 1} />
        ))}
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
