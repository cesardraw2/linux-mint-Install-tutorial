---
tags: [bdd, cenários, planejamento, linux-mint, instalação]
description: Cenários e tarefas que populam o TODO do guia.
---

# BDD — Cenários de instalação

Este arquivo é a fonte editorial do planejador. Cada bloco `Cenário` vira uma opção no guia web; cada item marcado com `[00]`, `[04]` etc. vira uma tarefa ligada à etapa correspondente. Edite aqui quando uma tarefa mudar — não é preciso alterar o código da interface.

## Cenário: clean-ssd

nome: Instalação limpa no SSD
resumo: Substituir o sistema atual e instalar o Mint somente no SSD interno.

**Dado** que os arquivos importantes foram copiados para outro local
**E** que o HD externo foi desconectado
**Quando** o aluno confirmar `Erase disk and install Linux Mint` no SSD correto
**Então** o Mint será instalado sozinho no SSD e o HD poderá voltar a ser usado para dados

- [ ] [00] Confirmar backup no HD externo e conferir alguns arquivos restaurados
- [ ] [00] Confirmar que o Windows antigo pode ser apagado
- [ ] [01] Baixar e verificar a ISO no computador funcionando
- [ ] [02] Criar o pendrive inicializável
- [ ] [03] Iniciar o pendrive no mesmo modo de boot do computador (UEFI ou Legacy)
- [ ] [04] Desconectar o HD externo e conferir modelo/tamanho do SSD
- [ ] [04] Selecionar `Erase disk` somente no SSD interno
- [ ] [05] Criar usuário e senha fortes
- [ ] [06] Instalar atualizações e verificar drivers
- [ ] [08] Formatar o HD externo somente depois de o Mint iniciar, se necessário

## Cenário: clean-ssd-with-external-backup

nome: SSD único + HD externo para backup
resumo: Instalar no SSD e manter o HD externo como cópia e armazenamento, sem dual boot.

**Dado** que o computador tem um SSD interno e um HD externo
**E** que o aluno não quer manter o Windows
**Quando** o SSD for confirmado como destino
**Então** o HD externo não será usado como disco do sistema

- [ ] [00] Copiar documentos, fotos e chaves para o HD externo
- [ ] [00] Abrir o HD externo e conferir se a cópia realmente funciona
- [ ] [00] Desconectar o HD externo antes da confirmação final
- [ ] [01] Baixar e verificar a ISO
- [ ] [02] Gravar o pendrive sem apenas copiar o arquivo ISO
- [ ] [03] Testar a sessão live e o reconhecimento do SSD
- [ ] [04] Escolher o SSD pelo modelo e tamanho; nunca pelo nome `sda` sozinho
- [ ] [04] Instalar o Mint no SSD com uma única raiz ext4 e swapfile automático
- [ ] [08] Depois da instalação, escolher ext4 (Linux) ou exFAT (Linux + Windows) para o HD externo

## Cenário: dual-boot-uefi

nome: Dual boot Windows + Mint em UEFI
resumo: Preservar o Windows no SSD e instalar o Mint no espaço não alocado.

**Dado** que o Windows inicia em UEFI
**E** que existe backup e espaço livre no SSD
**Quando** o instalador oferecer `Install Linux Mint alongside Windows`
**Então** o aluno revisará o resumo e manterá a partição NTFS do Windows

- [ ] [00] Fazer backup e salvar a chave de recuperação do BitLocker
- [ ] [00] Confirmar UEFI no `msinfo32` e Secure Boot atual
- [ ] [01] Baixar a ISO em um computador funcionando
- [ ] [02] Criar o pendrive
- [ ] [03] Iniciar a entrada `UEFI:` do pendrive
- [ ] [04] Reduzir o volume `C:` no Windows e deixar espaço não alocado
- [ ] [04] Escolher `alongside`; nunca `Erase disk`
- [ ] [09] Testar Windows Boot Manager e Linux Mint após o reinício

## Cenário: dual-boot-legacy

nome: Dual boot Windows + Mint em Legacy
resumo: Caso de compatibilidade para computadores antigos; não trocar Legacy por UEFI sem plano.

**Dado** que o Windows existente inicia em Legacy/BIOS
**E** que o modelo suporta inicialização Legacy
**Quando** o aluno preparar o pendrive no mesmo modo
**Então** ele manterá Legacy nos dois sistemas e terá uma recuperação pronta

- [ ] [00] Confirmar `Legacy` no `msinfo32` e consultar o manual do modelo
- [ ] [00] Não confundir `UEFI Boot Path Security` com `Boot List Option` ou `Secure Boot`
- [ ] [00] Fazer backup completo e não alterar o modo de boot “para testar”
- [ ] [02] Criar o pendrive e escolher a entrada Legacy/BIOS
- [ ] [03] Testar o Mint em modo live antes de instalar
- [ ] [04] Preservar partições do Windows e usar somente espaço livre
- [ ] [07] Saber como voltar ao Windows se o firmware ignorar o menu

## Cenário: format-external-drive

nome: Formatar HD externo pelo pendrive
resumo: Usar a sessão live para preparar um HD de dados; não instalar o Mint nele.

**Dado** que o HD externo pode ser apagado
**E** que há outra cópia do backup
**Quando** o aluno identificar o disco por modelo e capacidade no aplicativo Discos
**Então** ele formatará somente a partição ou o disco escolhido

- [ ] [00] Confirmar que o HD externo não é a única cópia dos arquivos
- [ ] [02] Criar o pendrive do Mint
- [ ] [03] Iniciar `Start Linux Mint` sem instalar
- [ ] [08] Identificar o HD externo pelo modelo e capacidade
- [ ] [08] Escolher ext4 para Linux ou exFAT para compartilhar com Windows
- [ ] [08] Desmontar antes de formatar e testar leitura/gravação depois

## Cenário: live-test-only

nome: Apenas testar o Mint
resumo: Conhecer hardware e interface sem instalar nem alterar discos.

**Dado** que o aluno ainda não decidiu o cenário
**Quando** ele iniciar `Start Linux Mint`
**Então** ele poderá testar Wi-Fi, vídeo, teclado e arquivos sem confirmar o instalador

- [ ] [00] Adiar qualquer formatação ou particionamento
- [ ] [01] Baixar e verificar a ISO
- [ ] [02] Criar o pendrive
- [ ] [03] Escolher `Start Linux Mint` e testar o hardware
- [ ] [07] Registrar problemas antes de decidir a instalação
