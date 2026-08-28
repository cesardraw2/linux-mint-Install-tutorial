---
step: 7
web-id: problems
nav-label: Problemas comuns
status: não iniciado
tags: [linux-mint, diagnóstico, boot, uefi, legacy, dual-boot]
---

# 07 — Problemas comuns

Use esta nota **somente depois de identificar o sintoma**. Não altere várias opções ao mesmo tempo: uma mudança por vez facilita voltar atrás.

## O pendrive não aparece

1. Desligue completamente o computador.
2. Conecte o pendrive diretamente em outra porta USB.
3. Abra o menu de boot pela tecla da marca.
4. Procure uma entrada com o nome do pendrive.
5. Se houver duas entradas, escolha `UEFI: nome-do-pendrive` quando o Windows estiver em UEFI.

> [!danger] Não troque UEFI e Legacy por tentativa
> Se o Windows funciona em Legacy, não mude para UEFI apenas para fazer o pendrive aparecer. Se a configuração do firmware não estiver clara, fotografe a tela e confirme o modelo do computador antes de continuar.

## A tela ficou preta

No menu do Mint, tente **Compatibility mode** uma única vez. Se ainda não funcionar, desligue, retire o pendrive e pesquise o modelo da placa de vídeo ou do notebook. Não instale até conseguir testar a sessão live.

## O computador voltou para o Windows

Isso normalmente significa que o computador iniciou pelo disco interno, não pelo pendrive. Abra o menu de boot novamente e selecione o USB. Em dual boot, confira também se os dois sistemas usam o mesmo modo UEFI ou Legacy.

## Erro “Impossível instalar o GRUB” ou “não foi possível encontrar a pasta EFI”

Esse erro aparece quando o instalador foi iniciado em **UEFI**, mas não existe uma partição EFI configurada para ele. No Dell Vostro 5402, o modo Legacy não é suportado; portanto, corrija a tabela em vez de trocar o firmware:

1. Volte à sessão live e abra novamente o instalador.
2. Escolha **Something else / Algo mais** e selecione o SSD interno pelo modelo e tamanho — não o pendrive (`/dev/sdb`).
3. Se o SSD puder ser apagado, use **New Partition Table…** e confirme.
4. No espaço livre, crie uma EFI de 300–512 MB em FAT32, com a flag `boot/esp`, e defina o ponto de montagem `/boot/efi`.
5. Crie `/` e `/home` em ext4 e escolha o SSD inteiro em **Device for boot loader installation**.
6. Confira a tabela uma última vez e tente instalar novamente.

Se a EFI já existir, selecione-a, use **Alterar…**, escolha **EFI System Partition** ou `/boot/efi` e **não a formate** — exceto quando ela foi criada agora durante a instalação limpa.

> [!danger] Não repita a instalação sem corrigir a EFI
> Reiniciar o instalador sem configurar `/boot/efi` produzirá o mesmo erro. Nunca aplique essa correção no HD externo.

## O Windows desapareceu do menu

Não formate nada. Inicie a sessão live do Mint, faça backup dos arquivos importantes e consulte a documentação oficial de multi-boot antes de reinstalar o carregador de inicialização.

## Concluir etapa

- [ ] Identifiquei o sintoma
- [ ] Fiz uma alteração por vez
- [ ] Parei quando a configuração do firmware ficou incerta
- [ ] Etapa 07 concluída

[[06 - Ajustes no primeiro dia|← Anterior]] · [[Início|Início]]
