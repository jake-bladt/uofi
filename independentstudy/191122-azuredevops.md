# A weekend of Azure DevOps


## Notes

* Work items have a link type "tested by"
* Build automation can be triggered from any repository (github, etc.) Can builds in one repo be triggered by events in another?
* Commitizen
* Add the developer as a reviewer for test PRs.
* Automate build number insertion in web site.
* Build definition can be kept in source code.
* Export existing build to YAML
* ADO multiphase pipelines allow for an integrated CI/CD pipeline, eliminating the need for separate build and deploy pipelines, which require a hand-off between them.
* If ADO lists "builds" instead of "pipelines," I'll need to activate pipelines before I can work in YAML.
* Self-hosted agents are required in order to deploy to on-premise servers.
* YAML runs need to be authorized to work with the agent pools.
* Windows Server 2019 on a self-hosted agent does support both Windows and Linux containers
* Agent can run on Windows Server Core, not Windows Nanoserver
* Host container is mcr.microsoft.com/windows/servercore:ltsc2019. Find Microsoft documentation for the PS1 file to set it up as an Azure Devops build host.
* I need more PowerShell for this.
* Windows containers use an entirely different isolation method from Linux ones.
