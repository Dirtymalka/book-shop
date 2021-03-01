import {Component, OnInit, Optional} from '@angular/core';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {ConfigOptionsService} from '../../../core/services/config-options.service';
import {ConstantsService} from '../../../core/services/constants.service';
import {GeneratorFactory, GeneratorService} from '../../../core/services/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    {
      provide: ConstantsService,
      useValue: new ConstantsService().value
    },
    // {
    //   provide: GeneratorService,
    //   useFactory: GeneratorFactory,
    //   deps: [GeneratorService]
    // }
  ]
})
export class AboutComponent implements OnInit {
   a: any;
   constant: any;
   generate: string;
  constructor(@Optional() private localStorageService: LocalStorageService,
              private configOptionsService: ConfigOptionsService,
              private constantsService: ConstantsService,
              // private generatorService: GeneratorService
              ) { }

  ngOnInit(): void {
    this.localStorageService.setItemToLocalStorage('a', 123);
    this.a = this.localStorageService.getItemFromLocalStorage('a');

    this.constant = this.constantsService.value;

    // this.generate = this.generatorService.getString(5);
  }

}
