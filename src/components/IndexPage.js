import React, { Fragment } from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';

const StyledHero = styled.div`
  padding: 50px;
  min-height: 100vh;
  .title {
    margin-bottom: 60px;
    h1 {
      font-size: 5.5rem;
      font-family: 'Mansalva', cursive;
      color: ${props => props.theme.primary500};
      .💩 {
        display: inline-block;
        transition: all 0.25s;
        &:hover {
          transform: translateY(-20px);
          &:nth-child(4) {
            transform: translateY(-20px) translateX(-6px) rotate(-23deg);
          }
          &:nth-child(10) {
            transform: translateY(29px) translateX(6px) rotate(33deg);
          }
        }
      }
    }
    h2 {
      font-weight: 400;
      color: ${props => props.theme.grey600};
      margin-top: -10px;
      font-size: 1.6rem;
    }
  }
  main {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    margin-top: 30px;
    min-height: 70vh;
    p {
      margin-bottom: 24px;
      font-size: 1.2rem;
    }
  }
`;

const IndexPage = () => (
  <Fragment>
    <StyledHero>
      <div className="title">
        <h1>
          <span className="💩">R</span>
          <span className="💩">u</span>
          <span className="💩">b</span>
          <span className="💩">é</span>
          <span className="💩">n</span>
          <span className="🚀">&nbsp;</span>
          <span className="💩">V</span>
          <span className="💩">a</span>
          <span className="💩">r</span>
          <span className="💩">a</span>
        </h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <main>
        <div className="text">
          <p>Durante esta última década...</p>
          <p>
            Estudié una carrera. Trabajé varios años como ingeniero industrial.
            Decidí cambiar mi vida y abandonarlo todo.
          </p>
          <p>
            Me marché de viaje sin fechas ni planes. Pasé tres años viviendo en
            varios países, creando mi negocio online, escalando, y estudiando
            SEO y desarrollo web.
          </p>
          <p>
            Volví a casa para vivir en el monte, alejado todo lo posible de la
            vida real. Y para dedicar mi tiempo a leer, estudiar, y entrenar
            como nadador de aguas abiertas.
          </p>
        </div>
        <Nav isIndex />
      </main>
    </StyledHero>
    <Footer isIndex />
  </Fragment>
);

export default IndexPage;
