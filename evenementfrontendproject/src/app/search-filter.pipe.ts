import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  //ellle va lancer un filtre sur l objet liste
  transform(list: any[], filterText: string): any {
    // Check if filterText is provided
    if (!filterText || !list) return list;

    // Normalize the filterText to lowercase
    filterText = filterText.toLowerCase();

    return list.filter(item =>
      // Check if item.nomEvenement exists before applying .toLowerCase()
      item.nomEvenement && item.nomEvenement.toLowerCase().includes(filterText)
    );
  }
}
