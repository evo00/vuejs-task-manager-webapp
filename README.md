## VueJS Task Manager Web App

VueJS Task Manager Web App using JSON API specs

http://jsonapi.org/format/

## Quick start

``` bash
## install dependencies
npm install

## serve with hot reload at localhost:8080
npm run dev

## build for production with minification
npm run build

## run unit tests
npm run unit
npm run tdd

## run e2e tests
npm run e2e

## run all tests
npm test
```

## Project goals:

So teh goal of this project is to use JavaScript frameworks only for their benefits, to write all other code as framework agnostic, and to separate framework specific code from framework agnostic code, which should:

 - allow us to easily locate and reuse the parts of our projects that are reusable.
 - allow us to easily locate and upgrade the parts of our projects that are framework specific.
 - allow us to, in our framework agnostic code, to use whatever coding practises best suite our needs, rather than whatever coding practisises our framework encourages or enforces. For example, I find functional programming is more suitable (in terms of stability, maintainability and testability) when writing application logic, such as utilities and helpers than Object Oriented Programming. And conversely I find Object Oriented Programming more suitable for writing parts of the application's data layer ie. models.

## Project directives:

#### Use a JavaScript framework only for:
1) wiring up the view layer of the application.
2) managing user interaction.
3) managing SPA (Single Page Application) routing.

#### Keep any framework agnostic code (including styles) separate to framework specific code

## Optional project directives:

These are not essential in achieving the outlined goal of this project.

##### Separate the codebase for each layer of the application:
 - View Layer (this is where our framework specific code will live. Test if necessary, possibly only with e2e tests)
 - Business/Logic Layer (this will consist of only pure functions grouped by responsibility, so no OOP here. 100% unit test coverage will be maintained for this layer)
 - Data Layer (this is where our models and data services will live. Test as necessary)
 - State Management (this is where our state will be managed, for this project we will use Redux. Test as necessary)

##### Framework specific code practises
 - Components must not mutate application state
 - Components must update view in response to changes emitted by state manager
 - Components must not interact directly with data & logic layers (can this work?)
 - Components must be either:
   - smart: the component will listen to the state manager and update the view in response to changes
   - dumb: the component will not interact with state manager at all, it only emit events and fire callbacks so that parent/other components can interact with state manager.
