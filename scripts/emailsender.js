const obj={
    service:"service_q8njkou",
    template:"template_6gfc1of",
    init:"kCJy6WiJZOqlOQite"
}
emailjs.init(obj.init);

let form = document.getElementById('form')

form.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    const data = new FormData(form)
    let params = {}
    data.forEach((value,key)=>params[key]=value)
    emailjs.send(obj.service, obj.template, params, obj.init);

    form.reset()

    Toastify({
        text: "EMAIL SENT",
        className: "info",
        style: {
        background: "#B89A5E",
        color: '#252525'
        },
        duration:3500
    }).showToast()
})
