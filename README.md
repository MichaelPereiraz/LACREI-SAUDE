
# Lacrei Saúde - Plataforma de Saúde Inclusiva

Uma plataforma de saúde digital inclusiva criada especialmente para a comunidade LGBTQIAPN+, conectando pessoas a profissionais capacitados e cuidado respeitoso.

## 🏥 Sobre o Projeto

A Lacrei Saúde é mais que uma plataforma - é um movimento de transformação para garantir que cada pessoa tenha acesso a cuidados de saúde com segurança, respeito e dignidade. Desenvolvemos uma solução tecnológica que conecta a comunidade LGBTQIAPN+ a profissionais de saúde capacitados e inclusivos.

### 🎯 Características Principais

- **Acessibilidade Completa**: Seguindo as diretrizes WCAG 2.1 AA
- **Design Responsivo**: Mobile-first com adaptação perfeita a diferentes telas
- **Performance Otimizada**: Lazy loading, bundle otimizado e Lighthouse Score 90+
- **Inclusão Real**: Interface e conteúdo pensados para diversidade
- **Segurança Garantida**: Ambiente seguro e confiável para toda a comunidade

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Instalação Local

```bash
# 1. Clone o repositório
git clone <YOUR_GIT_URL>

# 2. Navegue até o diretório
cd lacrei-saude

# 3. Instale as dependências
npm install

# 4. Execute o projeto em desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:8080
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build e Deploy
npm run build        # Cria build de produção
npm run preview      # Visualiza build de produção localmente

# Testes
npm run test         # Executa testes unitários
npm run test:watch   # Executa testes em modo watch
npm run test:coverage # Executa testes com coverage

# Linting
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 🧪 Testes Unitários

Implementamos uma suíte abrangente de testes cobrindo componentes críticos:

### Componentes Testados

1. **Header Component** (`src/__tests__/Header.test.tsx`)
   - Renderização de logo e navegação
   - Funcionalidade do menu mobile
   - Atributos de acessibilidade
   - Estados ativos de navegação

2. **Footer Component** (`src/__tests__/Footer.test.tsx`)
   - Informações de contato e brand
   - Links de navegação e legais
   - Formulário de newsletter
   - Estrutura semântica

3. **Button Component** (`src/__tests__/Button.test.tsx`)
   - Variantes customizadas (hero, medical, cta)
   - Tamanhos diferentes
   - Eventos de clique
   - Estados de acessibilidade

### Executar Testes

```bash
# Executar todos os testes
npm run test

# Executar testes específicos
npm run test Header.test.tsx

# Executar com coverage
npm run test:coverage

# Modo watch para desenvolvimento
npm run test:watch
```

## 🏗️ Build e Deploy

### Build de Produção

```bash
# Criar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

### Deploy

#### Vercel (Recomendado)

1. **Automático via Git**:
   - Conecte o repositório ao Vercel
   - Deploy automático em cada push para main

2. **CLI do Vercel**:
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Fazer deploy
   vercel --prod
   ```

#### Outras Plataformas

- **Netlify**: Conecte o repositório e configure build command: `npm run build`
- **GitHub Pages**: Use GitHub Actions com build para pasta `dist`
- **AWS S3**: Configure bucket estático e faça upload da pasta `dist`

## 🔄 Estratégia de Rollback

### Vercel (Plataforma Principal)

1. **Rollback Automático**:
   - Acesse dashboard do Vercel
   - Vá em "Deployments"
   - Clique em "Promote to Production" na versão anterior

2. **Rollback via CLI**:
   ```bash
   # Listar deployments
   vercel ls
   
   # Promover deployment anterior
   vercel promote <deployment-url>
   ```

3. **Preview Deployments**:
   - Cada branch gera URL de preview
   - Teste antes de fazer merge para main
   - URLs format: `https://lacrei-saude-git-<branch>-<team>.vercel.app`

### Git Rollback

```bash
# Rollback para commit específico
git revert <commit-hash>
git push origin main

# Rollback para tag/versão
git checkout <tag-name>
git checkout -b rollback-to-<version>
git push origin rollback-to-<version>
```

### Rollback de Emergência

1. Mantenha sempre a versão anterior em produção disponível
2. Use feature flags para desabilitar funcionalidades rapidamente
3. Configure monitoramento para detectar problemas automaticamente

## 🎨 Decisões de Design e Técnicas

### Identidade Visual

