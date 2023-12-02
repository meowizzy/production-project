type Mods = Record<string, boolean | string>;
function classNames(cls: string, mods: Mods, additional: string[] = []): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(item => Boolean(item[1]))
            .map(item => item[0])

    ].join(" ");
}

export { classNames };