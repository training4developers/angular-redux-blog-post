import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Unsubscribe } from "redux";

import { AppStore } from "./services/app-store";

@Component({
    selector: "color-tool",
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
})
export class AppComponent implements OnInit, OnDestroy {

    public colorForm = new FormGroup({
        newColor: new FormControl("", Validators.required),
    });

    public colors: string[];

    private storeUnsubscribe: Unsubscribe;

    constructor(private appStore: AppStore) { }

    public ngOnInit() {
        this.storeUnsubscribe = this.appStore.getStore().subscribe(() => {
            this.colors = this.appStore.getStore().getState().colors;
        });

        this.colors = this.appStore.getStore().getState().colors;
    }

    public ngOnDestroy() {
        this.storeUnsubscribe();
    }

    public addColor() {
        this.appStore.addColor(this.colorForm.value.newColor);

        this.colorForm.reset();
    }

    public removeColor(color: string) {
        this.appStore.removeColor(color);
    }

}
