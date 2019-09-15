import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';


@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform{
    transform(value, searchString){
        if (!value) return [];
    if (!searchString) return  value;
    if (searchString == '' || searchString == null) return [];
    return value.filter(obj => obj.payload.val().name.toLowerCase().indexOf(searchString) > -1 );
    }
}