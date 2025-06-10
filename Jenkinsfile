pipeline {
    agent any

    options {
        timestamps()  // Adds timestamps to each step
    }

    stages {
        stage('Checkout Code') {
            stage('Checkout Code') {
    steps {
        echo "📥 Force-checking out the main branch..."
        checkout([$class: 'GitSCM',
            branches: [[name: 'main']],
            userRemoteConfigs: [[url: 'https://github.com/muhamedrashif/fullstack-devops-project.git']]
        ])
    }
}


        stage('Build Backend') {
            steps {
                dir('backend') {
                    echo "📦 Installing backend dependencies..."
                    sh 'npm install --legacy-peer-deps'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    echo "📦 Installing frontend dependencies..."
                    sh 'npm install --legacy-peer-deps'

                    echo "🔨 Building frontend..."
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Deploying application..."

                sh '''
                set -e

                echo "🛑 Killing existing backend (if any)..."
                pkill node || true

                echo "🟢 Starting backend with nohup..."
                nohup node backend/index.js > backend.log 2>&1 &
                sleep 2
                ps aux | grep node  // Check if backend started successfully

                echo "🧹 Cleaning old frontend build..."
                sudo rm -rf /var/www/html/*

                echo "📁 Copying new frontend build..."
                sudo cp -r frontend/build/* /var/www/html/

                echo "✅ Deployment complete."
                '''
            }
        }
    }

    post {
        always {
            echo "🧼 Cleaning up workspace..."
            cleanWs()  // Clean Jenkins workspace after build
        }
    }
}

