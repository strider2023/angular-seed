function UserItem() {

  this.name = "";
  this.description = "";

  this.init = function(data) {
    this.name = data.name;
    this.description = data.description;
  }
}
