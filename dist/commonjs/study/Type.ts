export function type(obj: Object): string {
    return {}.toString.call(obj).slice(8, -1).toLowerCase();
}
