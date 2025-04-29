document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", async function (e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        let fullName = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let messenger = document.getElementById("messenger").value.trim();
        let courses = document.getElementById("courses").value.trim();
        // Собираем предпочтительный способ связи
        let contactMethods = Array.from(document.querySelectorAll("input[name='contactMethod']:checked"))
            .map(method => method.value)
            .join(", ");
    
        let spd = Array.from(document.querySelectorAll("input[name='spd']:checked"))
            .map(method => method.value)
            .join(", ");


        // Формируем примечание (курс + предпочтительный способ связи)
        let description = `Курс: ${courses}. Связаться через: ${contactMethods}. Телграм: ${messenger}. spd ${spd}`;

        let data = {
            fullName,
            phone,
            description // Курс + способ связи в примечаниях
        };

        try {
            let response = await fetch("https://arhimed-centr.t8s.ru/Api/V2/AddStudyRequest", { // ВСТАВЬ URL HOLYHOPE
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
