#!/bin/bash
sudo chmod -R 777 /home/ec2-user/boc

echo 'run application_start.sh: ' >> /home/ec2-user/boc/deploy.log

echo 'pm2 restart nodejs-express-app' >> /home/ec2-user/boc/deploy.log

sudo pm2 restart BOC_DEPLOY >> /home/ec2-user/boc/deploy.log

cd /home/ec2-user/boc

echo 'running build' >> /home/ec2-user/boc/deploy.log

npm run build >> /home/ec2-user/boc/deploy.log
