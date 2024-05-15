import { Component } from '@angular/core';
import { faker } from "@faker-js/faker";

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {

  showModal: boolean = false;
  articles = [
    {title: faker.animal.lion(),
      content: faker.lorem.paragraphs({min:2, max:4})
    },
    {title: faker.animal.rabbit(),
      content: faker.lorem.paragraphs({min:2, max:4})
    },
    {title: faker.animal.bear(),
      content: faker.lorem.paragraphs({min:2, max:4})
    },
    {title: faker.animal.insect(),
      content: faker.lorem.paragraphs({min:2, max:4})
    }
  ]
  
  onClick(){
    this.showModal = !this.showModal;
    console.log(this.showModal)
  }

}
