# fitnesse-bootstrap-4
[Bootstrap 4](https://getbootstrap.com/)  theme for [FitNesse](http://fitnesse.org/)

## Quick Start
1. Download release file: [fitnesse-bootstrap-4-1.0.0.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/latest/download/fitnesse-bootstrap-4-1.0.0.jar)
2. Put `fitnesse-bootstrap-4-1.0.0.jar` in the same direcotry of `fitnesse-standalone.jar`
3. Run the command:
  ```
  java -DTheme=bootstrap-4 -cp fitnesse-bootstrap-4-1.0.0.jar;fitnesse-standalone.jar fitnesseMain.FitNesseMain
  ```
4. Connect to FitNesse: http://localhost/

## Table of Contents

- [Quick Start](#quick-start)
- [Build](#build)
  - [Gradle](#gradle)
  - [Maven](#maven)
  - [Production](#production)
- [Running Command](#running-command)
- [Releases](#releases)

## Build
The fitnesse-bootstrap-4 build can be executed via Gradle and Maven. Gradle and Maven 
wrappers are distributed with code.
### Gradle
Execute `gradle build` (or `gradlew build` for Gradle wrapper)
### Maven
Execute `mvn package` (or `mvnw package` for Maven wrapper)
### Production
A production profile is available for building a lightweight archive. To perform a 
production build, just add `-Pproduction` at the end of the build command.

E.g.: `gradlew build -Pproduction` - `mvnw package -Pproduction`

*Note: size of the production build is the outcome of `.scss` and `.map` files deletion.*

### Running Command
Two configuration are needed to run FitNesse with `fitnesse-bootstrap-4` theme:
1. The `fitnesse-bootstrap-4-1.0.0.jar` must be available in the java classpath
2. The theme name (defined via the property with key `Theme`) must be: `bootstrap-4`

*Note: theme name can be provided via VM option, environment variable and configuration 
file. [Read More...](http://fitnesse.org/FitNesse.UserGuide.AdministeringFitNesse.ConfigurationFile)*

Supposing that `/path/to/fitnesse-bootstrap-4-1.0.0.jar` is the path to our theme, `/path/to/fitnesse-standalone.jar` is the path to FitNesse and we want to provide theme name via VM option `-DTheme=bootstrap-4`, the following command can be executed:
```
java -DTheme=bootstrap-4 -cp /path/to/fitnesse-bootstrap-4-1.0.0.jar;/path/to/fitnesse-standalone.jar fitnesseMain.FitNesseMain
```

## Releases
### v1.0.0
 - [fitnesse-bootstrap-4-1.0.0.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/latest/download/fitnesse-bootstrap-4-1.0.0.jar)
 - [fitnesse-bootstrap-production-4-1.0.0.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/latest/download/fitnesse-bootstrap-4-production-1.0.0.jar)
