pipeline {
  agent any

  environment {}

  stages {
    stage('run') {
      steps {
        // This step trigger the test
        echo 'Run Cypress Pipeline Test'
        sh 'npm install'
        sh 'npm run cypress:run'
      }
    }
  }
}
