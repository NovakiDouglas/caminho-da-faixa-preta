Engineering Brief: O Caminho da Faixa Preta
Versão: 1.0 Tipo de Projeto: Portfolio Interativo 3D & Ferramenta de Aprendizado Contexto: Migração de Dev Senior Flutter para React Native/Next.js Referência Técnica: App EyesOn (React Native + Expo)

--------------------------------------------------------------------------------
1. Visão Geral do Projeto
"O Caminho da Faixa Preta" é um portfólio web interativo que simula um dojo de Jiu-Jitsu em perspectiva isométrica 3D. O visitante controla um avatar "chibi" vestindo um kimono, navegando pelo cenário para descobrir informações sobre o desenvolvedor (projetos, skills, contato).
Propósito Técnico
Além de servir como portfólio, este projeto funciona como um sandbox para consolidar conhecimentos em React, Next.js e o ecossistema web, utilizando padrões de arquitetura idênticos aos usados no desenvolvimento mobile com React Native/Expo (baseado no app de referência EyesOn).

--------------------------------------------------------------------------------
2. Arquitetura e Stack Tecnológico
A arquitetura segue um modelo híbrido de renderização (Server/Client) provido pelo Next.js, integrando uma cena 3D complexa.
Core Stack
Tecnologia
Função
Equivalente Flutter (Analogia)
Citação
Next.js (App Router)
Framework Web & Roteamento
Flutter Web + GoRouter / Expo Router
React Three Fiber
Renderização 3D Declarativa
CustomPainter (3D)
TypeScript
Linguagem & Tipagem Estrita
Dart (Tipagem forte)
Tailwind CSS
Estilização Utility-first
Propriedades de Widgets / Tamagui
Zustand
Gerenciamento de Estado (Client)
ChangeNotifier + Provider
TanStack Query
Gerenciamento de Estado (Server)
FutureBuilder avançado / Cache
Prisma
ORM / Camada de Dados
Drift / SQFlite
Estrutura de Camadas
1. Camada de Apresentação: Next.js + React Components + Tailwind.
2. Camada 3D: React Three Fiber + Drei + Modelos Spline.
3. Camada de Estado: Zustand (Global Client State) + TanStack Query (Server State Sync).
4. Camada de Dados/Backend: API Routes (Next.js) + Prisma ORM + SQLite (Dev)/PostgreSQL (Prod).

--------------------------------------------------------------------------------
3. Padrões de Engenharia (EyesOn Pattern Matching)
O projeto deve estritamente seguir os padrões estabelecidos no app de referência EyesOn para facilitar a transferência de conhecimento.
3.1. Gerenciamento de Estado (Zustand)
Os stores devem seguir três padrões principais encontrados no EyesOn:
1. Store Simples: Getters e Setters diretos (ex: AuthStore).
2. Store Complexo (CRUD): Uso de spread operator para imutabilidade e getters computados (ex: TrackingItems).
3. Documentação: Analogias claras com notifyListeners() e ChangeNotifier nos comentários do código.
3.2. Estrutura de Diretórios
Deve ser mantida a estrutura src/ com feature-based folders e barrel exports (index.ts):
src/
├── app/ (Roteamento baseado em arquivos - App Router)
├── components/ (UI e Lógica co-localizada)
│   ├── avatar/ (Modelo + Controller + Hooks + Testes)
│   ├── dojo/ (Cena 3D)
│   └── _providers/ (Contextos globais)
├── hooks/
│   └── stores/ (Zustand stores)
├── lib/ (Configurações de libs: Prisma, QueryClient)
└── utils/ (Tipos e Helpers)
3.3. Performance e Renderização 3D
• Loop de Renderização: Utilizar useRef para valores mutáveis dentro do useFrame (loop de animação) para evitar re-renders desnecessários (60fps), análogo a evitar setState dentro de um AnimationController listener.
• Lazy Loading: Componentes 3D devem ser importados dinamicamente com ssr: false para evitar erros de hydration e reduzir o bundle inicial.
• Hooks Co-localizados: A lógica de componentes complexos deve ser extraída para hooks customizados (use-avatar-movement.ts) localizados na mesma pasta do componente visual, acompanhados de seus testes (.spec.ts).

