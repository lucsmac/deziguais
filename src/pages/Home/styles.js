import styled from 'styled-components'
import bgHero from './../../assets/imgs/hero.jpg'
import bg from './../../assets/imgs/bg.png'
import mandatoColetivo from './../../assets/imgs/mandato-coletivo.jpg'

export const Container = styled.div`
  background-color: var(--background);
`

export const Hero = styled.div`
  width: 100%;
  padding: 90px 138px;
  background: url(${bgHero}) no-repeat center;
  background-size: cover;

  .logo {
    margin-left: 120px;
    display: block;
    height: 200px;
  }
`

export const OQueSomos = styled.section`
  width: 100%;
  padding: 0 138px 69px 138px;

  background: url(${bg}) no-repeat center;
  background-size: cover;

  .o-que-somos__img {
    width: 100%;
    padding: 40px;
  }
`

export const OQueSomosContent = styled.div`
  display: grid;
  max-width: 80%;
  margin: 0 auto;
  grid-template-columns: 1fr 330px;
  justify-content: space-between;

  .o-que-somos-content__img {
    width: 330px;
    height: 400px;
    display: grid;
    justify-content: flex-end;
  }

  .o-que-somos-content__img img {
    display: block;
    text-align: right;
    border-radius: 16px;
  }

  .o-que-somos-content__img::after {
    content: '';
    display: block;
    width: 320px;
    height: 390px;
    border: 5px solid var(--primary);
    border-radius: 16px;

    position: absolute;
    transform: translate3d(-20px, 20px, 0);
  }
`

export const OQueSomosText = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 2.25rem;
    color: var(--primary);
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h2::after {
    content: '';
    margin-top: 10px;
    display: block;
    width: 100px;
    height: 10px;
    background-color: var(--secondary);
  }

  p {
    font-size: 20px;
    color: var(--tertiary);
    max-width: 80%;
  }

`

export const MandatoColetivo = styled.section`
  width: 100%;
  padding: 69px 138px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: url(${mandatoColetivo}) no-repeat center;
  background-size: cover;

  h1 {
    font-size: 2.5rem;
    color: var(--white);
    padding-bottom: 2rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    color: var(--white);
    max-width: 790px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p::after {
    content: '';
    margin-top: 2rem;
    display: block;
    width: 100px;
    height: 10px;
    background-color: var(--secondary);
  }
`

export const Deziguais = styled.div`
  width: 100%;
  padding: 69px 138px;

  background: url(${bg}) no-repeat center;
  background-size: cover;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: var(--primary);
    padding-bottom: 2rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    color: var(--primary);
    max-width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 69px;
  }

  p::after {
    content: '';
    margin-top: 2rem;
    display: block;
    width: 100px;
    height: 5px;
    background-color: var(--primary);
  }

  .btn-wpp {
    padding: 12px;
    width: 20rem;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 15rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    box-shadow: rgba(0, 0, 0, .3) -3px 3px 8px 0px;
  }

  .btn-wpp span img {
    margin-left: 1rem;
    width: 2rem;
  }
`

export const ConhecaOsDeziguais = styled.div`
  padding: 138px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--secondary);
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: bold;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
  }

  h1::after {
    content: '';
    margin-top: .85rem;
    display: block;
    width: 75%;
    height: 4px;
    background-color: var(--primary);
  }
`

export const ConhecaOsDeziguaisContent = styled.div`
  margin: 138px 69px 0 119px;
  border-radius: 50px;
  border: 7px solid var(--primary);
  margin-left: 150px;
  width: 80%;
`

export const Dezigual = styled.div`
  position: relative;
  left: -100px;

  display: flex;
  align-items: center;

  margin: 100px 0;

  img {
    width: 220px;
    display: block;
    margin-right: 4rem;
    border-radius: 8px;
    box-shadow: 15px 15px 0 var(--secondary), 30px 30px 0 var(--primary);
  }

  p {
    color: var(--tertiary);
    
  }
`

