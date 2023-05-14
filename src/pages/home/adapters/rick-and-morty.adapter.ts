import { APIUser, User } from '@/models';

export const RickAndMortyAdapter = (apiUser: APIUser): User => ({
  id: apiUser.id,
  name: apiUser.name,
});
