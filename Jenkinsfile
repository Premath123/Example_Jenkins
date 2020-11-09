pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Premath123/Example_Jenkins.git'
      }
    }
	
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
     
    stage('Run') {
      steps {
         bat 'npm start'
      }
    } 
    }      
  }
