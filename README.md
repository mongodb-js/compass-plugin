# khaos-compass-package

A Khaos template to create an internal Compass package.

## Usage

Create a new Compass package `<mypackage>` from the `compass` directory with:

```
khaos create mongodb-js/khaos-compass-package ./src/internal-packages/<mypackage>
```

## Install and create locally

You can also save the template locally and create new instances from
the saved version.

Save the template locally under the name "compass-package" with:

```
khaos install mongodb-js/khaos-compass-package compass-package
```

To instantiate new module from the local version, use

```
khaos create compass-package ./src/internal-packages/<mypackage>
```

## Template variables

The following template variables are required and prompted for upon creation:

- `name`: short name of the package, e.g. `query bar`, or `db stats`
- `scope`: the scope of the component. For collection level scope (e.g. a view
  on the collection level), use `Collection`, for global application scope, use
  `App`, etc.
- `description`: a one sentence description of the package.

## License

Apache 2
