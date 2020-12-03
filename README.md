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
Now we have started server running, next we have to run our frontend angular project. For this you have to open a new command line in `%YOUR_FOLDER_PATH%/e-school/src/main/js/angularclient` folder. Then you have to write this command `npm install` to install project packages, and after that write command `ng serve --open`. Now you can go to the `localhost:4200` url in your browser.

## 3. Application interface

### 3.1 Login Page
When you first time go to the `localhost:4200` you will be redirected to `localhost:4200/login` page, because you are not logged in. You can login using `username: username, password: password` credentials.

### 3.2 Students Page
When you login to the system you will be redirected to `localhost:4200/students` page, where you can see a table of all users which stored in database. In table you have a `ACTION` column where you can delete a student by selecting it's delete link

### 3.3 Add User Page
In navigation bar you can press `Add User` link and go to the `localhost:4200/add-student` page, where you can fill student's attributes and save it by pressing `Add Student` button.

### 3.4 Logout
You can logout from the system by pressing `Logout` link in the navigation bar, and redirected to the login page. You will not be able to see `localhost:4200/students` and `localhost:4200/add-student` pages while you are not logged in.




