import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxpipe'
})
export class UxpipePipe implements PipeTransform {

  transform(value:any) {
    return value + "...";
  }

}
