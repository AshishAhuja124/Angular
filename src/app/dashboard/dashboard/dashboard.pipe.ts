import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class DashboardPipe implements PipeTransform {
    transform(value: string, name: string): string {
        if (name.toLowerCase() == "male")
            return "Mr." + value;
        else
            return "Miss." + value;
    }
}