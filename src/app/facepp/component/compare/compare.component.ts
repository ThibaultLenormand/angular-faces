import { Component, OnInit, Input } from '@angular/core';
import { CompareService } from '../../service/compare.service';

@Component({
    selector: 'app-compare',
    templateUrl: './compare.component.html',
    styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
    @Input() url1: string;
    @Input() url2: string;
    apiResult;
    
    constructor(public compareService: CompareService){
        
    }

    public getCompareInformation(url: string){
        this.compareService.getData(url).subscribe((data) => {
            this.apiResult = data;
        });
    }
    
    ngOnInit() {
    }

}
