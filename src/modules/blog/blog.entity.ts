import { IEntity } from '../../abstract/entity.interface';

export interface IBlog extends IEntity {
  published: Date;
  isDraft: boolean;
}
