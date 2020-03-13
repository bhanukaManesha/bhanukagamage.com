#!/bin/bash
pwd
npm install --save-dev @angular/cli@latest
sudo apt-get update
cd /var/www/bhanukagamage.com/
sudo git fetch --all
sudo git reset --hard origin/master
sudo ng build --prod --build-optimizer
