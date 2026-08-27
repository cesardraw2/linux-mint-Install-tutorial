---
step: 10
web-id: glossary
nav-label: Glossário
status: não iniciado
tags: [linux-mint, glossário, conceitos]
---

# 10 — Glossário

Termos técnicos aparecem como links ao longo do guia. Passe o mouse para ver uma definição rápida ou clique para abrir esta explicação completa.

### UEFI

Firmware moderno que inicia o computador e substitui o BIOS tradicional. O Windows e o Mint precisam usar o mesmo modo de inicialização.

### Legacy / BIOS

Modo de inicialização antigo. Ainda funciona em alguns computadores, mas não deve ser misturado com UEFI em uma instalação existente.

### Secure Boot

Recurso do UEFI que verifica assinaturas antes de iniciar um sistema. Se houver uma violação, o Mint pode exigir uma configuração específica ou que o recurso seja desativado.

### BitLocker

Criptografia do Windows. Uma alteração de boot pode pedir uma chave de recuperação; salve essa chave antes de instalar outro sistema.

### ISO

Arquivo que contém uma cópia completa da mídia de instalação do Linux Mint. Ele deve ser gravado com uma ferramenta, não apenas copiado para o pendrive.

### Pendrive inicializável

Pendrive preparado para iniciar um computador antes do sistema instalado. A gravação apaga o conteúdo anterior do pendrive.

### ABNT2

Padrão brasileiro de teclado que normalmente tem a tecla `Ç` e posições próprias para acentos e símbolos.

### Sessão live

Modo temporário iniciado pelo pendrive. Permite testar o Mint e usar ferramentas como Discos sem instalar o sistema.

### EFI / ESP

Pequena partição FAT32 usada pelo UEFI para guardar os arquivos de inicialização. Em uma instalação existente, ela deve ser reutilizada sem formatar.

### GPT

Tabela moderna que organiza as partições de um disco. É a escolha habitual em computadores UEFI.

### Partição

Divisão lógica de um disco. Cada partição pode ter um sistema de arquivos e uma finalidade diferente.

### NTFS

Sistema de arquivos usado normalmente pelo Windows. Não formate a partição NTFS do Windows durante a instalação do Mint.

### ext4

Sistema de arquivos recomendado para as partições do Linux Mint.

### exFAT

Sistema de arquivos útil para um HD externo compartilhado entre Linux e Windows. Ele não guarda todas as permissões típicas do Linux.

### Swapfile

Arquivo usado como apoio quando a memória RAM fica cheia. O Mint pode criá-lo automaticamente, sem uma partição swap separada.

### GRUB

Carregador de inicialização que mostra o menu para escolher entre Linux Mint e Windows em um dual boot.

### Espaço não alocado

Área do disco que ainda não pertence a nenhuma partição. É o local seguro para o Mint ser criado ao lado do Windows, depois de um backup.

### Erase disk

Opção do instalador que apaga as partições e os dados do disco selecionado. Só use quando esse disco puder ser completamente apagado.

### Alongside

Opção do instalador que redimensiona o sistema existente e instala o Mint ao lado dele. O resumo da operação deve ser conferido antes da confirmação.

## Concluir etapa

- [ ] Termos importantes consultados
- [ ] Etapa 10 concluída

[[Início|← Início]]
