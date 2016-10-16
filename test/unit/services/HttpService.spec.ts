import {
    HttpService
}
from "./../../../src/services/HttpService";
import {
    EndpointService
}
from "./../../../src/services/EndpointService";
import IProvideService = angular.auto.IProvideService;
import IQService = angular.IQService;
import IDeferred = angular.IDeferred;

describe("httpService: HttpService", () => {

    let httpService: HttpService;
    let endpointService: any;
    let $http: any;
    let q: IQService;
    let deferredHttpLoader: IDeferred < any > ;

    beforeEach(module("app"));
    beforeEach(module("app.contact"));

    beforeEach(module(($provide: IProvideService) => {
        endpointService = sinon.createStubInstance(EndpointService);
        $http = {
            get: sinon.stub()
        };
        $provide.value("endpointService", endpointService);
        $provide.value("$http", $http);
    }));

    beforeEach(inject((_httpService_: HttpService, $q: IQService) => {
        httpService = _httpService_;
        q = $q;
    }));

    beforeEach(() => {
        deferredHttpLoader = q.defer();
        $http.get.returns(deferredHttpLoader.promise);
    });

    describe("obtenir", () => {
        it("appel get", () => {
            // given
            const moduleName: string = "my/module";
            endpointService.getUrl.returns(moduleName);

            // when
            httpService.obtenir({});

            // then
            $http.get.should.have.been.calledWithExactly(moduleName, {
                params: {}
            });
        });
    });

});
