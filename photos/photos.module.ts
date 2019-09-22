import { NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { filterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';


@NgModule({
    declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent, filterByDescription, LoadButtonComponent],
    imports: [ HttpClientModule, CommonModule ]
})

export class PhotosModule {}