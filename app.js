console.log('app.js')

let sheetUrl =
	'https://docs.google.com/spreadsheets/d/1NUz3xAaj60S4UdbK6UiLyBjoKhFrcFo-Opa-6nTcOmQ/edit?usp=sharing'

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/1NUz3xAaj60S4UdbK6UiLyBjoKhFrcFo-Opa-6nTcOmQ/od6/public/values?alt=json'


$.ajax({url: sheetAsJSON}).then(data => {
	console.log(data.feed.entry);

	// div that holds the projects
	const $project = $('.projectsContainer');
	// forEach method to loop through array
	const projects = data.feed.entry.forEach(project => {
		// div to hold the project description/anchor/img
		const $newProject = $('<div>').addClass('addedProjects');
		// anchor tag to hold img to link to codepen						   open in new tab
		const $projectLink = $('<a>').attr('href', project.gsx$link.$t).attr('target', '_blank')
		// used imgur to upload photo of project and uploaded to google sheet
		const $projectImage = $('<img>').attr('src', project.gsx$image.$t).addClass('img');
		// add project description to project div
		$newProject.text(project.gsx$description.$t).addClass('img-description');
		// adding individual project div to project container
		$project.append($newProject);
		// append anchor tag to individual project divs
		$newProject.append($projectLink);
		// append img to anchors
		$projectLink.append($projectImage);
	})
})
