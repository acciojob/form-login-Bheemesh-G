function getFormvalue() {
    //Write your code here

	const form = document.getElementById("form1");

	form.addEventListener("submit",(event)=>{
		event.preventDefault();
		const formData = new FormData(form);
		let firstName = formData.get("fname");
		let lastName = formData.get("lname");
		alert(`${firstName} ${lastName}`);
	});

}
