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

- **Instalação limpa:** o disco de destino pode ser apagado. `Erase disk and install Linux Mint` instala o Mint sozinho nesse disco.
- **Windows + Mint (dual boot):** o Windows precisa continuar intacto. Não escolha `Erase disk`; use `Install Linux Mint alongside Windows` apenas com backup e entendendo o redimensionamento automático.
- **Algo mais:** é o particionamento manual. Ele não é uma “opção segura” por si só; um clique na partição errada pode apagar dados.

> [!danger] A tela mais fácil de errar
> **Erase disk** apaga o Windows inteiro. **Something else / Algo mais** permite criar EFI, swap, `/` e `/home` manualmente.

![[Anexos/official-installer-install.png]]

A opção **Erase disk and install Linux Mint** formata o disco escolhido. Só use se o computador puder ser zerado.

> [!tip] Computador com Windows
> Se aparecer **Install Linux Mint alongside Windows**, o instalador pode encolher o Windows sozinho. Para controlar SSD e HD, escolha **Something else / Algo mais**.

![[Anexos/official-installer-partitions.png]]

## Papel de cada disco

- **SSD — velocidade:** sistema, programas e swap.
- **HD — capacidade:** documentos, fotos, vídeos e jogos. Monte como `/home`.

## Esquema recomendado — SSD + HD

| Ponto   |   Tamanho | Formato | Disco | Função              |
| ------- | --------: | ------- | ----- | ------------------- |
| EFI     |    500 MB | FAT32   | SSD   | Boot UEFI           |
| swap    |    4–8 GB | swap    | SSD   | Memória virtual     |
| `/`     | 50–100 GB | ext4    | SSD   | Sistema e programas |
| `/home` |  restante | ext4    | HD    | Arquivos pessoais   |

## Esquema recomendado — somente SSD

| Ponto |  Tamanho | Formato | Disco | Função                   |
| ----- | -------: | ------- | ----- | ------------------------ |
| EFI   |   500 MB | FAT32   | SSD   | Boot UEFI                |
| swap  |   4–8 GB | swap    | SSD   | Memória virtual          |
| `/`   | restante | ext4    | SSD   | Sistema, apps e arquivos |

> [!note] Swap e EFI
> Se pular a swap, o Mint cria um `swapfile` na raiz. Em PCs UEFI, a EFI de 500 MB FAT32 é obrigatória; não a monte em `/`.

![[Anexos/official-installer-partition.png]]

## Criação manual

1. Identifique o disco pelo tamanho. `nvme0n1` costuma ser SSD e `sda` costuma ser HD.
2. Se a tabela estiver vazia em UEFI, crie uma tabela GPT.
3. EFI: 500 MB, FAT32, flag boot/esp.
4. swap: 4 a 8 GB, tipo swap.
5. `/`: 50 a 100 GB, ext4.
6. `/home`: restante do HD, ext4.
7. Em **Device for boot loader installation**, escolha o SSD inteiro, não uma partição.

## Concluir etapa

- [ ] Disco correto identificado pelo tamanho
- [ ] Esquema SSD + HD ou somente SSD escolhido
- [ ] Destino do boot loader confirmado
- [ ] Etapa 04 concluída

[[03 - Boot e instalação|← Anterior]] · [[Início]] · [[05 - Usuário, espera e reinício|Próxima →]]
