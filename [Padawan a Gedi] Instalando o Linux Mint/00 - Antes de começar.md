---
step: 0
web-id: prereq
nav-label: Antes de começar
status: não iniciado
tags: [linux-mint, preparação, backup]
---

# 00 — Antes de começar

Três coisas. Sem elas o instalador trava no meio ou você perde arquivo.

## Primeiro: entenda os dois computadores

Você começa em um **computador que está funcionando** — Windows ou Linux — para baixar a imagem ISO e criar o pendrive inicializável.

Depois, você usa esse pendrive no **computador de destino**, onde o Linux Mint será instalado.

- Se o computador de destino ainda inicia Windows ou Linux, ele pode fazer as duas tarefas.
- Se o computador de destino está sem sistema ou não inicia, use outro computador funcionando para preparar o pendrive.
- O pendrive será apagado durante a gravação. Separe um pendrive de 8 GB ou mais.

> [!tip] Regra simples
> **Computador funcionando → baixar ISO e preparar pendrive.**
> **Computador de destino → iniciar pelo pendrive e instalar o Mint.**

## O que este caminho instala

Este guia tem duas trilhas: **instalação limpa** (Mint sozinho) e **dual boot** (Windows e Mint no mesmo computador). Escolha uma antes de chegar ao particionamento.

Dual boot significa manter dois sistemas operacionais no mesmo computador e escolher, em um menu, qual deles iniciar a cada vez. O esquema **SSD + HD** mostrado mais adiante não é dual boot: ele coloca o Mint no SSD e os arquivos pessoais no HD.

Se você quer manter o Windows, siga a trilha completa [[09 - Dual boot com Windows|Dual boot com Windows]]. Ela explica backup, BitLocker, modo de inicialização, espaço livre e como conferir a tela do instalador.

## Um SSD interno e um HD externo, sem dual boot

Este é um cenário simples e recomendado para começar:

- instale o Linux Mint no **SSD interno**; ele será mais rápido e continuará funcionando mesmo sem acessórios conectados;
- use o **HD externo para o backup** antes da instalação e, depois, para documentos, fotos e vídeos;
- não instale o sistema no HD externo nesta primeira tentativa: o computador ficaria dependente do cabo, da porta USB e da ordem de boot;
- desconecte o HD externo antes de confirmar a instalação e conecte-o novamente somente depois de o Mint iniciar.

Se o SSD ainda contém Windows e ele não será mantido, a opção `Erase disk and install Linux Mint` pode apagar **somente o SSD**, depois de conferir o modelo e o tamanho do disco. O backup no HD externo deve ser aberto e conferido antes de apagar qualquer coisa.

> [!danger] Não misture os modos de inicialização
> Windows e Linux devem ser instalados no mesmo modo de inicialização: os dois em **UEFI** ou os dois em **Legacy/BIOS**. Não troque Legacy por UEFI “para testar” depois que o Windows já funciona; em alguns computadores isso impede o Windows de iniciar.

## Descubra o modo antes de criar o pendrive

- **No Windows:** pressione `Win + R`, digite `msinfo32` e confira **Modo da BIOS**: ele mostrará `UEFI` ou `Legacy`.
- **No Linux live:** abra o terminal e use `test -d /sys/firmware/efi && echo UEFI || echo Legacy`.
- **Secure Boot:** é um recurso do UEFI. Se a tela diz `Legacy`, `Legacy Option ROMs` ou algo parecido, não assuma que “boot seguro” está ativo; confirme o **Boot List Option** e o estado real do Secure Boot no firmware.

Se o computador estiver em Legacy, o Mint ainda pode iniciar em modo BIOS/Legacy, pois a ISO suporta os dois modos. Para dual boot, porém, o Windows existente e o Mint precisam combinar. Em Dell, os nomes e possibilidades variam por modelo: consulte o manual antes de mudar Boot Mode, Secure Boot, SATA Operation ou AHCI.

> [!warning] Caso Dell Legacy
> Se o Windows do seu Dell aparece como `Legacy`, não mude para UEFI sem um plano de recuperação e backup. A Dell alerta que trocar o modo pode deixar a instalação atual do Windows sem inicializar; em modelos mais novos, Legacy pode nem ser suportado. Se a configuração estiver confusa, pare nesta etapa e confirme o modelo exato.

## Escolha o caminho antes de continuar

- **Instalação limpa (SSD único):** você aceita apagar o sistema e os arquivos do SSD interno. Faça backup no HD externo, desconecte-o e use `Erase disk` somente depois de conferir o disco.
- **Dual boot:** você quer manter o Windows e escolher Windows ou Linux ao ligar o computador. Abra [[09 - Dual boot com Windows|a trilha de dual boot]] e não use `Erase disk`.

Se você não sabe qual dos dois quer, **pare antes do particionamento**. Resolva essa dúvida antes de clicar em qualquer botão que formate um disco.

## Checklist

- [ ] **Pendrive de 8 GB ou mais** — ele será formatado. Retire fotos e documentos antes.
- [ ] **Backup** — copie o que importa do HD/SSD atual para outro disco ou nuvem.
- [ ] **Internet** — a ISO tem cerca de 3 GB e os codecs são baixados durante a instalação.

> [!danger] Proteja seus arquivos
> Não prossiga sem confirmar o backup e esvaziar o pendrive que será usado.

## Concluir etapa

- [ ] Etapa 00 concluída

[[Início|← Início]] · [[01 - Obter a imagem ISO|Próxima →]]
