pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
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
            script {
                if (fileExists('package.json')) {
                    echo '📦 Installing frontend dependencies...'
                    sh 'npm install --legacy-peer-deps'
                } else {
                    error "❌ package.json not found in frontend!"
                }
            }
        }
    }
}

        stage('Deploy') {
  steps {
    sh '''
      set -e
      echo "🛑 Killing existing backend (if any)..."
      pkill node || true

      echo "🟢 Starting backend with nohup..."
      sleep 2
      nohup node backend/index.js > backend.log 2>&1 &

      # ✅ Corrected: Bash-style comment
      ps aux | grep node | grep -v grep
    '''
  }
}

    }

    post {
        always {
            echo "🧼 Cleaning up workspace..."
            cleanWs()
        }
    }
}

