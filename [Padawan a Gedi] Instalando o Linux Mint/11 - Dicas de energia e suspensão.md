---
step: 11
web-id: power-tips
nav-label: Dicas de energia
status: não iniciado
tags: [linux-mint, energia, suspensão, hibernação, dell, diagnóstico]
---

# 11 — Dicas de energia e suspensão

Esta seção ajuda quando a tela apaga depois de algum tempo, mas o teclado continua aceso, as ventoinhas ficam aceleradas e o computador não volta ao Mint.

## O que provavelmente está acontecendo?

Esse sintoma normalmente indica uma **suspensão travada**: o sistema tentou economizar energia, mas não conseguiu desligar ou religar corretamente a tela e os dispositivos. Não significa necessariamente que a hibernação profunda foi ativada.

Em notebooks Intel de 11ª geração, o sistema pode usar `s2idle` em vez do antigo modo S3/“deep sleep”. O comportamento depende do kernel, do driver gráfico e do firmware.

## Primeiro teste: desligar só a tela

Antes de mudar o BIOS ou o GRUB, faça um teste simples:

1. Abra **Configurações do sistema → Gerenciamento de energia**.
2. Configure **Suspender quando inativo: Nunca**.
3. Mantenha apenas **Desligar a tela** após alguns minutos.
4. Use o notebook por algumas horas.

Se o problema desaparecer, a falha está na suspensão automática. É seguro continuar usando apenas o desligamento da tela enquanto a causa é investigada.

## Conferir o BIOS do Dell Vostro 5402

Pressione `F2` ao ligar e abra **Power Management**:

- **Block Sleep (S3): Disabled** — quando ativado, o BIOS bloqueia a suspensão S3.
- **Lid Switch: Enabled**.
- Não altere UEFI/Legacy, SATA ou Secure Boot por tentativa.
- Faça testes com o carregador original conectado.

A Dell documenta essas opções no [manual de gerenciamento de energia do Vostro 5402](https://www.dell.com/support/manuals/en-us/vostro-14-5402-laptop/mkb_5402_servicemanual/power-management?guid=guid-07da0de4-2f34-4106-9452-d5f08605880a&lang=en-us).

## Atualizar o sistema antes de aplicar ajustes avançados

Com a suspensão automática temporariamente desativada:

- Abra o **Gerenciador de Atualizações** e instale todas as atualizações, principalmente as do kernel.
- Abra o **Gerenciador de Drivers** e verifique se há um driver recomendado para uma GPU NVIDIA.
- Se houver uma atualização de firmware oferecida pelo Mint, instale-a com o carregador conectado.

A Dell lista a BIOS **1.33.1** para o Vostro 5402 como atualização crítica de 11 de dezembro de 2024. Confira a versão exibida no BIOS antes de tentar atualizar; não interrompa uma atualização de firmware. [Página oficial da BIOS 1.33.1](https://www.dell.com/support/home/pt-br/drivers/driversdetails?driverid=613f9)

## Diagnóstico opcional

Se alguém com mais experiência puder ajudar, abra o Terminal e copie o resultado destes comandos:

```bash
cat /sys/power/mem_sleep
```

```bash
journalctl -b -1 -k | grep -Ei "suspend|resume|sleep|drm|i915|nvidia|gpu"
```

Não force `deep`, não edite o GRUB e não instale scripts encontrados na internet antes de identificar o modo disponível e o driver gráfico. Em alguns Vostro 5402, `deep` pode nem estar disponível.

## Se congelar novamente

1. Tente pressionar uma tecla e o botão de ligar uma vez.
2. Se nada responder, tente `Ctrl` + `Alt` + `F3` para abrir um terminal de texto.
3. Se ainda assim não houver resposta, segure o botão de ligar por 10 segundos. Isso pode perder arquivos que não foram salvos, mas é preferível a deixar o notebook aquecer indefinidamente.

> [!warning] Não confunda com hibernação
> Hibernação grava a sessão no disco e desliga o computador. Tela preta com ventoinhas no máximo e teclado aceso aponta mais para uma suspensão que falhou ou um problema de vídeo/driver.

[[10 - Glossário|← Glossário]] · [[Início|Início]]
