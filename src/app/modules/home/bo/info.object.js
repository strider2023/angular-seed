function InfoObject() {

  this.title = "";
  this.description = "";
  this.image = "";
  
  //OOPS Style Constructor. Replace with custom constructor.
  this.init = function() {
    this.title = "Angular 1.x Seed App";
    this.description = "An angular seed app with angular material integration. Also code structure for a proper angular project.";
    this.image = "assets/images/angular.jpg";
  }
}
