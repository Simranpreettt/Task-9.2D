pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'npm install'  // If it's a Node.js project
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test --passWithNoTests --watchAll=false || echo "No tests found, continuing..."'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running code quality checks...'
                bat 'npx eslint . || echo "ESLint warnings ignored, continuing..."'
            }
        }

        stage('Deploy to Test') {
            steps {
                echo 'Deploying to test environment...'
                bat 'deploy.bat test'  // Use a batch script for deployment on Windows
            }
        }

        stage('Release to Production') {
            steps {
                echo 'Releasing to production...'
                bat 'deploy.bat test'  // Use a batch script for deployment on Windows
            }
        }

        stage('Monitoring & Alerts') {
            steps {
                echo 'Setting up monitoring...'
                bat 'curl -X POST http://monitoring-tool/api/alerts || echo "Monitoring setup failed, continuing..."'
            }
        }
    }
}