- **Cores Primárias**: Azul healthcare (#1e73be) transmitindo confiança
- **Cores Secundárias**: Verde acolhedor (#2c8a63) representando cuidado
- **Cores de Apoio**: Roxo inclusivo (#8b5a96) simbolizando diversidade
- **Gradientes**: Combinações suaves criando profundidade visual
- **Tipografia**: Inter (corpo) e Poppins (títulos) para legibilidade

### Princípios de Acessibilidade

- **Contraste**: Mínimo 4.5:1 em todos os elementos de texto
- **Navegação**: Skip links, ARIA labels, navegação por teclado
- **Semântica**: HTML5 semântico com roles apropriados
- **Responsividade**: Suporte a zoom até 200% sem perda de funcionalidade
- **Leitores de Tela**: Testado com NVDA e VoiceOver

### Arquitetura Técnica

#### Stack Tecnológica

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite (performance superior ao Create React App)
- **Styling**: Tailwind CSS + shadcn/ui (design system consistency)
- **Routing**: React Router 6 (navegação client-side)
- **State**: React Query (gerenciamento de estado server)
- **Testing**: Vitest + Testing Library (performance e DX)

#### Estrutura de Componentes

```
src/
├── components/
│   ├── ui/           # Componentes base (shadcn)
│   ├── Header.tsx    # Navegação principal
│   └── Footer.tsx    # Rodapé com links e contatos
├── pages/
│   ├── Index.tsx     # Página inicial
│   ├── About.tsx     # Sobre nós
│   └── NotFound.tsx  # 404 customizado
├── assets/           # Imagens e recursos
├── hooks/            # Custom hooks
└── __tests__/        # Testes unitários
```

#### Sistema de Design

- **Design Tokens**: CSS Custom Properties para consistência
- **Componentes Reutilizáveis**: Variantes para diferentes contextos
- **Tema Unificado**: Cores, espaçamentos e tipografia centralizados
- **Mobile-First**: Abordagem responsiva from pequenas telas

### Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Componentes divididos por rota
- **Bundle Analysis**: Webpack Bundle Analyzer para otimização
- **Asset Optimization**: Compressão de imagens e minificação
- **Caching**: Service worker para cache de recursos estáticos

### SEO

- **Meta Tags**: Descrições otimizadas para cada página
- **Structured Data**: JSON-LD para melhor indexação
- **Semantic HTML**: Estrutura clara para crawlers
- **Performance**: Core Web Vitals otimizados
- **Canonical URLs**: Prevenção de conteúdo duplicado

## 🔧 Justificativas Técnicas

### Por que React + Vite?

- **Performance**: Vite oferece HMR ultra-rápido
- **Developer Experience**: TypeScript out-of-the-box
- **Ecossistema**: Ampla compatibilidade com libs React
- **Bundle Size**: Tree-shaking avançado para bundles menores

### Por que Tailwind CSS?

- **Consistência**: Design system através de utility classes
- **Performance**: PurgeCSS remove CSS não utilizado
- **Manutenibilidade**: Mudanças visuais sem context switching
- **Acessibilidade**: Utilities incluem considerações de a11y

### Por que shadcn/ui?

- **Customização**: Componentes copiados, não dependências
- **Qualidade**: Acessibilidade e performance built-in
- **Design**: Consistência visual profissional
- **TypeScript**: Tipagem completa e IntelliSense

## 🎯 Próximos Passos

### Funcionalidades Planejadas

- [ ] Sistema de autenticação completo
- [ ] Busca avançada de profissionais
- [ ] Agendamento de consultas
- [ ] Chat em tempo real
- [ ] Avaliações e reviews
- [ ] Sistema de pagamentos

### Melhorias Técnicas

- [ ] PWA com service workers
- [ ] Integração com APIs de saúde
- [ ] Analytics e monitoramento
- [ ] Testes E2E com Cypress
- [ ] CI/CD com GitHub Actions
- [ ] Internacionalização (i18n)

## 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add: amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- **Commits**: Use Conventional Commits
- **Código**: Prettier + ESLint configurados
- **Testes**: Mínimo 80% de coverage
- **TypeScript**: Strict mode habilitado

## 📞 Suporte

- **Email**: contato@lacreisaude.com.br
- **Documentação**: Este README
- **Issues**: Use GitHub Issues para bugs
- **Discussions**: GitHub Discussions para dúvidas

---

**Lacrei Saúde** - Cuidar com segurança e respeito 🏳️‍🌈

*Feito com ❤️ para a comunidade LGBTQIAPN+*
