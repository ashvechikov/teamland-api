export interface IRepository<T> {
  get(id: number): Promise<T>;
  delete(id: number): Promise<void>;
  save(input: T): Promise<void>;
  update(input: T): Promise<T>;
}
