#!/bin/bash
ssh -i ./deploy_key ubuntu@ec2-52-221-17-136.ap-southeast-1.compute.amazonaws.com
pwd
sudo apt-get update
cd /var/www/bhanukagamage.com/
sudo git fetch --all
sudo git reset --hard origin/master
ng build --prod --build-optimizer