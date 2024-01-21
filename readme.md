# @beyond-js/specifier-parser

`@beyond-js/specifier-parser` is a TypeScript package developed for internal use by the BeyondJS framework, a universal
and modular TypeScript-first framework that emphasizes modularity and efficient bundling of modules, akin to what
Skypack or JSPM offer. This package provides robust functionality for parsing and validating module specifiers, crucial
for managing module references within the BeyondJS ecosystem and beyond.

A module specifier is a string that identifies a module within a project or as an external dependency, encapsulating
details such as the package name, version, scope, and subpaths. `@beyond-js/specifier-parser` simplifies handling these
specifiers, offering an intuitive API for extracting and validating their components.

## Features

-   Parses module specifiers into their constituent components: package name, version, scope, and subpaths.
-   Validates the correctness of module specifiers, ensuring they meet the standards required by BeyondJS and other
    module bundlers.
-   Allows serialization of parsed specifiers back into their original string format.
-   Provides clear error messages for invalid specifiers to aid in troubleshooting and correction.

## Installation

Install `@beyond-js/specifier-parser` using npm or yarn:

```bash
npm install @beyond-js/specifier-parser
```

or

```bash
yarn add @beyond-js/specifier-parser
```

## Usage

Here is how you can use `@beyond-js/specifier-parser` within your BeyondJS projects or any JavaScript/TypeScript module:

```typescript
import { PackageSpecifier } from '@beyond-js/specifier-parser/main';

const specifier = new PackageSpecifier('@scope/package-name@1.0.0/subpath');

console.log(`Package: ${specifier.pkg}`); // Outputs: @scope/package-name
console.log(`Version: ${specifier.version}`); // Outputs: 1.0.0
console.log(`Subpath: ${specifier.subpath}`); // Outputs: ./subpath
console.log(`Valid: ${specifier.valid}`); // Outputs: true
```

## API Reference

### `PackageSpecifier`

The primary class exported by `@beyond-js/specifier-parser/main`, designed for parsing and validating module specifiers.

#### Constructor

-   **`constructor(value: string)`**: Initializes a new instance with the given module specifier string.

#### Properties

-   **`value`**: The original module specifier string.
-   **`pkg`**: Package name, including scope if provided.
-   **`vpkg`**: Full package string with version, if specified.
-   **`version`**: The specified version of the package, if any.
-   **`subpath`**: The subpath within the package.
-   **`specifier`**: The complete specifier combining the package name and subpath.
-   **`error`**: An error message if the specifier is deemed invalid; otherwise, undefined.
-   **`valid`**: A boolean indicating the validity of the specifier.

#### Methods

-   **`toJSON()`**: Serializes the class instance to a plain object, detailing the parsed components and the validity of
    the module specifier.

## BeyondJS Framework

`@beyond-js/specifier-parser` is tailored for the BeyondJS framework, enhancing its module handling capabilities.
Developers using or considering BeyondJS for their projects are encouraged to explore its functionalities further.
BeyondJS is available on npm as the `beyond` package. As a modular framework, BeyondJS facilitates the bundling of
modules in a manner similar to Skypack or JSPM, optimizing development and deployment workflows.

## Contributing

Contributions to `@beyond-js/specifier-parser` are warmly welcomed. Whether you're fixing a bug, proposing new features,
or improving documentation, your help is appreciated. Please follow the standard GitHub fork-and-pull request workflow
to submit your contributions.

## License

`@beyond-js/specifier-parser` is licensed under the MIT License. See the LICENSE file in the source repository for more
details.
