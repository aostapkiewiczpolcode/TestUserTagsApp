import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from '../models';

export class InMemoryDataService implements InMemoryDbService {
 public createDb() {
     const users: User[] = [
         new User(1, 'Adam', '123456'),
         new User(1, 'test', '654321')
     ]
     return {users};
 }
}