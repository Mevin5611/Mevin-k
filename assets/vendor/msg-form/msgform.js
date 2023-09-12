let msgform = document.querySelectorAll('.comment-form');
let timeout1;

function relod1() {
    timeout1 = setTimeout(vanish1, 3000);
}

function vanish1() {
    document.getElementById('success1').classList.remove('d-block');
}


msgform.forEach(function (e) {
    e.addEventListener('submit', function sendMsg(e) {
        e.preventDefault();
        loaddelay=setTimeout(send,3000);
        let thisForm1 = this;
        document.getElementById('loading1').classList.add('d-block');
        function send(){
            document.getElementById('loading1').classList.remove('d-block');
            Email.send({
                SecureToken: "59abed73-647d-4a5d-88fd-d79eedb028c5",
                To: 'mevinmevi88@gmail.com',
                From: "smartlabverifysample@gmail.com",
                Subject: "New Feedback message",
                Body: "Name :" + document.getElementById("form_name").value
                    + "<br> Message :" + document.getElementById("form_message").value
            }).then((response) => {
    
                if (response.trim() == 'OK') {
                    document.getElementById('success1').classList.add('d-block');
                    thisForm1.reset();
                    relod1();
    
                } else {
                    document.getElementById('fail1').classList.add('d-block');
                }
    
            });
        }
    });
});