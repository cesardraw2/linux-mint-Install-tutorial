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

## Papel de cada disco

- **SSD — velocidade:** sistema, programas e swap.
- **HD externo — cópia e capacidade:** backup, documentos, fotos, vídeos e jogos. Conecte-o depois da instalação e, se quiser compartilhá-lo com Windows, prefira exFAT; para uso somente no Linux, ext4 é uma opção.

## Esquema recomendado — SSD único

| Ponto |    Tamanho | Formato | Disco | Função                   |
| ----- | ---------: | ------- | ----- | ------------------------ |
| EFI   | 300–512 MB | FAT32   | SSD   | Boot UEFI                |
| `/`   |   restante | ext4    | SSD   | Sistema, apps e arquivos |

O instalador pode criar o `swapfile` automaticamente. Não é necessário criar uma partição para o HD externo.

> [!note] Swap e EFI
> Se pular a swap, o Mint cria um `swapfile` na raiz. Em PCs UEFI, a EFI de 500 MB FAT32 é obrigatória; não a monte em `/`.

![[Anexos/official-installer-partition.png]]

## Criação manual

1. Identifique o disco pelo tamanho. `nvme0n1` costuma ser SSD e `sda` costuma ser HD.
2. Se a tabela estiver vazia em UEFI, crie uma tabela GPT.
3. EFI: 500 MB, FAT32, flag boot/esp.
4. swap: 4 a 8 GB, tipo swap.
5. `/`: 50 a 100 GB, ext4.
6. `/home`: restante do SSD, ext4 (ou deixe o instalador usar uma única raiz).
7. Em **Device for boot loader installation**, escolha o SSD inteiro, não uma partição.

## Concluir etapa

- [ ] Disco correto identificado pelo tamanho
- [ ] Esquema do SSD interno escolhido
- [ ] Destino do boot loader confirmado
- [ ] Etapa 04 concluída

[[03 - Boot e instalação|← Anterior]] · [[Início]] · [[05 - Usuário, espera e reinício|Próxima →]]
