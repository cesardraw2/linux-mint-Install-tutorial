---
step: 3
status: não iniciado
tags: [linux-mint, boot, bios, uefi, instalador]
---

# 03 — Boot e instalação

Reinicie com o pendrive conectado. Entre no menu de boot e escolha o pendrive — não o disco interno.

## Teclas de boot mais comuns

| Marca | Tecla |
|---|---|
| Dell | `F12` |
| HP | `F9` / `Esc` |
| Lenovo | `F12` |
| Acer | `F12` |
| ASUS | `Esc` / `F8` |
| Gigabyte | `F12` |
| Samsung | `F10` / `F2` |
| Genérico | `Del` / `F2` / `Esc` |

Aperte a tecla assim que o logo da marca aparecer.

> [!warning] Secure Boot
> Em UEFI, desative o Secure Boot se o pendrive não iniciar.

![[Anexos/official-isolinux.png]]

> [!success] Onde clicar
> Start Linux Mint

1. Escolha **Start Linux Mint**. Use compatibility mode somente se a tela ficar preta.
2. Espere a área de trabalho ao vivo. Nada foi instalado ainda; você está testando o hardware.
3. Clique duas vezes em **Install Linux Mint**.

![[Anexos/official-cinnamon.png]]

## Telas iniciais do instalador

### Idioma

![[Anexos/official-installer-language.png]]

Escolha **Portuguese (Brazil)** → Continue.

### Teclado

![[Anexos/official-installer-keyboard.png]]

Escolha Portuguese (Brazil) / Portuguese e teste os acentos.

### Internet

![[Anexos/official-installer-internet.png]]

Conecte o Wi-Fi. Codecs e atualizações precisam de rede.

### Codecs

![[Anexos/official-installer-codecs.png]]

> [!success] Marque esta opção
> **Install multimedia codecs**. Sem ela, MP3, H.264 e vários sites de vídeo podem falhar.

## Concluir etapa

- [ ] Boot pelo pendrive realizado
- [ ] Wi-Fi e hardware testados na sessão live
- [ ] Idioma, teclado, internet e codecs configurados
- [ ] Etapa 03 concluída

[[02 - Gravar no pendrive|← Anterior]] · [[Início]] · [[04 - Particionamento|Próxima →]]
