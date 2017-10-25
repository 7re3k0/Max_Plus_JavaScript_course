function Dog (breed, size, age, color) {
                this.breed = breed;
                this.size  = size;
                this.age   = age;
                this.color = color;
                this.Eat = function() {
                    console.log(this.name + " започна да яде.");
                };
                this.Sleep = function() {
                    console.log(this.name + " заспа.");
                };
                this.Sit = function() {
                    console.log(this.name + " седна!");
                };
                this.Run = function() {
                    console.log(this.name + " се затича като вихър!");
                };

            };

var mastif = new Dog('Neapolitan Mastiff', 'Large', 5, 'Black'),
maltese    = new Dog('Maltese','Small', 2,'White'),
chowChow   = new Dog('Chow Chow', 'Medium', 3, 'Brown');
