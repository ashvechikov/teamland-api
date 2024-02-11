import { IEntity } from '../../../entity.interface';

export interface IBlog extends IEntity {
  published: Date;
  isDraft: boolean;
}
