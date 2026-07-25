### Practice to deploy mern app in vm using CI/CD

## steps to deploy to vm directly using github actions

- create a cd.yml file in .github/workflows/cd.yml
- write the steps using the appleboy githubactions
- create a vm using ed22519 algorithm not rsa (appleboy action is not work on rsa)
- manually install node in vm using nvm
- install pm2 using node `npm i -g pm2`
- clone the repo
- run `npm install or npm ci`
- run `npx prisma generate `
- create .env file and add db url
- run `npx prisma migrate deploy`
- run the app using pm2
- run ` pm2 start dist/index.js --name app`

## steps to deploy to vm using docker
