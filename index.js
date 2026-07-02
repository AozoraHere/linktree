function copyDiscord() {
    navigator.clipboard.writeText("skyyynight");
    
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}