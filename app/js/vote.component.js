System.register(['@angular/core', './location-store.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, location_store_service_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (location_store_service_1_1) {
                location_store_service_1 = location_store_service_1_1;
            }],
        execute: function() {
            let VoteComponent = class VoteComponent {
                constructor(_locationsStore) {
                    this._locationsStore = _locationsStore;
                }
                ngOnInit() {
                    this.score = this.location.upVotes.length - this.location.downVotes.length;
                    this.upVoted = !this.location.upVotes.every((id) => id !== localStorage.getItem('userId'));
                    this.downVoted = !this.location.downVotes.every((id) => id !== localStorage.getItem('userId'));
                }
                upVote() {
                    this._locationsStore.upVote(this.location.id);
                }
                downVote() {
                    this._locationsStore.downVote(this.location.id);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "location", void 0);
            VoteComponent = __decorate([
                core_1.Component({
                    selector: 'vote',
                    templateUrl: 'app/vote.component.html',
                    directives: [],
                    styles: [".cursor-fix { cursor: default; }"]
                }), 
                __metadata('design:paramtypes', [location_store_service_1.LocationStoreService])
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    }
});

//# sourceMappingURL=vote.component.js.map
