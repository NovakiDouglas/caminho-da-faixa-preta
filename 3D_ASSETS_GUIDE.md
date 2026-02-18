# Guia de Ativos 3D (3D Assets Guide)

Para substituir os modelos 3D provisórios (boneco geométrico, itens) por modelos mais detalhados ou personalizados, siga este guia.

## 1. Gerando o Avatar (Boneco)

Você mencionou interesse em gerar o boneco. Para o estilo "Chibi" / "Toy" (cabeça grande, corpo pequeno, estilo plástico/massinha) visto na referência, recomendamos as seguintes ferramentas:

### Opção A: Ferramenta Web (Mais fácil para iniciantes em 3D)
**Spline (spline.design)**
- É uma ferramenta de design 3D rodando direto no navegador.
- O estilo "clay" (massinha) e "soft" da sua referência é muito comum e fácil de atingir no Spline.
- Você pode modelar usando formas básicas (esferas, cilindros) e usar materiais "Matte" ou "Plastic".
- Exporte como `.glb` ou use o viewer do Spline (mas para este projeto, `.glb` é melhor para integrarmos com a lógica de movimento).

### Opção B: Modelagem Manual (Profissional)
**Blender**
- Ferramenta gratuita e poderosa.
- Procure por tutoriais: "Blender Chibi Character Tutorial" ou "Low Poly Character Blender".

### Opção C: Geradores de IA (Rápido, resultados variados)
- **Meshy.ai** ou **CSM.ai**: Geram modelos 3D a partir de texto ("text to 3d") ou imagem ("image to 3d").
  - Prompt sugerido: "Cute chibi jiu jitsu fighter, white gi, blue belt, 3d render, clay style, minimal".

## 2. Substituindo o Modelo no Código

Após ter o arquivo do modelo (recomendamos formato `.glb`):

1. Crie uma pasta `public/models/` e coloque o arquivo (ex: `avatar.glb`) lá.
2. Instale/Use a ferramenta `gltfjsx` para transformar o modelo em um componente React (opcional, mas recomendado para performance e animação):
   ```bash
   npx gltfjsx public/models/avatar.glb --transform --types
   ```
   Isso vai gerar um arquivo `Avatar.tsx`.
3. Substitua o uso de `src/components/avatar/Character.tsx` pelo novo componente.

Se preferir carregar direto sem converter:

Edite `src/components/avatar/Character.tsx`:
```tsx
import { useGLTF } from '@react-three/drei';

export default function Character(props) {
  const { scene } = useGLTF('/models/avatar.glb');
  // scene.traverse... (para ativar sombras se necessário)
  return <primitive object={scene} {...props} />;
}
```

## 3. Substituindo Itens do Ambiente

Os itens atuais (`BeltRack`, `Dummy`, `Scrolls`) estão em `src/components/dojo/`. Eles foram feitos com formas geométricas básicas (código).
Para substituir por modelos reais:
1. Gere/baixe o modelo `.glb`.
2. Coloque em `public/models/`.
3. Edite o componente correspondente para usar `useGLTF` ao invés de `<mesh>`.
