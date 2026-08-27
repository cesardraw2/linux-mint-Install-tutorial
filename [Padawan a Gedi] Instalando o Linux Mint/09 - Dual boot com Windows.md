---
step: 9
web-id: dual-boot
nav-label: Dual boot com Windows
status: não iniciado
tags: [linux-mint, dual-boot, windows, uefi, secure-boot, bitlocker]
---

# 09 — Dual boot com Windows

Dual boot é ter **Windows e Linux Mint no mesmo computador**. Ao ligar, um menu pergunta qual sistema iniciar. Esta trilha preserva o Windows; a trilha de instalação limpa, em contraste, apaga o disco escolhido.

> [!warning] Leia antes de clicar
> O instalador pode redimensionar o Windows, mas nenhum botão substitui backup e conferência. Se uma tela mostrar um disco diferente do esperado, pare e fotografe a tela antes de continuar.

## 1. Prepare-se no computador que já funciona

Faça esta preparação no Windows que você deseja manter. O mesmo computador pode baixar a ISO e criar o pendrive, desde que ainda esteja funcionando.

- Faça backup dos documentos, fotos e chaves de acesso em outro disco ou nuvem.
- Crie ou localize a mídia de recuperação do Windows e confirme que sabe usá-la.
- Se o Windows usa **BitLocker**, salve a chave de recuperação em sua conta Microsoft ou em papel. Suspenda a proteção antes da instalação e só a retome depois de testar os dois sistemas.
- Conecte o notebook à tomada. Não interrompa uma redução de partição.
- Tenha pelo menos **50 GB de espaço não alocado** para o Mint; 100 GB deixa mais folga para atualizações e programas.

## 2. Descubra UEFI ou Legacy

No Windows, pressione `Win + R`, digite `msinfo32` e leia **Modo da BIOS**.

- Se aparecer **UEFI**, inicialize o pendrive pela entrada que começa com `UEFI:`.
- Se aparecer **Legacy**, use a entrada Legacy/BIOS, se ela existir.

Windows e Mint precisam usar o **mesmo modo**. Não troque Legacy por UEFI apenas para experimentar: em alguns computadores o Windows deixa de iniciar. Em Dells, a troca também pode tornar a instalação atual incompatível; confira o manual do modelo antes de mudar Boot Mode, SATA Operation ou Secure Boot.

> [!note] Secure Boot
> Secure Boot pertence ao UEFI. Deixe-o ligado na primeira tentativa. Se o Mint mostrar uma violação de Secure Boot, anote a configuração atual, desligue-o apenas no firmware e tente novamente. Não altere outras opções ao mesmo tempo.

## 3. Desligue o que mantém o Windows “adormecido”

No Windows, abra **Painel de Controle → Opções de Energia → Escolher a função dos botões de energia** e desmarque **Ligar inicialização rápida**. Depois, desligue o Windows completamente (não apenas “Suspender”).

Se o BitLocker estiver ativo, abra **Gerenciar BitLocker**, salve a chave e escolha **Suspender proteção**. O nome dos botões pode variar por edição do Windows; não apague a criptografia.

## 4. Crie espaço sem formatá-lo

1. No Windows, pressione `Win + R`, digite `diskmgmt.msc` e abra **Gerenciamento de Disco**.
2. Localize o volume `C:` pelo tamanho e pela etiqueta. Clique nele com o botão direito e escolha **Diminuir volume**.
3. Informe o espaço a liberar e confirme. O resultado deve aparecer como **Não alocado**.
4. Não crie um volume novo, não formate o espaço e não mexa nas partições **EFI**, **Recovery**, **MSR** ou no volume reservado pelo fabricante.

> [!danger] Se o espaço não aparecer
> Não force a redução nem apague partições pequenas. Faça backup, desfragmente o Windows se ele recomendar e procure ajuda específica para o modelo.

## 5. Inicie o pendrive no modo certo

Use [[02 - Gravar no pendrive|o pendrive já criado]] e reinicie o computador. Abra o menu de boot (`F12`, `Esc`, `F9` ou a tecla do fabricante) e escolha a entrada com o mesmo modo encontrado no passo 2. Se aparecerem duas entradas para o mesmo pendrive, não escolha uma ao acaso.

No menu do Mint, selecione **Start Linux Mint**. Você estará numa sessão temporária; nada foi instalado ainda. Teste teclado, Wi-Fi e o reconhecimento do disco antes de abrir o instalador.

## 6. Escolha “alongside” e revise o resumo

No instalador, avance até **Installation type**:

1. Escolha **Install Linux Mint alongside Windows** quando essa opção aparecer.
2. Mova o divisor para dar espaço ao Mint, respeitando o espaço não alocado criado no Windows.
3. Leia o resumo: ele deve manter uma partição NTFS do Windows e criar partições Linux somente no espaço livre.
4. Confirme o disco pelo tamanho e pelo modelo. Só então clique em **Install Now**.

> [!danger] Nunca use Erase disk
> `Erase disk and install Linux Mint` remove o Windows e os dados do disco selecionado. Se a opção **alongside** não aparecer ou o resumo não estiver claro, cancele e peça orientação; não improvise em **Something else**.

## 7. Opção manual (somente se você souber identificar partições)

Em **Something else**, use exclusivamente o espaço não alocado. Em UEFI, reutilize a partição EFI existente montando-a em `/boot/efi` **sem formatar**. Crie a raiz `/` em ext4; o Mint pode criar um `swapfile` automaticamente. Não formate NTFS, EFI, MSR ou Recovery. Em Legacy, não crie uma nova EFI.

O local do carregador de inicialização deve ser o disco inteiro que já inicia o Windows, não uma partição isolada. Se você não consegue apontar esse disco com segurança, volte e use a opção **alongside**.

## 8. Primeiro reinício

Quando o instalador pedir, remova o pendrive e reinicie. O menu deve mostrar **Linux Mint** e **Windows Boot Manager**. Teste os dois, um de cada vez, antes de instalar programas ou apagar qualquer backup.

- Se entrar direto no Windows, abra o firmware e coloque `ubuntu`/`Linux Mint` antes do Windows Boot Manager na ordem de boot.
- Se o Windows pedir a chave do BitLocker, use a chave salva; não formate nada.
- Se o Mint não iniciar ou aparecer uma mensagem de Secure Boot, volte à sessão live e consulte [[07 - Problemas comuns|Problemas comuns]].

## 9. Depois que os dois sistemas funcionarem

- Retome o BitLocker no Windows e guarde a chave atualizada.
- Faça uma captura do menu de boot e anote qual tecla abre o firmware.
- Mantenha o backup até confirmar alguns reinícios em cada sistema.
- Para remover um sistema no futuro, não apague partições “por tamanho”: faça um plano de recuperação do carregador primeiro.

## Checklist do dual boot

- [ ] Backup e recuperação do Windows confirmados
- [ ] Chave do BitLocker salva e proteção suspensa
- [ ] Modo UEFI ou Legacy identificado
- [ ] Inicialização rápida desativada
- [ ] Espaço não alocado criado no volume correto
- [ ] Opção **alongside** e resumo do instalador conferidos
- [ ] Windows Boot Manager e Linux Mint testados após o reinício
- [ ] Etapa 09 concluída

[[08 - Formatar um HD pelo pendrive|← Anterior]] · [[Início]] · [[03 - Boot e instalação|Voltar ao boot →]]
