function buildPage(){

    var cat = document.getElementById("cat");
    var ech = document.getElementById("ech");
    var dog = document.getElementById("dog");

    var div = document.createElement('div');
    div.setAttribute("style", "position: absolute; width: 80vw; height: 80vh; background-color: white; z-index: 5; margin-top: -48%; margin-left: 10%;");
    var img = document.createElement('img');
    img.setAttribute('style', "height: 98%; width:60%; margin-left: 5px; margin-top: -48%; position: absolute;");
    var comment = document.createElement('div');
    comment.setAttribute('style', "height: 98%; width: 30%; margin-left: 65%; position:relative;")
    div.appendChild(comment);
    var userdiv = document.createElement('div');
    userdiv.setAttribute("style", "height: 30%; position: relative;")
    var circlediv = document.createElement('div');
    circlediv.setAttribute('style', "width: 50px; height: 50px; margin-left: 1%; margin-top: 4%;border: 3px solid black; border-radius: 50%; position: absolute;")
    userdiv.appendChild(circlediv);
    var username = document.createElement('p');
    username.setAttribute("style", "margin-left: 59px; font-weight: 600; margin-top: 7%; position: absolute;");
    userdiv.appendChild(username)
    comment.appendChild(userdiv)
    function catbig(){
        img.setAttribute('src', 'https://static1.squarespace.com/static/58052d3cb3db2b0b636f31ef/58c6e409b8a79b3150a419e2/58dd1e2f9de4bb47fd32da19/1490886192461/17629605_1857647117825783_6188950374519935462_n.jpg');
        div.appendChild(img);
        document.body.appendChild(div);
        username.textContent = "cat36048";
    }
    function encbig(){
        img.setAttribute('src', 'https://i.pinimg.com/originals/23/66/52/2366524105f8e7cf95e15909e3a0a008.jpg');
        div.appendChild(img);
        document.body.appendChild(div);
        username.textContent = "echidna04";
    }
    function dogbig(){
        img.setAttribute('src', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12212220/Chinese-Crested-History-07.jpg');
        div.appendChild(img);
        document.body.appendChild(div);
        username.textContent = "crested39";
    }
    function work(){
        cat.addEventListener('click', function() {
            catbig();
          })
        ech.addEventListener('click', function() {
            encbig();
          })
        dog.addEventListener('click', function() {
            dogbig();
          })
    }
    work();
}