function SendMail(){
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    try {
        emailjs.send("service_3qlkewf","template_l4bpskf",params).then(function(res){
            alert("Your message has been send! I'll contact you shortly")
        })
    } catch (error) {
        alert("Some error occured! Contact via whatsApp or email")
    }

}