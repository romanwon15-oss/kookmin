
import React from 'react';
import Hero from '../components/Hero';
import Strengths from '../components/Strengths';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import ConsultationForm from '../components/ConsultationForm';
import { PortfolioItem } from '../types';

interface HomeProps {
  portfolioItems: PortfolioItem[];
}

const Home: React.FC<HomeProps> = ({ portfolioItems }) => {
  return (
    <main>
      <Hero />
      <section id="strengths">
        <Strengths />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="portfolio">
        <Portfolio items={portfolioItems} />
      </section>
      <section id="consult">
        <ConsultationForm />
      </section>
    </main>
  );
};

export default Home;
