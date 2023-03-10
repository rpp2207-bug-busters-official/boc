#!/bin/bash
sudo chmod -R 777 /home/ec2-user/boc
echo 'run after_install.sh: ' >> /home/ec2-user/boc/deploy.log

echo 'cd /home/ec2-user/nodejs-server-cicd' >> /home/ec2-user/boc/deploy.log
cd /home/ec2-user/boc >> /home/ec2-user/boc/deploy.log

echo 'npm install' >> /home/ec2-user/boc/deploy.log
sudo npm install >> /home/ec2-user/boc/deploy.log

