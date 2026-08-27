---
step: 8
web-id: format-disk
nav-label: Formatar um HD
status: não iniciado
tags: [linux-mint, pendrive, live, formatar, hd, ssd, gparted, discos]
---

# 08 — Formatar um HD pelo pendrive

Esta sessão ensina a **preparar um HD ou SSD para guardar arquivos** usando a sessão live do pendrive do Linux Mint. Ela não instala o Mint e não é uma etapa obrigatória da instalação.

> [!danger] Formatar apaga dados
> Formatar uma partição apaga os arquivos dela. Criar uma nova tabela de partições apaga a organização do disco inteiro. Faça backup e confira o modelo e o tamanho do disco antes de confirmar.

## Quando usar esta sessão

- **HD/SSD vazio ou que pode ser apagado:** você pode prepará-lo agora.
- **HD/SSD com arquivos importantes:** não continue. Faça uma cópia em outro disco primeiro.
- **Disco que contém Windows ou outro sistema que você quer manter:** não formate. Isso é um caso de dual boot ou migração e exige outra orientação.
- **Pendrive usado para iniciar o Mint:** não formate esse pendrive enquanto estiver usando a sessão live.

## Formatar não é “apagar com segurança”

Formatação normal cria um novo sistema de arquivos e deixa o disco pronto para uso; ela não garante que os dados antigos sejam irrecuperáveis. Para vender ou descartar um disco, use um procedimento específico de apagamento seguro para o modelo.

## Escolha o sistema de arquivos

| Onde o disco será usado                             | Escolha recomendada | Observação                                                  |
| --------------------------------------------------- | ------------------- | ----------------------------------------------------------- |
| Somente no Linux Mint                               | `ext4`              | Melhor integração com permissões e pastas do Linux.         |
| Linux e Windows, alternadamente                     | `NTFS`              | O Windows reconhece nativamente.                            |
| Arquivos entre Linux, Windows e outros dispositivos | `exFAT`             | Prático para compartilhamento; não guarda permissões Linux. |

Se você não sabe onde o disco será usado, **pare antes de escolher o formato**. A escolha não é estética: ela define quais sistemas conseguirão ler e gravar os arquivos.

## Passo a passo na sessão live

### 1. Inicie o Mint pelo pendrive

1. Conecte o pendrive ao computador de destino.
2. Inicie pelo USB e escolha **Start Linux Mint**.
3. Na área de trabalho, abra o aplicativo **Discos** (procure por “Disks”).

> [!tip] Por que usar a sessão live?
> O disco interno não está sendo usado pelo sistema instalado, então uma partição pode ser desmontada antes da formatação. A sessão live também permite preparar um disco que não tem sistema funcionando.

### 2. Identifique o disco certo

1. Compare **modelo**, **capacidade** e, se possível, a conexão do disco com o que você viu fisicamente no computador.
2. Ignore nomes genéricos como `sda` ou `nvme0n1` quando estiverem sozinhos; confirme pelo tamanho e modelo.
3. Confirme duas vezes que não é o pendrive do Mint e que não contém o Windows que você quer preservar.

> [!danger] Última chance de parar
> Se você não consegue dizer “este é o disco de 1 TB que quero formatar”, feche o aplicativo e peça ajuda. Não escolha um disco por ordem na lista.

### 3. Escolha entre partição e disco inteiro

- **Formatar uma partição:** selecione apenas a partição desejada. As outras partições do mesmo disco permanecem.
- **Reaproveitar o disco inteiro:** só faça isso se todas as partições puderem ser apagadas. Use **Format Disk / Formatar disco** para criar uma nova tabela e depois uma nova partição.

Para um HD de dados vazio, o caminho mais simples costuma ser: criar uma tabela **GPT**, criar uma partição ocupando o espaço todo e formatá-la no sistema escolhido acima.

### 4. Formate a partição

1. Se a partição estiver montada, clique no botão de desmontar/ejetar.
2. Abra o menu de opções da partição (engrenagem).
3. Escolha **Format Partition / Formatar partição**.
4. Selecione o sistema de arquivos e dê um nome simples, como `Dados`.
5. Leia o resumo e confirme somente se o disco e a partição estiverem corretos.
6. Monte a partição e abra o gerenciador de arquivos para testar a leitura e a gravação.

> [!warning] Não interrompa uma operação
> Mantenha o computador ligado e não remova o disco enquanto a operação estiver em andamento. Interromper uma alteração de partição pode corromper o sistema de arquivos.

## Se o botão estiver bloqueado

A partição pode estar montada ou em uso. Desmonte-a pelo próprio aplicativo e tente novamente. Se ela for o sistema que está rodando, você não poderá formatá-la por dentro dele: reinicie pelo pendrive e repita a operação na sessão live.

## Concluir etapa

- [ ] Backup confirmado em outro local
- [ ] Disco identificado por modelo e capacidade
- [ ] Pendrive do Mint e Windows foram preservados
- [ ] Sistema de arquivos escolhido para o uso correto
- [ ] Formatação testada no gerenciador de arquivos
- [ ] Etapa 08 concluída

[[07 - Problemas comuns|← Problemas comuns]] · [[Início|Início]]
