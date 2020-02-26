# fitnesse-bootstrap-4
[Bootstrap 4](https://getbootstrap.com/)  theme for [FitNesse](http://fitnesse.org/)

## Quick Start
1. Download release file: [fitnesse-bootstrap-4-1.0.0.jar](https://getbootstrap.com/)
2. Put `fitnesse-bootstrap-4-1.0.0.jar` in the same direcotry of `fitnesse-standalone.jar`
3. Run the command:
  ```
  java -DTheme=bootstrap-4 -cp fitnesse-bootstrap-4-1.0.0.jar;fitnesse-standalone.jar fitnesseMain.FitNesseMain
  ```
4. Connect to FitNesse: http://localhost/

## Build
The fitnesse-bootstrap-4 build can be executed via Gradle and Maven. Gradle and Maven 
wrappers are distributed with code.
### Build with Maven
Execute ```mvn package``` (or ```mvnw package``` for Maven wrapper)
### Build with Gradle
Execute ```gradle build``` (or ```gradlew build``` for Gradle wrapper)
### Production Build
A production profile is available for building a lightweight archive. To perform a 
production build, just add `-Pproduction` at the end of the build command.

E.g.: ```mvnw package -Pproduction``` - ```gradlew package -Pproduction``` 

*Note: size of the production build is the outcome of `.scss` and `.map` files deletion.*

## Releases

