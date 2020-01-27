#!/bin/bash
pwd
sudo apt-get update
cd /var/www/bhanukagamage.com/
sudo git fetch --all
sudo git reset --hard origin/master
sudo ng build --prod --build-optimizer
