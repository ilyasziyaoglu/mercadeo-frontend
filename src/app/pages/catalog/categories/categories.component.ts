import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'ngx-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  private categories: any = [];

  constructor(
      private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.categoryService.getAll(categories => {
      const firstLevels = categories.filter(c => c.level === 1);
      firstLevels.forEach(flevel => {
        flevel.children = categories.filter(c => c.parentId === flevel.id);
        flevel.children.forEach(slevel => {
          slevel.children = categories.filter(c => c.parentId === slevel.id);
        });
      });
      this.categories = firstLevels;
      console.log(this.categories);
    });
  }

}
