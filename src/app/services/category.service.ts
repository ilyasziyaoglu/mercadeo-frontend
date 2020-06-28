import {Injectable} from '@angular/core';
import {BaseService} from './base/base-service';
import {HttpMethod, HttpService} from './base/http.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryService extends BaseService {
    private basePath = 'category';

    constructor(
        httpService: HttpService,
    ) {
        super(httpService);
    }

    getBasePath(): string {
        return this.basePath;
    }

    getCategoryTree(cb) {
        this.getHttpService().doRequest(HttpMethod.GET, `${this.basePath}${this.GUEST}/tree`, '', cb);
    }
}
