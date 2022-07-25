const projects = [
	{
		name: 'qr-code-component-main',
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/qr-code-component-main'
	},
	{
		name: 'nft-preview-card-component-main',
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/nft-preview-card-component-main'
	},
	{
		name: 'base-apparel-coming-soon-master',
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/base-apparel-coming-soon-master'
	},
	{
		name: 'clipboard-landing-page-master',
		github:
			'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/clipboard-landing-page-master'
	},
	{
		name: 'fylo-landing-page',
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/fylo-landing-page'
	},
	{
		name: 'huddle-landing-page',
		github:
		'https://github.com/Ahmed3zzeldeen/Frontend-mentor-challenges-master/tree/main/huddle-landing-page'
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, github }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html" target="_blank" >
			<img src="./${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatName(name)}</p>
		</a>

		<div class="links-container">
			<a href="./${name}/index.html" class="blue" target="_blank" >
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
