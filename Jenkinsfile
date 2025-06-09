pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        git 'https://github.com/muhamedrashif/fullstack-devops-project.git'
      }
    }

    stage('Build Backend') {
      steps {
        dir('backend') {
          sh 'npm install'
          # If you have tests, you can add: sh 'npm test'
        }
      }
    }

    stage('Build Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deployment step - add your deployment commands here'
      }
    }
  }
}

