function User() {

  this.name = "";
  this.description = "";
  this.image = "";

  this.init = function(data) {
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
  }
}
