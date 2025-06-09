pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/muhamedrashif/fullstack-devops-project.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm test'  // if you have tests
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
                echo 'Deploying application...'
                // Add your deployment commands here, e.g., Docker build/push or copying files
            }
        }
    }
}
