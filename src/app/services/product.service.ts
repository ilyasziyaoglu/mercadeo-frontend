import { Injectable } from '@angular/core';
import {BaseService} from './base/base-service';
import {HttpService} from './base/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  private basePath = 'product';
  public products: any = [];

  constructor(
      httpService: HttpService,
  ) {
    super(httpService);
  }
  getBasePath(): string {
    return this.basePath;
  }

  filter(filter?, cb?): void {
    const pageReq = {
      filterDto: filter || {},
      page: 0,
      size: 50,
    };
    super.filter(pageReq, results => {
      if (cb) {
        cb(results.data || []);
      } else {
        this.products = results.data || [];
      }
    });
  }
}
