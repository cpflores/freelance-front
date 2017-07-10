import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfasdf asdfasdfasdf',
      file_url: 'http://google.com',
      updated_at: '06/21/17',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasdfasdf',
      file_url: 'http://google.com',
      updated_at: '06/21/17',
      image_url: 'https://c1.staticflickr.com/3/2842/33161286816_5550668958_b.jpg'
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfasdf asdfasdfasdf',
      file_url: 'http://google.com',
      updated_at: '06/21/17',
      image_url: 'https://c1.staticflickr.com/4/3939/33067431515_4b19aed1e9_b.jpg'
    }
  ]
}
