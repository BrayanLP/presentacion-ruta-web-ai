#!/bin/bash

# Script de instalación automatizada para Ubuntu 24.04
# Taller: Code-Server + Antigravity CLI

# Salir inmediatamente si un comando falla
set -e

echo "🚀 Iniciando la configuración del entorno para el Taller..."

echo "📦 1. Actualizando el sistema e instalando Node.js 20..."
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

echo "🛡️ 2. Configurando el Firewall (UFW)..."
# Abrir puerto para Code-Server
sudo ufw allow 8080/tcp
# Abrir puerto para nuestro proyecto práctico (Express)
sudo ufw allow 3000/tcp

echo "💻 3. Instalando Code-Server..."
curl -fsSL https://code-server.dev/install.sh | sh

echo "🤖 3.5. Instalando Antigravity CLI (agy)..."
# Instalación de agy vía script oficial
curl -fsSL https://antigravity.google/install-cli.sh | bash


echo "⚙️ 4. Configurando y arrancando Code-Server..."
# Habilitar e iniciar el servicio (genera el config.yaml automáticamente)
systemctl --user enable --now code-server

# Esperar unos segundos para asegurar que el archivo se ha creado
sleep 3

# Modificar el archivo de configuración para permitir conexiones externas (0.0.0.0)
sed -i 's/bind-addr: 127.0.0.1:8080/bind-addr: 0.0.0.0:8080/' ~/.config/code-server/config.yaml

# Reiniciar el servicio para aplicar la nueva IP
systemctl --user restart code-server

echo "=========================================================="
echo "✅ ¡Instalación completada con éxito!"
echo "🌐 Accede a tu Code-Server desde el navegador mediante:"
echo "   http://<IP_DE_ESTE_SERVIDOR>:8080"
echo ""
echo "🔑 Tu contraseña de acceso es:"
grep "password:" ~/.config/code-server/config.yaml | awk '{print $2}'
echo "=========================================================="
