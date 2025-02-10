pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Simranpreettt/Task-9.2D.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install' // Use 'bat' instead of 'sh' for Windows
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat 'npm run deploy'
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed! Check logs for errors.'
        }
        success {
            echo 'Pipeline completed successfully.'
        }
    }
}
