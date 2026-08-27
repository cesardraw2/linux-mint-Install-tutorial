# language: pt
@epic("Guia Linux Mint")
@feature("#F001 - Planejamento por cenário")
Funcionalidade: Escolher um cenário de instalação
  Como aluno do guia Linux Mint
  Eu quero escolher meu objetivo antes de particionar
  Para receber somente as tarefas relevantes ao meu computador

  Regra: O disco do sistema e o disco de backup devem ser identificados antes de formatar

    @tag("@Aluno")
    @input("CenarioInstalacao:string")
    @output("TodoDoCenario:array")
    @id("FC_MINT_S01")
    Cenário: Montar TODO para instalação limpa no SSD
      Dado que o aluno escolheu o cenário "<cenario>"
      E confirmou que o backup está acessível em outro dispositivo
      Quando o planejador carregar as tarefas do cenário
      Então deve exibir a tarefa de confirmar o SSD pelo modelo e tamanho
      E deve exibir a tarefa de usar Erase disk somente no SSD

      Exemplos:
        | cenario      |
        | clean-ssd    |
        | clean-ssd-with-external-backup |

    @tag("@Aluno")
    @input("CenarioInstalacao:string")
    @output("TodoDoCenario:array")
    @id("FC_MINT_S02")
    Cenário: Montar TODO para dual boot UEFI
      Dado que o aluno escolheu o cenário "dual-boot-uefi"
      Quando o planejador carregar as tarefas do cenário
      Então deve exibir a tarefa de reduzir o volume do Windows
      E deve exibir a tarefa de escolher alongside
      Mas não deve recomendar Erase disk

    @tag("@Aluno")
    @input("CenarioInstalacao:string")
    @output("TodoDoCenario:array")
    @id("FC_MINT_S03")
    Cenário: Montar TODO para dual boot Legacy
      Dado que o aluno escolheu o cenário "dual-boot-legacy"
      Quando o planejador carregar as tarefas do cenário
      Então deve exibir a tarefa de confirmar Legacy no Windows
      E deve exibir a tarefa de não trocar o modo de boot sem recuperação

    @tag("@Aluno")
    @input("CenarioInstalacao:string")
    @output("TodoDoCenario:array")
    @id("FC_MINT_S04")
    Cenário: Montar TODO para formatar HD externo
      Dado que o aluno escolheu o cenário "format-external-drive"
      E confirmou que existe outra cópia do backup
      Quando o planejador carregar as tarefas do cenário
      Então deve exibir a tarefa de iniciar o Mint em modo live
      E deve exibir a tarefa de escolher ext4 ou exFAT conforme o uso

    @tag("@Aluno")
    @input("CenarioInstalacao:string")
    @output("TodoDoCenario:array")
    @id("FC_MINT_S05")
    Cenário: Montar TODO para apenas testar o Mint
      Dado que o aluno escolheu o cenário "live-test-only"
      Quando o planejador carregar as tarefas do cenário
      Então deve exibir a tarefa de iniciar Start Linux Mint
      E não deve exibir nenhuma tarefa de apagar ou formatar disco
