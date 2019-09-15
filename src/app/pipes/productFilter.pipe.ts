import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';


@Pipe({
    name: "productFilter"
})
export class ProductFilterPipe implements PipeTransform{
    transform(value, category){
    if (!value) return [];
    if (!category) return  value;
    if (category == '' || category == null) return [];
    return value.filter(obj => obj.payload.val().category.toLowerCase().indexOf(category) > -1 );
    }
}