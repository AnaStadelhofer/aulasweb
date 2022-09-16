# Configurar PowerShell com Administrador

- dism.exe /online /enable-feature/featurename:Microsoft-Windows-Subsystem-Linux/all /norestart 
- dism.exe /online /enable-feature/featurename:VirtualMachinePlatform /all /norestart 
- Reinicie o Windows se for necessário 

# Instalar a wsl

1. wsl --install
1. wsl --set-default-version 2 

# Instalar dependencias

1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
1. nvm install --lts 
1. npm install -g npm@latest 

1. yarn init ou npm init
1. yarn add -D webpack webpack-cli @babel/core @babel/cli @babel/preset-env html-webpack-plugin
1. yarn add -D babel-loader
1. yarn add -D sass-loader css-loader style-loader
1. npm install node-sass --save

1. yarn add -D webpack webpack-cli @babel/core @babel/cli @babel/preset-env babel-loader style-loader css-loader sass-loader node-sass html-webpack-plugin 

