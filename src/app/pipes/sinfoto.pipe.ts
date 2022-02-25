import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  
  transform(images: any[]): string {

    
  
  if (!images) {
    console.log('!images');
    return 'assets/img/noimage.png';
  }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
