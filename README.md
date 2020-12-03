# E-school
E-school is a Spring boot and Angular js based single page web application for dealing with the system of controlling students.

## 1. Installation
Open a command line in a folder which will contain a project.

Write ```git clone https://github.com/XANALI/e-school.git ``` command in command line to download a project from github. 

## 2. Run a project

### 2.1 Check project requirements.
Before running a project you have to check several tools which will help us to run a project.

#### 2.1.1 JDK
Run this commands in your command line
`java -version`
`javac -version`
If they showed their current versions jdk is installed correctly, else you have to download it from this link: https://www.oracle.com/java/technologies/javase-jdk8-downloads.html,
then install it. You can use: https://mkyong.com/java/how-to-set-java_home-on-windows-10/ to configure java and javac as system variables.

#### 2.1.2 Maven
Run this command in your command line
`mvn -version`
If it showed its current version maven is installed correctly, else you can download it using this link: https://www.baeldung.com/install-maven-on-windows-linux-mac

#### 2.1.3 Node js and Npm
Run this commands in your command line
`node --version`
`npm --version`
If they showed their current versions node js and npm are installed correctly, else you have to download it from this links: https://nodejs.org/en/download/

#### 2.1.4 Angular CLI
Run this command in your command line
`ng --version`
If it showed its current version angular cli is installed correctly, else you can install it using this command: `npm install -g @angular/cli`

### 2.2 Project running
Actually, now you can run your project. Open the command line in `%YOUR_FOLDER_PATH%/e-school` folder, then write this command `mvn spring-boot:run`.
Now we have started server running, next we have to our frontend angular project. For this you have to open a new command line in `%YOUR_FOLDER_PATH%/e-school/src/main/js/angularclient` folder. Then you have to write this command `ng serve --open`. Now you can write `localhost:4200` url in your browser. 

