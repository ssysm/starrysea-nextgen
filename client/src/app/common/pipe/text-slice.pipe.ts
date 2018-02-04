import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlice'
})
export class TextSlicePipe implements PipeTransform {

  transform(value: String, args?: number): String {
     if(value.length <= args){
       return value
     }else{
       return value.slice(0,args)+"..."
     }
  }

}
