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

Este caminho instala o Linux Mint; **não é um tutorial completo de dual boot (Windows e Linux na mesma máquina)**.

Dual boot significa manter dois sistemas operacionais no mesmo computador e escolher, em um menu, qual deles iniciar a cada vez. O esquema **SSD + HD** mostrado mais adiante não é dual boot: ele coloca o Mint no SSD e os arquivos pessoais no HD.

Se você quer manter o Windows, não avance no particionamento deste caminho sem antes seguir uma orientação específica de dual boot. A opção **Install Linux Mint alongside Windows** pode redimensionar o Windows automaticamente, mas ainda exige backup e conferência das partições.

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

- **Instalação limpa:** você aceita apagar o sistema e os arquivos do disco de destino. Siga este guia e use `Erase disk` somente depois de conferir o disco.
- **Dual boot:** você quer manter o Windows e escolher Windows ou Linux ao ligar o computador. Pare e siga uma orientação específica de dual boot; não use `Erase disk`.

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
