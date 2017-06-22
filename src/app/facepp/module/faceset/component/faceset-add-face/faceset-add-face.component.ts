import { Component, OnInit, Input } from '@angular/core';
import { FacesetAddFaceService } from '../../service/faceset-add-face.service';

@Component({
    selector: 'app-faceset-add-face',
    templateUrl: './faceset-add-face.component.html',
    styleUrls: ['./faceset-add-face.component.css']
})
export class FacesetAddFaceComponent implements OnInit {
    @Input() facesetToken: string;
    @Input() faceTokens: string;
    apiResult;
    
    constructor(public facesetAddFaceService: FacesetAddFaceService){
        
    }

    public faceSetAddFaceInformation(url: string){
        this.facesetAddFaceService.getData(url).subscribe((data) => {
            this.apiResult = data;
        });
    }

    ngOnInit() {
    }

}
