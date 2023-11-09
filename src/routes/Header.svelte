<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/lac-sa.png';
	import sappihre from '$lib/images/sapphire-logo.png';
</script>

<header>
	<div class="leftCornerH">
		<a href="https://www.campinglacsa.com/">
			<img src={logo} alt="Camping Lac St-Augustin" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/clock' ? 'page' : undefined}>
				<a href="/clock">Chalets </a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="rightCornerH">
		<!-- <a href="https://www.sapphiredesign.io/"> -->
			<img src={sappihre} alt="Sapphire Design" />
		<!-- </a> -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.leftCornerH { width: 6em; height: 5em;}
	/* .leftCornerH a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%; } */
	.leftCornerH img { width: 5em; height: 5em; object-fit: contain;}

	.rightCornerH { width: 4em; height: 4em;}
	.rightCornerH img { width: 3em; height: 3em; object-fit: contain;}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(29, 48, 75, 0.85);
		--color-text: rgba(255, 255, 255, 0.9);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-2);
		view-transition-name: indicator;
	}

	nav a {
		display:flex;
		height: 100%;
		align-items: center;
		padding: 0.5rem;
		padding-top: 1em;
		color: var(--color-text);
		font-weight: 900;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-2);

	}
</style>
