import { Component, Input , TemplateRef} from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, MatIconModule, MatButtonModule, NgTemplateOutlet ],
    standalone: true,
    selector: 'listPatterns',
    template: `
    <ng-container [ngSwitch]="el">
            <ng-container *ngSwitchCase="'li'">
                <li class="box__ctrl">
                    <div class="box__inner">
                    <!-- <ng-container *ngTemplateOutlet="button"></ng-container> -->
                    </div>
                    <!-- {{button}} -->
                </li>
            </ng-container>
            

            <ng-container *ngSwitchCase="'div'">
                <div class="box__ctrl">
                    <div class="box__inner">
                    <!-- <ng-container *ngTemplateOutlet="button"></ng-container> -->
                    </div>
                    <!-- {{button}} -->
                </div>
            </ng-container>
            
            <ng-container *ngSwitchDefault>
                <div class="box__ctrl">
                    <div class="box__inner">
                        <!-- <ng-content></ng-content> -->
                    </div>
                    <!-- {{button}} -->
                </div>
            </ng-container>

        </ng-container>
    `,
    styleUrls: ['./listpatterns.scss']
})
export class ListPatternsComponent {
    @Input() el!: string;
    @Input() title!: string;
    @Input() button!: TemplateRef<any>;
}
