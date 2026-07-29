import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideCalculatorServiceProvider } from "./providers/app-providers";
import { App } from './app';
//import { OtherService } from './services/other.service';
import { describe, it, beforeEach, expect } from "vitest";

describe(
    'App Component Tests',
    () => {

        beforeEach(
            async () => {
                await TestBed.configureTestingModule({
                    imports: [App],
                    providers: [
                        // OtherService,
                        provideCalculatorServiceProvider()
                    ]
                }).compileComponents()
            }
        );

        it("app component displays -> Welcome to services -> through H2 element",
            async () => {            
                let fixture: ComponentFixture<App> = TestBed.createComponent(App)
                await fixture.whenStable();
                
                const htmlPart = fixture.nativeElement
                const h2Element: HTMLElement = htmlPart.querySelector('h2')

                const app: App = fixture.componentInstance;
                expect(h2Element.textContent).toEqual(app.title())

                //expect(app.title()).toEqual('Welcome to services')
            }
        )

        it("app component title signal has the value -> Welcome to services",
            () => {
                let fixture: ComponentFixture<App> = TestBed.createComponent(App)
                const app: App = fixture.componentInstance;
                expect(app.title()).toEqual('Welcome to services')
            }
        )
    }
);
