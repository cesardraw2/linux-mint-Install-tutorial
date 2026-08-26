---
step: 6
web-id: after
nav-label: Pós-instalação
status: não iniciado
tags: [linux-mint, atualizações, drivers, timeshift, flathub]
---

# 06 — Quatro ajustes no primeiro dia

Esta etapa acontece depois do primeiro login no Mint instalado. O sistema já funciona; faça os quatro ajustes na ordem e reinicie somente quando o próprio sistema pedir.

> [!tip] Rotina curta
> Faça **um ajuste**, marque-o na lista e passe ao próximo. Se uma opção não aparecer, não force: anote o modelo do computador e procure orientação específica.

## 1. Atualizações

Abra o ícone de escudo na barra, instale tudo pelo Gerenciador de Atualizações e reinicie se for solicitado. Faça isso antes de instalar jogos ou drivers.

## 2. Drivers — NVIDIA e Wi-Fi

Menu → **Gerenciador de Drivers**. Se aparecer NVIDIA, marque o driver recomendado (**proprietary, tested**) e aplique.

![[Anexos/official-mintdrivers.png]]

> [!success] Onde clicar
> `nvidia-driver-xxx (recommended)` → Apply Changes

![[Anexos/official-mintdrivers-2.png]]

Depois de aplicar, reinicie para ativar o driver.

## 3. Timeshift — restauração do sistema

É o “restaurar sistema” do Windows, só que melhor. Configure antes de testar PPAs ou fazer mudanças arriscadas.

![[Anexos/official-timeshift-1.png]]

**RSYNC** serve para a maioria dos desktops. BTRFS somente se a raiz usar btrfs.

![[Anexos/official-timeshift-2.png]]

Escolha um disco com espaço, preferencialmente o SSD da raiz ou um HD interno dedicado.

![[Anexos/official-timeshift-3.png]]

Diário e alguns semanais são um bom começo.

![[Anexos/official-timeshift-4.png]]

Clique **Create** e espere terminar.

## 4. Flathub no Gerenciador de Software

Abra o Gerenciador de Software → menu → **Preferences / Fontes**. Confira se o Flathub está ativo. Assim você instala Spotify, Discord, Steam, Obsidian e outros aplicativos.

![[Anexos/wiki-software-manager.png]]

> [!success] Onde clicar
> Menu → Preferences → ative Flathub

## Resultado

![[Anexos/desktop-cinnamon-full.png]]

Desktop Cinnamon estável, gerenciador de arquivos e terminal prontos para trabalhar.

## Checklist do primeiro dia

- [ ] Atualizações aplicadas
- [ ] Driver NVIDIA/Wi-Fi instalado, se listado
- [ ] Timeshift com pelo menos um snapshot
- [ ] Flathub ativo no Gerenciador de Software
- [ ] Etapa 06 concluída

[[05 - Usuário, espera e reinício|← Anterior]] · [[Início]]
