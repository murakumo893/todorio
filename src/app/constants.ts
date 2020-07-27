export namespace CONSTANTS {
  export const ROUTERS = {
    TOP: '/top',
    TASKS: '/tasks',
    [Symbol.iterator]: function* () {
        let properties = Object.keys(this);
        for (let i of properties) {
            yield [i, this[i]];
        }
    }  
  } as const;
}