import { Type } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { IRepository } from './repository.interface';
import { capitalize } from 'lodash';

type Constructor<I> = new (...args: any[]) => I;

export interface IBaseResolver<T> {
  readonly repository: IRepository<T>;
  getAll: () => Promise<T[] | null>;
  getById: (id: number) => Promise<T | null>;
  create: (entityType: T) => Promise<T | boolean>;
  update: (entityType: T) => Promise<T | boolean>;
  remove: (id: number) => Promise<boolean>;
}

export function BaseResolver<T, C, U>(
  entityType: Constructor<T>,
  createInputType: C,
  updateInputType: U,
): Type<IBaseResolver<T>> {
  @Resolver({ isAbstract: true })
  class BaseResolverHost implements IBaseResolver<T> {
    constructor(readonly repository: IRepository<T>) {}

    @Query(() => [entityType], {
      name: `get${capitalize(entityType.name)}s`,
      nullable: true,
    })
    getAll() {
      return this.repository.getAll();
    }

    @Query(() => entityType, {
      name: `get${capitalize(entityType.name)}`,
      nullable: true,
    })
    getById(@Args('id', { type: () => Int }) id: number) {
      return this.repository.get(id);
    }

    @Mutation(() => entityType, {
      name: `create${capitalize(entityType.name)}`,
    })
    create(
      @Args({
        type: () => createInputType,
        name: `create${capitalize(entityType.name)}Input`,
      })
      createInput: T,
    ): Promise<T | boolean> {
      return this.repository.save(createInput);
    }

    @Mutation(() => entityType, {
      name: `update${capitalize(entityType.name)}`,
    })
    update(
      @Args({
        type: () => updateInputType,
        name: `update${capitalize(entityType.name)}Input`,
      })
      updateInput: T,
    ) {
      return this.repository.update(updateInput);
    }

    @Mutation(() => entityType, {
      name: `remove${capitalize(entityType.name)}`,
    })
    remove(@Args('id', { type: () => Int }) id: number) {
      return this.repository.remove(id);
    }
  }

  return BaseResolverHost;
}
