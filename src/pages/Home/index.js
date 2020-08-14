import React from 'react'

import { Container, Hero, OQueSomos, OQueSomosContent, OQueSomosText, MandatoColetivo, Deziguais, Contact, ConhecaOsDeziguais, ConhecaOsDeziguaisContent, Dezigual } from './styles'
import logo from './../../assets/imgs/logo.png'
import OQueSomosImg from './../../assets/imgs/home-img.jpg'
import OQueDefendemos from './../../assets/imgs/o-que-defendemos.jpg'
import wppIcon from './../../assets/imgs/whatsapp.svg'
import LucianaSa from './../../assets/imgs/luciana-sa.png'
import AndersonMonteiro from './../../assets/imgs/anderson-monteiro.png'
import EvennyJoseppy from './../../assets/imgs/evenny-joseppy.png'
import Gustavo from './../../assets/imgs/gustavo.png'

const Home = () => {
  return (
    <Container>
      <Hero>
        <img className="logo" src={logo} alt="Iguais" />
      </Hero>

      <OQueSomos>
        <img className="o-que-somos__img" src={OQueSomosImg} alt="O que somos" />

        <OQueSomosContent>
          <div>
            <OQueSomosText>
              <h2>O que somos:</h2>
              <p>Grupo de pessoas que forma uma única candidatura a vereador de Natal. Cada uma destas pessoas representa um segmento da sociedade, uma causa, um ideal, uma luta.</p>
            </OQueSomosText>
            <OQueSomosText>
              <h2>O que defendemos:</h2>
              <p>Os DezIguais, não são iguais nas lutas, não são iguais nas bandeiras, mas são IGUAIS nos sonhos, na voz e na luta por uma cidade menos desigual.</p>
            </OQueSomosText>
          </div>
          <div className="o-que-somos-content__img">
            <img src={OQueDefendemos} alt="O que defendemos" />
          </div>
        </OQueSomosContent>
      </OQueSomos>

      <MandatoColetivo>
        <h1>O que é mandato coletivo:</h1>
        <p>É uma forma de exercício de cargo eletivo legislativo, em que o representante se compromete a dividir o poder com um grupo de cidadãos. No mandato coletivo o legislador consulta as pessoas antes de definir seu posicionamento frente às pautas legislativas. Assim, a vontade das pessoas determina o posicionamento e voto do vereador.</p>
      </MandatoColetivo>

      <Deziguais>
        <Contact>
          <h1>Você conosco:</h1>
          <p>Preencha o cadastro e envie aqui o seu vídeo para ser um dos DEZIGUAIS.</p>

          <a href="#" className="btn-wpp" >Realizar cadastro <span><img src={wppIcon} alt="whatsapp" /></span></a>
        </Contact>
        <ConhecaOsDeziguais>
          <h1>Conheaça os deziguais</h1>
          <ConhecaOsDeziguaisContent>
            <Dezigual>
              <img src={LucianaSa} alt="Luciana Sá" />
              <p>Luciana Sá, natalense, 38 anos, mãe de dois meninos lindos, bacharel em direito. Ao longo da minha vida, pude exercer, em diversas secretarias cargos/funções que me fizeram despertar o interesse por temas relevantes ao nosso cotidiano. A defesa dos direitos das crianças e dos adolescentes, da assistência social, dos animais e da mobilidade urbana norteiam o meu desejo de mudança. Essa experiência e interesse advém do meu trabalho junto as secretarias cujos temas são conectados a minha linha de defesa/atuação: Meio Ambiente e Urbanismo, Administração, Recursos Humanos e Finanças, como também na de Trânsito e Transportes/Mobilidade Urbana do Município de Natal. Sinto-me uma entre tantas pessoas indignadas com os problemas que atingem uma parcela considerável da população, que de forma silenciosa e sem organização, não tem a quem recorrer.</p>
            </Dezigual>
            <Dezigual>
              <img src={AndersonMonteiro} alt="Anderson Monteiro" />
              <p>Eu me chamo Anderson Monteiro filho de Francineide e seu José de Alencar. Neto de Dona Francisca Maria. Moro em Natal há 34 anos, sou o professor apaixonado pela educação, reconhecendo as realidades dos direitos das crianças e adolescentes criei o projeto piloto: Casa do Reforço vovó Francisca(uma proposta pedagógica que estimula o ensino e aprendizagem das crianças das comunidades simples da Zona Norte).Um trabalho sério e de qualidade, com compromisso e voluntariado. Sou o sonhador, que não sonha sozinho, sonhar pra mim é pra quem sabe o que são dificuldades. Sempre participo de discussões entre pessoas do meu grupo de amizade, familiares e colegas de trabalho. Nestes fóruns, busco levar a bandeira daquilo que penso e sobre a forma de agir coletivamente.</p>
            </Dezigual>
            <Dezigual>
              <img src={EvennyJoseppy} alt="Evenny Joseppy" />
              <p>Nascido e criado na Comunidade da Guarita, Bairro do Alecrim, Evenny Joseppy Bezerra de Oliveira, filho de Seu Edmilson (Misinho) e Dona Clara (Ninha) sempre fez parte da vida da comunidade, participando de todos os bons momentos e fazendo muitos amigos no lugar. Particularmente gosta de chamar de Bairro de São José, devido a sua devoção ao Santo Padroeiro da comunidade. Seu ensino fundamental I foi na Escola da Comunidade: Stella Gonçalves. Seu fundamental II na Escola Estadual João Tibúrcio, e o ensino médio no Instituto Padre Miguelinho. Mas foi seguindo o desejo de conhecer melhor o país em que vive que optou pelo Curso de Direito, onde atualmente estuda na Universidade Federal do Rio Grande do Norte e sonha que de alguma forma poderá ajudar muitas pessoas a conhecerem e lutarem pelos seus direitos. Grande mudança na sua vida aconteceu quando entrou na Pastoral do Surdo, onde se tornou, junto com a comunidade surda paroquial, intérprete de LIBRAS. </p>
            </Dezigual>
            <Dezigual>
              <img src={Gustavo} alt="Gustavo" />
              <p>Gustavo Brendo, tenho 26 anos, potiguar, nascido na maternidade Januário Cicco, e criado no bairro Planalto, atualmente estudante de jornalismo e trabalha com comunicação e redes sociais. E represento nos Deziguais, a criatividade, a garra e a esperança da juventude, acredito na força da nossa missão em construir uma cidade melhor, com mais empregos, menor evasão escolar, mais oportunidades e com menos morte, nossa juventude tem morrido bastante.</p>
            </Dezigual>
            <Dezigual>
              <img src={AndersonMonteiro} alt="Gustavo" />
              <p>Eu sou Rodrigo Santos, tenho 28 anos, sou natalense, filho do seu Roberto e Dona Tânia. Já fui atleta profissional, atualmente tenho uma empresa (vai fazer 7 anos), sou graduando do curso de Nutrição na UFRN e membro do Coletivo DezIguais</p>
            </Dezigual>
          </ConhecaOsDeziguaisContent>
        </ConhecaOsDeziguais>
      </Deziguais>
    </Container>
  )
}

export default Home
