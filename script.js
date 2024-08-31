function SendMail(){
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    try {
        emailjs.send("service_3qlkewf","template_l4bpskf",params).then(function(res){
            alert("Your message has been send! I'll contact you shortly")
        })
    } catch (error) {
        alert("Some error occured! Kindly contact me with social media sites! ")
    }

}