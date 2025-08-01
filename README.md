# ts-count

Extensão para strings em TypeScript que adiciona a propriedade `.count`, que
retorna o número de **grapheme clusters** (unidades visíveis) em uma string.

## Por que `.count` é útil?

A propriedade nativa `.length` de uma string em JavaScript/TypeScript retorna o
número de **códigos UTF-16**, o que muitas vezes não corresponde ao número de
caracteres visíveis.

Por exemplo:

| String    | `.length` | `.count` |
| --------- | --------- | -------- |
| 🇧🇷        | 4         | 1        |
| 👨‍👩‍👧‍👦  | 11        | 1        |
| café      | 4         | 4        |
| á (a + ´) | 2         | 1        |

Isso acontece porque alguns caracteres visíveis são compostos por múltiplos
pontos de código — como emojis com modificadores, letras com acentos combinados,
ou sequências ZWJ (zero-width joiner).

### Quando usar `.count`?

Use `.count` sempre que quiser:

- Contar o número **real de caracteres visíveis** em uma string;
- Tratar corretamente **emojis, acentos combinados e símbolos complexos**;
- Melhorar a precisão de validações de entrada e exibição em interfaces que
  dependem da percepção do usuário.

## Por que `.utf8Count` é útil?

O `.utf8Count` retorna o número real de **bytes UTF-8** usados para representar
a string — informação importante para:

- APIs que limitam o tamanho do conteúdo em **bytes**, como SMS, push
  notifications ou payloads HTTP;
- Compressão, criptografia e hashing (operações byte-level);
- Armazenamento eficiente em bancos de dados e buffers binários;
- Otimização de custos em serviços que cobram por tráfego ou armazenamento.

Exemplo:

| String    | `.length` | `.count` | `.utf8Count` |
| --------- | --------- | -------- | ------------ |
| 🇧🇷        | 4         | 1        | 8            |
| 👨‍👩‍👧‍👦  | 11        | 1        | 25           |
| café      | 4         | 4        | 5            |
| á (a + ´) | 2         | 1        | 3            |

---
