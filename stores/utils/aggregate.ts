export function group<T, U extends PropertyKey, F extends (arg: T, index: number, list: T[]) => U>(arr: T[], func: F): Record<U, T[]> {
  let r = {} as Record<U, T[]>
  for (let i = 0; i < arr.length; i++) {
    let t = func(arr[i], i, arr)
    r[t] = r[t] ?? []
    r[t].push(arr[i])
  }
  return r
}
