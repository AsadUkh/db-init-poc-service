pipeline {
  environment {
    imageRepo = "asadullahkhan/mongo"
    registryCredential = 'docker'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git([url: 'https://github.com/AsadUkh/edd-poc-service.git', branch: 'master'])
      }
    }
    stage('Building Docker image') {
      steps{
        script {
       dockerImage = docker.build("$imageRepo:${env.BUILD_ID}")
        }
      }
    }
    stage('Push Image to Docker Hub') {
      steps{
        script {
            dockerImage.push()

        }
      }
    }