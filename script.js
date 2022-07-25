const projects = [
	{
		name: 'qr-code-component-main',
		github:
			''
	},
	{
		name: 'nft-preview-card-component-main',
		github:
			''
	},
	{
		name: 'base-apparel-coming-soon-master',
		github:
			''
	},
	{
		name: 'clipboard-landing-page-master',
		github:
			''
	},
	{
		name: 'fylo-landing-page',
		github:
			''
	},
	{
		name: 'huddle-landing-page',
		github:
			''
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, github }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html" target="_blank" >
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatName(name)}</p>
		</a>

		<div class="links-container">
			<a href="/${name}/index.html" class="blue" target="_blank" >
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="github" target="_blank" >
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatName(name) {
	return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
