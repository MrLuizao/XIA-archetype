import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listSearch'
})
export class ListSearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const foundListItem = [];
    
    for( const item of value){

      if(item.name.indexOf(args) > -1){

        console.log('entra aqui cada vez que escribo');

        foundListItem.push(item);
      }     
      
    }

    return foundListItem;
  }

}
