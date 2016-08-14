/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/main/ambient/angular/index.d.ts" />

export const Component = function(options: ng.IComponentOptions): Function {
  return (controller: Function) => {
    return angular.extend(options, {controller});
  };
};