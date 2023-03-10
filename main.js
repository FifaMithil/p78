var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
var updatedImage = [];
var updatedName = [];

function update() {
    i++;
    var numbers_of_family_member_in_array = 6;
    if (i >= numbers_of_family_member_in_array) {
        i = 0;
    }
    
    updatedImage[0] = images[i];
    updatedName[0] = names[i];
 
    document.getElementById("family_member_image").src = updatedImage[0];
    document.getElementById("family_member_name").innerHTML = updatedName[0];
}
