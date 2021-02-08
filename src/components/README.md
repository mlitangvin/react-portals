# Components

> To better identify a the difference between a JSX vs regular javascript, all JSX component file can have the extension of .jsx

Each Component should have its own folder and all the child component should resides on the same component example in the below folder structure

```
.
+-- src
|		+-- components
|		|		+-- comp1
|		|		|	+--	_tests__
|		|		|		|	+-- parent.test.js
|		|		|		|	+-- child1.test.js
|		|		|		|	+-- child2.test.js
|		|		|	+-- index.js
|		|		|	+-- parent.jsx
|		|		|	+--	child1.jsx
|		|		|	+--	child2.jsx
```

## Unit Test

Each component should have their own unit test as part of the component. Snapshots can be used as the unit test verification for component.

[Enzyme](<https://airbnb.io/enzyme/) can be used for unit testing jsx files.
