async function fetchGitHubRepos(username) {
    const container = document.getElementById('github-feed');
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        container.innerHTML = repos.map(repo => `
            <div class="p-5 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all">
                <a href="${repo.html_url}" target="_blank" class="text-sm font-bold text-slate-200 hover:text-cyan-400 block mb-2">${repo.name}</a>
                <p class="text-[10px] text-slate-500 h-8 line-clamp-2">${repo.description || 'No description provided.'}</p>
            </div>
        `).join('');
    } catch (e) { container.innerHTML = '<p class="text-xs text-red-500 uppercase">TELEMETRY_FAILURE</p>'; }
}
fetchGitHubRepos('abhiiimanyu-x7');