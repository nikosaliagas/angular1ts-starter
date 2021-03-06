import {
    Story, StoryService
}
from "./../story/StoryService";
export class DashboardCtrl {

    public title: string = "Bienvenue !";
    public stories: Story[] = [];

    // @ngInject
    constructor(private toastr: Toastr, private storyService: StoryService) {
        toastr.success("Salute!", "Toastr fun! :)");

        storyService.getAll().then((datas) => {
            this.stories = datas
        });
    }
}
