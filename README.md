# Authentic Drilling
Authentic Drilling specialize in difficult access geo-technical, environmental, exploration and water well drilling services.
Specialized in difficult projects, significant attention to detail is paramount. Leveraging our management team's extensive experience, we are able to foresee potential obstacles, control costs and provide alternative options
## Aggregation Service
Aggregation operations process multiple documents and return computed results.
## Requirements

* Node 16
* Git
## Pre-requisites
- Install [Node.js](https://nodejs.org/en/)


## Getting started
- Clone the repository
```
git clone  git@gitlab.relinns.in:authentic-drilling/microservices/aggregation.git
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run the project
```
npm run watch
```
 ## Branches Nomenclature
- Production Branch - ` master `
- Staging Branch - ` staging `
- Local Branch Setup -
```
- git checkout staging
- git checkout -b <your_name>-<task_name>-<task_zoho_id>
```
## Steps to raise Merge Request (MR)
- Navigate to [gitlab](https://gitlab.relinns.in/authentic-drilling/microservices/aggregation)
- Click on Merge Requests tab and create New Merge Request.
- Select source and target branch (staging).
- Fill the description, assign the reviewer, assigner & select tags according to your task.
- Finally , resolve the conflicts before saving it.
## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains all the source code                               |
| **src/configuration**    | Application configuration including environment-specific configs
| **src/controllers**      | Controllers define functions to serve various express routes.
| **src/loaders**          | Contains app and database loader.
| **src/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **src/routes**           | Contain all express routes, separated by module/area of application
| **src/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **src/services**         | Modules
| package.json             | Contains npm dependencies as well as [build scripts]   |