--------------------------------------------------------------------------------
4. Funcionalidades Core e Mecânicas
4.1. O Dojo (Cenário)
• Navegação: Click-to-move (Pathfinding simples) e controle direto via WASD.
• Zonas de Interação: Deteção de proximidade (raio de 2 unidades) ativa triggers visuais (Glow/Outline).
• Night Mode: Alternância de tema (Luz natural vs. Neon) via interruptor 3D, persistido via localStorage.
4.2. Conteúdo Interativo
• Rack de Faixas (Skills): Visualização 3D das tecnologias dominadas (Cores das faixas indicam senioridade: Flutter/Roxa, React Native/Branca).
• Pergaminhos (Projetos): Itens clicáveis no tatame que abrem modais detalhados via API.
• Espelho (Sobre): Metáfora visual para biografia e links sociais.
4.3. Sistema Admin (CMS)
Dashboard protegido por autenticação (NextAuth) para CRUD completo de Projetos, Skills e leitura de mensagens de Contato. Deve utilizar react-hook-form e validação com Zod.

--------------------------------------------------------------------------------
5. Roadmap de Implementação (Fases Resumidas)
O desenvolvimento é dividido em 24 fases incrementais.
Fase Inicial (Setup e Fundamentos)
• Fase 0-2: Scaffolding do Next.js, configuração do TypeScript/Tailwind e sistema de Layouts.
• Fase 3-4: Implementação de Temas (Zustand) e páginas estáticas (Sobre/Contato).
Fase 3D (Core)
• Fase 5: Renderização da cena básica (R3F) e tratamento de SSR.
• Fase 6-7: Implementação do Avatar, física de movimento (WASD) e Click-to-Move.
• Fase 8: Lógica de detecção de zonas de interação.
Fase de Conteúdo e Dados
• Fase 9-10: Modelagem e lógica do Rack de Skills e Pergaminhos de Projetos.
• Fase 11: Backend integration para formulário de contato (API Routes).
• Fase 14-16: Construção do CMS Admin e definição do Schema Prisma/Banco de Dados.
Refinamento e Deploy
• Fase 18: SEO e Metadados (Open Graph).
• Fase 19-20: Otimização de performance (Code Splitting) e Deploy na Vercel.
• Fase 21-22: Responsividade Mobile (Controles Touch) e Acessibilidade.

--------------------------------------------------------------------------------
6. Riscos e "Gotchas" (Edge Cases)
1. Compatibilidade WebGL:
    ◦ Risco: Nem todos os dispositivos suportam WebGL 2.0.
    ◦ Mitigação: Implementar detecção de contexto e oferecer fallback 2D.
2. Hydration Mismatch:
    ◦ Risco: O servidor (Next.js) tenta renderizar o Canvas 3D, gerando erro no cliente.
    ◦ Mitigação: Uso obrigatório de next/dynamic com { ssr: false } para qualquer componente que use window ou Three.js.
3. SEO em SPAs 3D:
    ◦ Risco: Crawlers não indexam conteúdo dentro de Canvas WebGL.
    ◦ Mitigação: Manter conteúdo textual em HTML semântico (fora do Canvas) ou usar Server Components para renderizar metadados e estruturas HTML invisíveis.

--------------------------------------------------------------------------------
7. Glossário de Migração (Flutter -> React)
Para referência rápida durante o desenvolvimento:
• Widget → Component
• State / setState → useState
• initState / dispose → useEffect
• CustomPainter → React Three Fiber (<mesh>)
• ChangeNotifier → Zustand Store
• FutureBuilder → TanStack Query / Suspense
• GoRouter → App Router (File-based)