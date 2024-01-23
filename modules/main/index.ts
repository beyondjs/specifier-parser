// Interface defining the structure of the package information returned by toJSON()
interface PackageInfo {
	error?: string; // Error message if any error occurs
	valid: boolean; // Indicates whether the package specifier is valid
	value: string; // Original input value
	pkg: string; // Package name with scope if present
	vpkg?: string; // Full package name with version if version is specified
	version?: string; // Version of the package, if specified
	subpath: string; // Subpath within the package
}

// PackageSpecifier class to parse and validate package specifiers
export /*bundle*/ class PackageSpecifier implements PackageInfo {
	// Original package specifier value
	#value: string;
	public get value(): string {
		return this.#value;
	}

	// Package name, including scope if provided
	#pkg: string;
	public get pkg(): string {
		return this.#pkg;
	}

	// Full package string with version
	#vpkg?: string;
	public get vpkg(): string | undefined {
		return this.#vpkg;
	}

	// Package version if specified
	#version?: string;
	public get version(): string | undefined {
		return this.#version;
	}

	// Subpath within the package
	#subpath: string;
	public get subpath(): string {
		return this.#subpath;
	}

	// Complete specifier combining pkg and subpath
	#specifier: string;
	public get specifier(): string {
		return this.#specifier;
	}

	// Error message if the specifier is invalid
	#error?: string;
	public get error(): string | undefined {
		return this.#error;
	}

	// Boolean property to indicate if the specifier is valid (no error)
	public get valid(): boolean {
		return !this.#error;
	}

	// Constructor to parse and validate the package specifier
	constructor(value: string) {
		this.#value = value;
		// Validate the input value for basic requirements
		if (!value.length) {
			this.#error = 'Specifier parameter is not defined';
			return;
		}

		// Split the value to analyze its components (scope, name, version, subpath)
		const split = value.split('/');
		const scope = split[0].startsWith('@') ? split.shift() : undefined;
		if (!split.length) {
			this.#error = 'The specifier cannot be only the scope, it is an incomplete package name';
			return;
		}

		// Extract package name and version
		const [name, version] = split.shift()!.split('@');

		// Assemble the package name, including scope if present
		this.#pkg = scope ? `${scope}/${name}` : name;
		this.#version = version;
		this.#vpkg = version ? `${this.#pkg}@${version}` : undefined;
		this.#subpath = split.length ? `./${split.join('/')}` : '.';
		this.#specifier = this.#pkg + (this.#subpath === '.' ? '' : this.#subpath.slice(1));
	}

	// Method to serialize the class instance to a plain object
	public toJSON(): PackageInfo {
		const { error, valid, value, pkg, vpkg, version, subpath } = this;
		return { error, valid, value, pkg, vpkg, version, subpath };
	}
}
