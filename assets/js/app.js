document.addEventListener('DOMContentLoaded', function() {
    const emBreve = document.querySelectorAll('.emBreve');
    emBreve.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Em breve');
        });
    });
});