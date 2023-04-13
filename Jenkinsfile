pipeline{

agent any

stages
{
stage('git clean'){

steps{

sh 'rm -r*'
sh 'rm -r ../../../../www/html/*'

}
}

{
stage('git clone'){

steps{

sh ' git clone https://github.com/pavan731/bmshow.git -b master'

}
}

stage ('deploy') {
    steps {
        sh ' mv /var/lib/jenkins/workspace/mvn_web/awsweb/*  /var/www/html'
        
    }
}
}
}
