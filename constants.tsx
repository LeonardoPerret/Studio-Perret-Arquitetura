
import React from 'react';
import { Project, BlogPost } from './types';

export const COLORS = {
  primary: '#766c66',
  secondary: '#c4a484',
  accent: '#d1d1d1',
  background: '#fcfcfc',
};

export const PROJECTS_CATEGORIES = [
  "Projetos Arquitetônicos",
  "Projetos de Construção",
  "Projetos de Interior",
  "Projetos de Exterior"
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Residência Vale do Sol',
    description: 'Um projeto minimalista focado na integração com a natureza e aproveitamento da luz natural.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    category: 'Projetos Arquitetônicos'
  },
  {
    id: '2',
    title: 'Apartamento Contemporâneo',
    description: 'Design de interiores sofisticado com paleta neutra e materiais nobres para um ambiente urbano.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
    category: 'Projetos de Interior'
  },
  {
    id: '3',
    title: 'Área Gourmet Externa',
    description: 'Planejamento de área de lazer com piscina e paisagismo integrado, ideal para convívio social.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    category: 'Projetos de Exterior'
  },
  {
    id: '4',
    title: 'Condomínio Lagoa Santa',
    description: 'Gestão completa da construção de residências de alto padrão com foco em eficiência.',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1600',
    category: 'Projetos de Construção'
  },
  {
    id: '5',
    title: 'Escritório Executivo',
    description: 'Funcionalidade e elegância para ambientes de trabalho modernos e produtivos.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
    category: 'Projetos de Interior'
  },
  {
    id: '6',
    title: 'Fachada Residencial',
    description: 'Estudo volumétrico e iluminação cênica para valorização do imóvel.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1600',
    category: 'Projetos de Exterior'
  }
];

export const MOCK_BLOG: BlogPost[] = [
  {
    id: '1',
    title: 'Tendências de Cores 2026',
    description: 'Descubra como aplicar as cores do ano no seu projeto de interiores.',
    image: 'https://studioperretarq.com/pt-br/img/blog1.jpg?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Sustentabilidade na Obra',
    description: 'Dicas práticas para reduzir o desperdício durante a construção.',
    image: 'https://studioperretarq.com/pt-br/img/blog2.jpg?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Iluminação Natural',
    description: 'A importância de janelas estratégicas para o bem-estar dos moradores.',
    image: 'https://studioperretarq.com/pt-br/img/blog3.jpg?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Reforma sem Stress',
    description: 'Como planejar seu cronograma para evitar surpresas desagradáveis.',
    image: 'https://studioperretarq.com/pt-br/img/blog4.jpg?auto=format&fit=crop&q=80&w=800'
  }
];
