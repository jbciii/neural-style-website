System.register(["angular2/core", 'angular2/http', './neural-style-data.model'], function(exports_1, context_1) {
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
    var core_1, http_1, neural_style_data_model_1;
    var NeuralStyleDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (neural_style_data_model_1_1) {
                neural_style_data_model_1 = neural_style_data_model_1_1;
            }],
        execute: function() {
            NeuralStyleDataService = (function () {
                function NeuralStyleDataService(_http) {
                    this._http = _http;
                    this.uploadedFiles = new neural_style_data_model_1.UploadedFiles;
                    this.filesUrl = [];
                    this._neuralStyleData = new neural_style_data_model_1.NeuralStyleDataModel();
                    this.getDefaultSetting();
                }
                NeuralStyleDataService.prototype.getImages2 = function (callback) {
                    var _this = this;
                    return this._http.get('/images/get')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.uploadedFiles.uploadedImages = data.filesUrl;
                        console.log(_this.filesUrl);
                        callback(data, _this.uploadedFiles);
                    });
                };
                NeuralStyleDataService.prototype.getImages = function () {
                    // alert("images/get");
                    return this._http.get('/images/get')
                        .map(function (res) { return res.json(); });
                    // Subscribe to the observable to get the parsed people object and attach it to the
                    // component
                    // .subscribe(data => 
                    // {
                    // 	this.filesUrl = data.filesUrl;
                    // 	console.log(this.filesUrl);			
                    // });
                };
                NeuralStyleDataService.prototype.getDefaultSetting = function () {
                    var _this = this;
                    return this._http.get('default.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this._neuralStyleData.defaultSetting = data;
                        _this._neuralStyleData.setFromDefault();
                    });
                };
                NeuralStyleDataService.prototype.getDefaultSetting2 = function () {
                    return this._http.get('default.json')
                        .map(function (res) { return res.json(); });
                };
                NeuralStyleDataService.prototype.getNeuralStyleData = function () {
                    return this._neuralStyleData;
                };
                NeuralStyleDataService.prototype.getNeuralStyleData2 = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.getDefaultSetting2().subscribe(function (data) {
                            _this._neuralStyleData.defaultSetting = data;
                            _this._neuralStyleData.setFromDefault();
                            resolve(_this._neuralStyleData);
                        });
                    });
                };
                NeuralStyleDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NeuralStyleDataService);
                return NeuralStyleDataService;
            }());
            exports_1("NeuralStyleDataService", NeuralStyleDataService);
        }
    }
});
//# sourceMappingURL=neural-style-data.service.js.map