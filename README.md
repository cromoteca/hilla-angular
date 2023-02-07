# Hilla ❤️ Angular

This [Hilla](https://hilla.dev) application uses Angular as frontend instead of Lit or React.

## What's included

This application is a replica of the default Hilla "Hello World" view, showing a text field and a button. When clicking on it, Hilla calls a server endpoint and then show the response in a notification. The interface uses Vaadin Web Components.

## How to try

As usual, clone the repository and run `mvn` or the Maven wrapper included. It will open your browser automatically.

## Known bugs

- Component CSS don't work: CSS files are parsed as JS/TS files during execution, generating errors;
- unit tests are also parsed when running the application, generating errors due to missing dependencies;
- not really a bug, but for two-way data binding to work with Vaadin Web Components, [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor)s will be needed to pair property getters and setters between them
