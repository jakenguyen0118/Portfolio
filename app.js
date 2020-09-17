console.log('app.js')

let sheetUrl =
	'https://docs.google.com/spreadsheets/d/1NUz3xAaj60S4UdbK6UiLyBjoKhFrcFo-Opa-6nTcOmQ/edit?usp=sharing'

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/1NUz3xAaj60S4UdbK6UiLyBjoKhFrcFo-Opa-6nTcOmQ/od6/public/values?alt=json'


$.ajax({url: sheetAsJSON}).then(data => {
	console.log(data.feed.entry);

	const $project = $('.projectsContainer');
	const projects = data.feed.entry.forEach(project => {
		const $newProject = $('<div>').addClass('addedProjects');
		const $projectLink = $('<a>').attr('href', project.gsx$link.$t).attr('target', '_blank')
		const $projectImage = $('<img>').attr('src', project.gsx$image.$t).addClass('img');
		$newProject.text(project.gsx$description.$t).addClass('img-description');
		$project.append($newProject);
		$newProject.append($projectLink);
		$projectLink.append($projectImage);
	})
})
