#!/bin/bash
sudo apt-get update
cd /var/www/bhanukagamage.com/
sudo git fetch --all
sudo git reset --hard origin/master
ng build --prod --build-optimizer