document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let contactMethod = document.getElementById("contactMethod").value;

        // Собираем выбранные курсы
        let courses = [];
        document.querySelectorAll("input[name='course']:checked").forEach(course => {
            courses.push(course.value);
        });

        let data = {
            name: name,
            phone: phone,
            email: email,
            contactMethod: contactMethod,
            courses: courses
        };

        try {
            let response = await fetch("https://crm.holyhope.com/webhook", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            let result = await response.json();

            if (response.ok) {
                document.getElementById("responseMessage").innerText = "Заявка успешно отправлена!";
                document.getElementById("contactForm").reset();
            } else {
                document.getElementById("responseMessage").innerText = "Ошибка отправки: " + result.message;
            }
        } catch (error) {
            document.getElementById("responseMessage").innerText = "Ошибка соединения с CRM.";
        }
    });
});
