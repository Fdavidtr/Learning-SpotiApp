import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[], size:string = 'medium'): string {
    if(!images || !images.length) {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
    }
    if (size === 'smallest') {
      return images.sort((a,b) => a.height - b.height)[0].url;
    }
    return (images.find(e=>e.height>200 && e.height<600)||images[0]).url;
  }

}
