---
step: 2
web-id: usb
nav-label: Gravar o pendrive
status: não iniciado
tags: [linux-mint, pendrive, rufus, etcher, usb]
---

# 02 — Gravar no pendrive

Não basta copiar o arquivo `.iso` para o pendrive. É preciso gravar a imagem com Rufus no Windows ou Etcher/USB Image Writer no Linux.

## Escolha uma das duas formas

Você vai criar **um pendrive inicializável do Linux Mint**. O resultado é o mesmo; escolha a ferramenta de acordo com o sistema que você está usando agora:

- **Está no Windows:** use o **Rufus**.
- **Está no Linux:** use o **Etcher** ou o **USB Image Writer**.

Não faça as duas opções. Siga apenas a sessão correspondente ao seu computador.

## Se você for usar Windows para gravar o pendrive — Rufus

Se você estiver usando Linux, [[#Se você for usar Linux para gravar o pendrive — Etcher ou USB Image Writer|clique aqui para ir à sessão Linux]].

1. Baixe o Rufus somente de [rufus.ie](https://rufus.ie/).
2. Abra o Rufus e escolha o pendrive em **Device**.
3. Em **Boot selection**, clique **SELECT** e escolha a ISO do Mint.
4. Deixe **Partition scheme** e **Target system** no padrão sugerido.
5. Clique **START** e confirme que o pendrive pode ser apagado.

![[Anexos/site-rufus.png]]

> [!success] Onde clicar
> Download → `rufus-x.x.exe`

![[Anexos/wiki-rufus.png]]

> [!success] Onde clicar
> SELECT → arquivo `.iso` → START

Se o Rufus perguntar entre ISO mode e DD mode, ISO mode costuma bastar para o Mint.

## Se você for usar Linux para gravar o pendrive — Etcher ou USB Image Writer

Se você estiver usando Windows, [[#Se você for usar Windows para gravar o pendrive — Rufus|clique aqui para voltar à sessão Windows e Rufus]].

1. No Mint: botão direito na ISO → **Make Bootable USB Stick**.
2. Em outras distros: baixe Balena Etcher por AppImage ou Flatpak.
3. **Select image** → ISO; **Select drive** → pendrive; **Flash**.

![[Anexos/official-etcher.png]]

![[Anexos/official-mintstick.png]]

> [!question] O pendrive sumiu no Windows depois de gravar?
> Normal. A partição de boot do Mint não é NTFS. Não formate novamente — ele está pronto para o boot.

## Concluir etapa

- [ ] ISO gravada no pendrive
- [ ] Pendrive removido com segurança
- [ ] Etapa 02 concluída

[[01 - Obter a imagem ISO|← Anterior]] · [[Início]] · [[03 - Boot e instalação|Próxima →]]
