import { Type } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

export function BaseResolver<T extends Type<unknown>>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    @Query((type) => classRef, { name: `get${classRef.name}ById` })
    async getById(): Promise<T> {
      return;
    }

    @Query((type) => [classRef], { name: `getAll${classRef.name}s` })
    async getAll(): Promise<T[]> {
      return [];
    }
  }

  return BaseResolverHost;
}
