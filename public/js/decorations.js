document.addEventListener("DOMContentLoaded", function () {
    const numLines = 3; // Количество линий
    const container = document.body;

    for (let i = 0; i < numLines; i++) {
        let line = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        line.classList.add("decorative-line");
        line.setAttribute("viewBox", "0 0 100 100");
        line.setAttribute("preserveAspectRatio", "none");

        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", `M10,0 C${20 + Math.random() * 60},${20 + Math.random() * 60} ${40 + Math.random() * 30},${60 + Math.random() * 30} 90,100`);
        path.setAttribute("stroke", "var(--blue)");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke-dasharray", "5,5");

        line.appendChild(path);
        container.appendChild(line);
    }
});
