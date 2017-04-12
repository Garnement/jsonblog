import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogServiceService {
    usersUrl: any;

  constructor(public http: Http) { }

  authorPostsUrl: string = 'https://jsonplaceholder.typicode.com/users/';

}
