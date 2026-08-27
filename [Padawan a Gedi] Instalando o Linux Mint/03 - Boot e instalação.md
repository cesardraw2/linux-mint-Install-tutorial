---
step: 3
web-id: boot
nav-label: Boot e instalador
status: não iniciado
tags: [linux-mint, boot, bios, uefi, instalador]
---

# 03 — Boot e instalação no computador de destino

Agora você sai do computador que preparou o pendrive e vai para o **computador de destino**.

## Antes de apertar qualquer botão

1. Confirme que o backup está pronto.
2. Confirme se este computador é uma instalação limpa ou um dual boot.
3. Conecte o pendrive inicializável.
4. Só então reinicie e abra o menu de boot.

> [!danger] Pare se a intenção for dual boot
> **Instalação limpa:** você pode continuar neste guia, pois o disco escolhido será substituído.
> **Dual boot:** você quer preservar o Windows. Não escolha `Erase disk` e não continue pelo caminho de instalação limpa sem uma orientação própria.

Reinicie com o pendrive conectado. Entre no menu de boot e escolha o pendrive — não o disco interno.

## Escolha o pendrive no menu de boot

O menu de boot aparece antes do Windows ou do Linux iniciar. Escolha o pendrive, não o disco interno.

### Teclas de boot mais comuns

| Marca    | Tecla                |
| -------- | -------------------- |
| Dell     | `F12`                |
| HP       | `F9` / `Esc`         |
| Lenovo   | `F12`                |
| Acer     | `F12`                |
| ASUS     | `Esc` / `F8`         |
| Gigabyte | `F12`                |
| Samsung  | `F10` / `F2`         |
| Genérico | `Del` / `F2` / `Esc` |

Aperte a tecla assim que o logo da marca aparecer.

> [!tip] Menu temporário é mais seguro
> Você não precisa mudar a ordem permanente. Ligue o computador e pressione a tecla de **Boot Menu** indicada na tabela (no Dell, `F12`). Se a tecla não funcionar, tente pressioná-la repetidamente logo após ligar ou consulte a mensagem no rodapé da tela e o manual do modelo.

### O que aparece depois do F12

No Dell Vostro 5402, escolha **Removable Drive** ou o nome do pendrive. Em outros computadores, a mesma entrada pode aparecer como `USB Storage`, `UEFI: nome-do-pendrive` ou `USB HDD`.

![[Anexos/official-grub-efi.png]]

> [!success] Nesta tela do Mint
> Deixe **Start Linux Mint** destacado e pressione `Enter`. A opção **compatibility mode** é um plano B para tela preta ou vídeo incompatível. Essa tela inicia uma sessão live; ela ainda não instala nada.

## UEFI, Legacy e Secure Boot

Esses nomes descrevem o **modo como o firmware inicia o sistema**, não a edição do Mint:

| Situação do Windows                      | O que fazer ao iniciar o pendrive                                         |
| ---------------------------------------- | ------------------------------------------------------------------------- |
| Windows em UEFI                          | Escolha no menu uma entrada do pendrive que comece com `UEFI:`.           |
| Windows em Legacy/BIOS                   | Use a entrada Legacy/BIOS do pendrive e não altere o modo sem orientação. |
| Computador sem Windows, instalação limpa | Prefira UEFI quando o equipamento oferecer essa opção.                    |

Para dual boot, os dois sistemas devem usar o mesmo modo. O Linux Mint pode iniciar a ISO em EFI ou BIOS, mas misturar os modos costuma fazer um dos sistemas desaparecer do menu de boot.

**Secure Boot exige UEFI.** Em um Dell, ver `Legacy` e “boot seguro” ao mesmo tempo pode significar que o Secure Boot está desligado e que apenas `Legacy Option ROMs` está habilitado — os textos mudam conforme o modelo. Não troque Legacy/UEFI, Secure Boot ou AHCI por tentativa e erro: fotografe a configuração atual, faça backup e consulte o manual do modelo.

> [!note] Dell Vostro 5402
> Este modelo trabalha em **UEFI only**; Legacy não é suportado. Para ele, prepare o pendrive em GPT/UEFI e use `F12 → Removable Drive`. Se a entrada USB não aparecer, confira `F2 → Integrated Devices → USB Configuration → Enable USB Boot Support`.

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
