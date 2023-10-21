<script>
    document.querySelectorAll('a[href^="#section1"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href #section1')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
</script>
