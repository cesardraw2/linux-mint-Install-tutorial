---
step: 2
status: não iniciado
tags: [linux-mint, pendrive, rufus, etcher, usb]
---

# 02 — Gravar no pendrive

Não basta copiar o arquivo `.iso` para o pendrive. É preciso gravar a imagem com Rufus no Windows ou Etcher/USB Image Writer no Linux.

## No Windows — Rufus

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

## No Linux — Etcher ou USB Image Writer

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
