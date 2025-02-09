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
                bat 'npm test --passWithNoTests --watchAll=false'  // Adjust for your testing framework
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Running code quality checks...'
                bat 'eslint . || true'  // Allow ESLint warnings without failing the pipeline
            }
        }

        stage('Deploy to Test') {
            steps {
                echo 'Deploying to test environment...'
                sh './deploy.sh test'  // Ensure deploy.sh is executable
            }
        }

        stage('Release to Production') {
            steps {
                echo 'Releasing to production...'
                sh './deploy.sh prod'  // Ensure deploy.sh is executable
            }
        }

        stage('Monitoring & Alerts') {
            steps {
                echo 'Setting up monitoring...'
                sh 'curl -X POST http://monitoring-tool/api/alerts || true'  // Ensure failure doesn’t stop pipeline
            }
        }
    }
}
