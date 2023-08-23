//objects

//object literals
let user = {
    name: 'crystal',
    age: 30, 
    email: 'jamesnyaundi260@gmail.com',
    location: 'Embu',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs : function(){
        this.blogs
    }
};
 //adding methods to an object
user.login();
user.logout(); 

 const name = 'mario';
 name.toUpperCase();
