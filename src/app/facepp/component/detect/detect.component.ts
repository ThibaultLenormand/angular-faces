import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DetectService } from '../../service/detect.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {
    @Input() url: string;
    apiResult;
    
    constructor(public detectService: DetectService) {
        
    }
    
    public getDetectInformation(url: string){
        this.detectService.getData(url).subscribe((data) => {
            this.apiResult = data;
        });
    }
    
    public displayResult(result: string){
        
    }

    ngOnInit() {
        
    }
}
