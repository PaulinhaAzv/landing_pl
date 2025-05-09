#!/usr/bin/env bash

# Mostrar a estrutura do diretório atual
echo "Estrutura do diretório atual:"
ls -la

# Mostrar o diretório de trabalho atual
echo "Diretório de trabalho atual:"
pwd

# Copiar package.json para o diretório src se necessário
if [ ! -f "/opt/render/project/src/package.json" ]; then
    echo "Copiando package.json para /opt/render/project/src/"
    cp package.json /opt/render/project/src/
fi

# Instalar dependências e fazer build
cd /opt/render/project/src
npm install
npm run build 