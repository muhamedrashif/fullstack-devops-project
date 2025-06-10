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
          // If you have tests, you can add: sh 'npm test'
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
    sh '''
    // Kill running backend if exists
    pkill node || true

    // Start backend
    nohup node backend/index.js > backend.log 2>&1 &

    // Clear old frontend build and copy new one
    sudo rm -rf /var/www/html/*
    sudo cp -r frontend/build/* /var/www/html/
    '''
  }
}

  }
}

