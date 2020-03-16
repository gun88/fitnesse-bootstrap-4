# fitnesse-bootstrap-4

[Bootstrap 4](https://getbootstrap.com/)  theme for [FitNesse](http://fitnesse.org/) - [![Maven Central](https://img.shields.io/maven-central/v/com.github.gun88/fitnesse-bootstrap-4.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:%22com.github.gun88%22%20AND%20a:%22fitnesse-bootstrap-4%22)

## Quick Start
1. Download release file: [fitnesse-bootstrap-4-1.1.0.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/download/v1.1.0/fitnesse-bootstrap-4-1.1.0.jar)
2. Put `fitnesse-bootstrap-4-1.1.0.jar` in the `plugins` directory (or add it to the classpath)
3. Run FitNesse

## Table of Contents

- [Quick Start](#quick-start)
- [Build](#build)
  - [Gradle](#gradle)
  - [Maven](#maven)
- [Running](#running)
  - [Standard Mode](#standard-mode)
  - [Classpath Mode](#classpath-mode)
- [Releases](#releases)

## Build
The fitnesse-bootstrap-4 build can be executed via Gradle and Maven. Gradle and Maven 
wrappers are distributed with code.

Produced build will be a jar named `fitnesse-bootstrap-4-x.y.z.jar`, available under `target` directory for both Maven and Gradle mode.

*Note: build version number instead of `x.y.z`*

### Gradle
Execute `gradle build` (or `gradlew build` for Gradle wrapper)
### Maven
Execute `mvn package` (or `mvnw package` for Maven wrapper)

## Running
To run FitNesse with Bootstrap 4 theme, `fitnesse-bootstrap-4-x.y.z.jar` must be available in the plugins 
directory or in the java classpath.

#### Warnings
1. If multiple theme plugins are available in the plugins directory (or in the classpath), another theme 
could override Bootstrap 4 theme.
2. If theme name different from `bootstrap-4` is provided via [configuration file](http://fitnesse.org/FitNesse.UserGuide.AdministeringFitNesse.ConfigurationFile) 
(or VM option `-DTheme=...`), the Bootstrap 4 them won't be loaded.

### Standard mode
Place `fitnesse-bootstrap-4-x.y.z.jar` into plugins directory and run/restart FitNesse.

### Classpath mode
Supposing that `/path/to/fitnesse-bootstrap-4-x.y.z.jar` is the path to our theme, `/path/to/fitnesse-standalone.jar` is 
the path to FitNesse and we want to provide theme name via VM option `-DTheme=bootstrap-4`, the following command can be 
executed:

Unix-based systems
```
java -DTheme=bootstrap-4 -cp /path/to/fitnesse-bootstrap-4-x.y.z.jar:/path/to/fitnesse-standalone.jar fitnesseMain.FitNesseMain
```
Windows
```
java -DTheme=bootstrap-4 -cp /path/to/fitnesse-bootstrap-4-x.y.z.jar;/path/to/fitnesse-standalone.jar fitnesseMain.FitNesseMain
```

## Releases
### v1.1.0 (Theme as a plugin)
 - [fitnesse-bootstrap-4-1.1.0.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/download/v1.1.0/fitnesse-bootstrap-4-1.1.0.jar)

### v1.0.1 (Leading slash bug fixed)
 - [fitnesse-bootstrap-4-1.0.1.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/download/v1.1.0/fitnesse-bootstrap-4-1.0.1.jar)
 - [fitnesse-bootstrap-4-production-1.0.1.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/download/v1.1.0/fitnesse-bootstrap-4-production-1.0.1.jar)

### v1.0.0
 - [fitnesse-bootstrap-4-1.0.0.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/download/v1.0.0/fitnesse-bootstrap-4-1.0.0.jar)
 - [fitnesse-bootstrap-4-production-1.0.0.jar](https://github.com/gun88/fitnesse-bootstrap-4/releases/download/v1.0.0/fitnesse-bootstrap-4-production-1.0.0.jar)
 
 
