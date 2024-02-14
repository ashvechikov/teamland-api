export interface IRepository<T> {
  get(id: number): Promise<T>;
  save(input: T): Promise<T>;
  remove(id: number): Promise<boolean>;
  update(input: T): Promise<T>;
  getAll(): Promise<T[]>;
}

// TODO: https://github.com/nlynzaad/nestjs_graphql_generic_resolver/blob/main/src/base/base.resolver.ts
