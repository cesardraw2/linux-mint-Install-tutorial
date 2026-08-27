---
step: 4
web-id: disk
nav-label: Particionamento
status: não iniciado
tags: [linux-mint, particionamento, ssd, hd, efi, swap, home]
---

# 04 — Particionamento: escolha com cuidado

Esta etapa acontece no **computador de destino**. O computador usado para baixar a ISO e preparar o pendrive já cumpriu o papel dele.

## Decida qual cenário é o seu

- **Instalação limpa — SSD único:** se o Windows não será mantido, escolha o SSD interno pelo modelo e tamanho e use `Erase disk and install Linux Mint`. O HD externo deve estar desconectado durante esta confirmação.
- **Windows + Mint (dual boot):** o Windows precisa continuar intacto. Siga primeiro [[09 - Dual boot com Windows|a trilha de dual boot]]; depois, nesta tela, use `Install Linux Mint alongside Windows` somente após revisar o resumo. Nunca escolha `Erase disk`.
- **Algo mais:** é o particionamento manual. Ele não é uma “opção segura” por si só; um clique na partição errada pode apagar dados.

> [!danger] A tela mais fácil de errar
> **Erase disk** apaga o Windows inteiro. **Something else / Algo mais** permite criar EFI, swap, `/` e `/home` manualmente.

> [!tip] O HD externo não é o disco do sistema
> Neste cenário, o Mint fica no SSD interno. O HD externo é para backup e arquivos pessoais. Não selecione o HD externo como destino do instalador e não o formate junto com o SSD.

![[Anexos/official-installer-install.png]]

A opção **Erase disk and install Linux Mint** formata o disco escolhido. Só use se o computador puder ser zerado.

> [!tip] Computador com Windows
> Se aparecer **Install Linux Mint alongside Windows**, isso pertence à trilha [[09 - Dual boot com Windows|dual boot]]. Para uma instalação limpa, confirme que o SSD pode ser apagado.

![[Anexos/official-installer-partitions.png]]

> [!important] Como chegar à tela da imagem
> Se você quer **criar ou escolher partições manualmente**, precisa voltar à tela **Tipo de instalação** e selecionar **Something else / Algo mais**. Só essa escolha abre a tela detalhada de particionamento mostrada acima, com a tabela de dispositivos, a coluna **Format?** e o campo **Device for boot loader installation**.
>
> Se escolher **Erase disk and install Linux Mint**, o instalador prepara as partições automaticamente e **não** abrirá essa tela completa. Para dual boot, escolha **Install Linux Mint alongside Windows** e siga a trilha específica; não selecione `Something else` sem saber exatamente o que fará.

## Criar as partições manualmente: quando vale a pena?

Para uma instalação limpa no SSD, **não é obrigatório** criar tudo manualmente. A opção `Erase disk` já cria uma estrutura funcional. O particionamento manual faz sentido quando você quer separar melhor o sistema dos seus arquivos ou quando precisa controlar exatamente o espaço usado.

### Vantagens

- Você pode reinstalar o sistema sem apagar uma partição `/home` separada.
- Fica mais fácil identificar onde estão o sistema e os arquivos pessoais.
- Você controla o tamanho reservado para o sistema e para os dados.
- Em uma configuração com mais de um sistema, reduz o risco de escolher o disco errado — desde que as partições sejam identificadas com certeza.

### Desvantagens

- Um erro de seleção ou de formatação pode apagar o SSD inteiro.
- Partições pequenas demais causam problemas quando o sistema cresce.
- `/home` separado não é backup: se o SSD quebrar, as duas partições podem ser perdidas.

Para quem quer seguir boas práticas e separar sistema de arquivos pessoais, recomendamos o esquema manual com **EFI + `/` + `/home`**. Se você nunca particionou um disco, a instalação automática continua sendo mais segura; não escolha o modo manual apenas para “ter mais partições”.

## Papel de cada disco

- **SSD — velocidade:** sistema, programas e swap.
- **HD externo — cópia e capacidade:** backup, documentos, fotos, vídeos e jogos. Conecte-o depois da instalação e, se quiser compartilhá-lo com Windows, prefira exFAT; para uso somente no Linux, ext4 é uma opção.

## Esquema recomendado — SSD único com `/home` separado

| Ponto   |    Tamanho | Formato | Disco | Função                              |
| ------- | ---------: | ------- | ----- | ----------------------------------- |
| EFI     | 300–512 MB | FAT32   | SSD   | Inicialização UEFI                  |
| `/`     |   60–80 GB | ext4    | SSD   | Mint, atualizações e aplicativos    |
| `/home` |   restante | ext4    | SSD   | Documentos e configurações pessoais |

Em um SSD de 256 GB, reserve cerca de **80 GB para `/`** e use o restante em `/home`. O instalador pode criar o `swapfile` automaticamente; não é necessário criar uma partição swap separada. O HD externo continua sendo o local recomendado para backups.

> [!note] Swap e EFI
> Se pular a swap, o Mint cria um `swapfile` na raiz. Em PCs UEFI, a EFI de 500 MB FAT32 é obrigatória; não a monte em `/`.

![[Anexos/official-installer-partition.png]]

## Criação manual no SSD (opção avançada)

1. Na tela anterior, escolha **Something else / Algo mais**.
2. Identifique o SSD pelo modelo e tamanho. `nvme0n1` costuma ser SSD; não confie apenas no nome.
3. Se o SSD estiver vazio em UEFI, crie uma tabela **GPT**.
4. Crie uma partição **EFI/ESP** de 300–512 MB, FAT32, com a flag `boot/esp`.
5. Crie uma partição `/` de 60–80 GB, em `ext4`, para o sistema e os aplicativos.
6. Crie uma partição `/home` em `ext4` com todo o espaço restante, para documentos e configurações pessoais.
7. Não crie uma partição swap: o Mint pode usar um `swapfile` automaticamente.
8. Em **Device for boot loader installation**, escolha o SSD inteiro, não uma partição.

> [!danger] Pare antes do botão final
> Na coluna **Format?**, marque as novas partições `/` e `/home`. Marque a EFI nova somente se o SSD foi zerado e você acabou de criá-la. Não formate uma EFI que você não reconhece, nem qualquer partição do HD externo. Se uma linha ou tamanho não fizer sentido, volte e peça ajuda.

## Concluir etapa

- [ ] Disco correto identificado pelo tamanho
- [ ] Esquema do SSD interno escolhido
- [ ] Destino do boot loader confirmado
- [ ] Etapa 04 concluída

[[03 - Boot e instalação|← Anterior]] · [[Início]] · [[05 - Usuário, espera e reinício|Próxima →]]
