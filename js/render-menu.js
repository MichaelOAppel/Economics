// Bygger den faste venstremenu ("Alle Temaer") på kapitel-siderne
// ud fra den centrale liste i temaer.js. Kaldes fra hver kapitel-side med:
//   renderThemeMenu(CURRENT_ID);
// hvor CURRENT_ID er nummeret på det tema, siden selv handler om.
function renderThemeMenu(currentId) {
    const list = document.getElementById('theme-menu');
    if (!list) return;

    chapters.forEach(chapter => {
        const filename = 'kapitel' + chapter.id + '.html';
        const li = document.createElement('li');
        li.className = 'menu-item';

        if (chapter.id === currentId) {
            // Aktivt tema: fed, blå titel + evt. undermenu med sidens egne afsnit
            let html = `<a href="${filename}" class="block font-bold text-blue-900 text-lg">${chapter.title}</a>`;

            if (chapter.sections && chapter.sections.length > 0) {
                const items = chapter.sections.map(section => {
                    const isReflection = section.label.toLowerCase().includes('kritisk blik');
                    const cls = isReflection
                        ? 'font-semibold text-indigo-600'
                        : 'hover:text-blue-900 transition-colors';
                    return `<li><a href="#${section.anchor}" class="${cls}">${section.label}</a></li>`;
                }).join('');
                html += `<ul class="sub-menu pl-4 border-l-2 border-blue-200 space-y-3 text-sm text-slate-600 mt-2">${items}</ul>`;
            }
            li.innerHTML = html;
        } else {
            // Inaktivt tema: almindeligt link
            const textColorClass = chapter.isAdhoc ? 'text-red-600' : 'text-slate-600';
            li.innerHTML = `<a href="${filename}" class="block font-semibold ${textColorClass} hover:text-blue-900 transition-colors">${chapter.title}</a>`;
        }

        list.appendChild(li);
    });
}
