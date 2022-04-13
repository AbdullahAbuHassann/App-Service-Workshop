# App-Service-Workshop

This is a hands on App Service Workshop targeted for Apps & Infra SSPs to show them the value of PaaS. It is challenging to appreciate the functionalities of App Service without getting hands on.

Make your feedback heard by raising it under the Issues tab. 

## Getting Started
Give us your feedback by raising it under the Issues tab. 

### Prerequisites

- Install [node.js LTS](https://nodejs.org/en/) locally on your laptop.
- Install [Visual Studio Code](https://code.visualstudio.com/download).
- Install [Azure App Service Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) on Visual Studio Code.
- Install [Git](https://git-scm.com/downloads).

### Running your first application
1. Create a folder in your Desktop called app-service-demo
2. On Visual Studio Code, click File, Open Folder, and choose the folder your created in step 1.
3. On Visual Studio Code, click Terminal at the top and choose new Terminal.
4. Paste `git clone https://github.com/AbdullahAbuHassann/App-Service-Workshop.git` on the terminal and click enter.
5. Paste `cd App-Service-Workshop` and click enter.
6. Paste `npm install` and click enter
7. Paste `node app.js` and click enter. You should see a message saying: "Server is listening on Port 8080".
8. Paste localhost:8080 on your favorite browser and click enter. You should have your first running application!

## Creating your App Service Resource
1. On the portal, create your first App Service Resource. Make sure the runtime stack is Node 16 LTS and keep it Linux. Use the Basic B1 Plan.
2. Once you create the resource, click Browse at the top and you should see your first website running. But now we want the website we created in the steps above to be running on App Service Instead!
3. Go back to Visual Studio Code, and on the left hand side, there is an Azure icon, click it, sign in to Azure and then once you're signed in, click on Deploy, then choose the folder from the drop-down App-Service-Demo, then choose the subscription, and finally, choose the app service resource you created in step 1. 

![image](https://user-images.githubusercontent.com/84739483/163235196-30e1c1bf-c86e-4772-9190-0347424cd773.png)

4. Once the app is deployed, cick on browse again on the App Service Resource and you should see the application running on App Service! Look at how easy it is to have an application fully deployed on Azure App Service. 

## Explore the below features with your Specialist
1. Deployment Slots
2. Identity
3. Autoscale

