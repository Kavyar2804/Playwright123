pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Smoke Test Execution') {
            steps {
                script {
                    def status = bat(
                        script: 'npx playwright test --grep "@smoke" --reporter=html || exit /b 0',
                        returnStatus: true
                    )
                    if (status != 0) {
                        echo "Smoke tests failed, continuing pipeline..."
                    }
                }
            }
        }

        stage('Regression Test Execution') {
            steps {
                bat 'npx playwright test datepicker --reporter=html || exit /b 0'
            }
        }
    }

    post {
        always {
            echo 'Generating HTML report...'

            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                alwaysLinkToLastBuild: true,
                keepAll: true,
                allowMissing: true,
                linkRelative: false
            ])
        }
    }
}
