import { Component, OnInit, Input } from '@angular/core';
import { DetectService } from '../../service/detect.service';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent implements OnInit {
    @Input() url: string;
    
    constructor(public detectService: DetectService) {
        
    }
    
    send(url: string){
        this.detectService.getData(url).subscribe((data) => {
            console.log(data);
        });
    }

    ngOnInit() {
        
    }
}
