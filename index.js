module.exports = class {
    #value;
    get value() {
        return this.#value;
    }

    #pkg;
    get pkg() {
        return this.#pkg;
    }

    #vpkg;
    get vpkg() {
        return this.#vpkg;
    }

    #version;
    get version() {
        return this.#version;
    }

    #subpath;
    get subpath() {
        return this.#subpath;
    }

    #error;
    get error() {
        return this.#error;
    }

    get valid() {
        return !this.#error;
    }

    constructor(value) {
        this.#value = value;
        if (!value.length) {
            this.#error = 'Specifier parameter is not defined';
            return;
        }

        const split = value.split('/');
        const scope = split[0].startsWith('@') ? split.shift() : void 0;
        if (!split.length) {
            this.#error = 'The specifier cannot be only the scope, it is an incomplete package name';
            return;
        }

        const [name, version] = split.shift().split('@');

        this.#pkg = scope ? `${scope}/${name}` : name;
        this.#version = version;
        this.#vpkg = version ? `${this.#pkg}@${version}` : void 0;
        this.#subpath = split.length ? `./${split.join('/')}` : '.';
    }

    toJSON() {
        const {error, valid, value, pkg, vpkg, version, subpath} = this;
        return {error, valid, value, pkg, vpkg, version, subpath};
    }
}
